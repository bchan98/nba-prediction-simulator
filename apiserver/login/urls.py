from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import RegisterView, LoginView

urlpatterns = [
    # api path for registration
    path("register/", RegisterView.as_view(), name="register"),
    # api path for logging in
    path("login/", LoginView.as_view(), name="login"),
    # api path for refreshing login token
    path("refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]
