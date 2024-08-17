from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

    def update(self, instance, validated_data):
        # Agar rasm maydoni mavjud bo'lsa, uni yangilaydi
        if 'image' in validated_data:
            instance.image = validated_data.get('image', instance.image)
        
        # Boshqa maydonlarni yangilash
        instance.name = validated_data.get('name', instance.name)
        instance.price = validated_data.get('price', instance.price)
        instance.description = validated_data.get('description', instance.description)
        instance.category = validated_data.get('category', instance.category)
        
        instance.save()
        return instance