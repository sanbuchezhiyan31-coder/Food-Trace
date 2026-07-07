from rest_framework.routers import DefaultRouter
from .views import TrackingViewSet

router = DefaultRouter()
router.register("tracking", TrackingViewSet)

urlpatterns = router.urls
