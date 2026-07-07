from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import LoginView, RegisterView, ProfileView, AdminUserViewSet

router = DefaultRouter()
router.register("admin/users", AdminUserViewSet, basename="admin-users")

urlpatterns = [
    path("register/", RegisterView.as_view()),
    path("login/", LoginView.as_view(), name="login"),
    path("profile/", ProfileView.as_view(), name="profile"),
    path("", include(router.urls)),
]