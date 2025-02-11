from rest_framework.response import Response
from rest_framework import status, generics
from .models import User
from .serializers import UserSerializer, LoginSerializer
from rest_framework_simplejwt.tokens import RefreshToken


class RegisterView(generics.CreateAPIView):
    """User Registration API"""

    queryset = User.objects.all()
    serializer_class = UserSerializer


class LoginView(generics.GenericAPIView):
    """User Login API"""

    serializer_class = LoginSerializer

    def post(self, request):
        # check input is valid
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # debugging
        print("Validated Data:", serializer.validated_data)

        user = serializer.validated_data["user"]

        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)

        return Response(
            {
                "access": access_token,
                "refresh": str(refresh),
                "user": {
                    "id": user.id,
                    "username": user.username,
                },
            },
            status=status.HTTP_200_OK,
        )
