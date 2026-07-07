from rest_framework import viewsets, permissions
from .models import Order
from .serializers import OrderSerializer


class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.role == "farmer":
            return Order.objects.filter(product__farmer=user).order_by("-order_date")
        if user.role == "customer":
            return Order.objects.filter(customer=user).order_by("-order_date")
        return Order.objects.all().order_by("-order_date")

    def perform_create(self, serializer):
        serializer.save(customer=self.request.user)
