from rest_framework import generics, status, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView

from .models import User
from .permissions import IsAdmin
from .serializers import (
    RegisterSerializer,
    ProfileSerializer,
    AdminUserSerializer,
    ResetPasswordSerializer,
)


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer


class LoginView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        if response.status_code == 200:
            username = request.data.get("username")
            if username:
                user = User.objects.filter(username=username).first()
                if user:
                    response.data["role"] = user.role
                    response.data["username"] = user.username
        return response


class ProfileView(generics.RetrieveUpdateAPIView):
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user


class AdminUserViewSet(viewsets.ModelViewSet):
    """
    Admin-only: list/add/edit/delete users, activate/deactivate,
    reset passwords, assign roles.
    """
    queryset = User.objects.all().order_by("-date_joined")
    serializer_class = AdminUserSerializer
    permission_classes = [IsAdmin]

    @action(detail=True, methods=["patch"])
    def set_active(self, request, pk=None):
        user = self.get_object()
        is_active = request.data.get("is_active")
        if is_active is None:
            return Response({"detail": "is_active is required."}, status=status.HTTP_400_BAD_REQUEST)
        user.is_active = bool(is_active)
        user.save(update_fields=["is_active"])
        return Response(AdminUserSerializer(user).data)

    @action(detail=True, methods=["post"])
    def reset_password(self, request, pk=None):
        user = self.get_object()
        serializer = ResetPasswordSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user.set_password(serializer.validated_data["new_password"])
        user.save(update_fields=["password"])
        return Response({"detail": "Password reset successfully."})

    @action(detail=True, methods=["patch"])
    def assign_role(self, request, pk=None):
        user = self.get_object()
        role = request.data.get("role")
        valid_roles = [choice[0] for choice in User.ROLE_CHOICES]
        if role not in valid_roles:
            return Response({"detail": f"role must be one of {valid_roles}"}, status=status.HTTP_400_BAD_REQUEST)
        user.role = role
        user.save(update_fields=["role"])
        return Response(AdminUserSerializer(user).data)