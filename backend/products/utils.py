import qrcode
from io import BytesIO
from django.core.files import File
from .models import Product


def generate_qr(product):
    qr = qrcode.make(f"http://localhost:5176/product/{product.id}")
    buffer = BytesIO()
    qr.save(buffer)
    product.qr_code.save(
        f"product_{product.id}.png",
        File(buffer),
        save=False,
    )
