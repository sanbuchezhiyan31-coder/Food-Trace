from django.db import models
from products.models import Product


STATUS_CHOICES = [
    ("Harvested", "Harvested"),
    ("Packed", "Packed"),
    ("Dispatched", "Dispatched"),
    ("In Transit", "In Transit"),
    ("Retailer Received", "Retailer Received"),
    ("Delivered", "Delivered"),
]


class Tracking(models.Model):
    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        related_name="tracking_history"
    )
    status = models.CharField(
        max_length=30,
        choices=STATUS_CHOICES
    )
    location = models.CharField(max_length=200)
    updated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.product.product_name} - {self.status}"