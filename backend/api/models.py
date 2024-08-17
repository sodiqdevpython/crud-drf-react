from django.db import models
from django.core.validators import FileExtensionValidator


class Product(models.Model):
    name = models.CharField(max_length=64)
    price = models.DecimalField(max_digits=20, decimal_places=2)
    description = models.TextField()
    image = models.ImageField(upload_to='product/', validators=[
        FileExtensionValidator(
            allowed_extensions = ['png','jpeg','JPG','webp'],
            message = "To'g'ri rasm formatini kirting"
        )
    ])
    
    category = models.CharField(max_length=128)

    def __str__(self) -> str:
        return self.name
    
