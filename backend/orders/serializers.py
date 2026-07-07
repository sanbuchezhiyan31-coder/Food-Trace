from rest_framework import serializers
from .models import Order
from products.serializers import ProductSerializer
from products.models import Product


class OrderSerializer(serializers.ModelSerializer):
    product_detail = ProductSerializer(source="product", read_only=True)
    customer_name = serializers.CharField(source="customer.username", read_only=True)

    class Meta:
        model = Order
        fields = [
            "id",
            "customer",
            "customer_name",
            "product",
            "product_detail",
            "quantity",
            "total_price",
            "order_date",
            "delivery_status",
        ]
        read_only_fields = ["customer", "total_price", "order_date"]

    def create(self, validated_data):
        product = validated_data["product"]
        quantity = validated_data["quantity"]
        validated_data["total_price"] = product.price * quantity
        return super().create(validated_data)
