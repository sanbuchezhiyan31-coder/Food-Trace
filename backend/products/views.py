from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAuthenticated

from .models import Product
from .serializers import ProductSerializer
from .utils import generate_qr


class ProductViewSet(viewsets.ModelViewSet):

    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_permissions(self):
        if self.action in {"create", "update", "partial_update", "destroy"}:
            return [IsAuthenticated()]
        return [AllowAny()]

    def get_queryset(self):
        if self.request.user.is_authenticated and self.action in {"list", "retrieve"}:
            return Product.objects.all()
        return Product.objects.all()

    def perform_create(self, serializer):
        product = serializer.save(farmer=self.request.user)
        generate_qr(product)
        product.save(update_fields=["qr_code"])