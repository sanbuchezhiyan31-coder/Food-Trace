from django.db import models
from django.conf import settings


class Product(models.Model):

    CATEGORY_CHOICES = [
        ("Vegetables", "Vegetables"),
        ("Fruits", "Fruits"),
        ("Grains", "Grains"),
        ("Spices", "Spices"),
    ]

    farmer = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="products"
    )

    product_name = models.CharField(max_length=100)

    category = models.CharField(
        max_length=30,
        choices=CATEGORY_CHOICES
    )

    quantity = models.PositiveIntegerField()

    unit = models.CharField(
        max_length=20,
        default="Kg"
    )

    price = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    harvest_date = models.DateField()

    expiry_date = models.DateField()

    farm_location = models.CharField(max_length=200)

    description = models.TextField(blank=True)

    image = models.ImageField(
        upload_to="products/",
        blank=True,
        null=True,
    )

    qr_code = models.ImageField(
        upload_to="qrcodes/",
        blank=True,
        null=True,
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.product_name