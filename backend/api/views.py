from django.shortcuts import render
from .serializers import ProductSerializer
from .models import Product
from rest_framework import viewsets

class ProductCRUDView(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
