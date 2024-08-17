from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductCRUDView

router = DefaultRouter()
router.register(r'', ProductCRUDView)

urlpatterns = [
    path('',include(router.urls)),
    
]