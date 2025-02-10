from rest_framework.response import Response
from rest_framework import status, generics
from .models import User
from .serializers import UserSerializer, LoginSerializer


class RegisterView(generics.CreateAPIView):
    """User Registration API"""

    queryset = User.objects.all()
    serializer_class = UserSerializer


class LoginView(generics.GenericAPIView):
    """User Login API"""

    serializer_class = LoginSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.validated_data, status=status.HTTP_200_OK)

