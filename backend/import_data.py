import os
import django

# Configure the settings for the project
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from django.contrib.auth.models import User
from base.models import Product
from base import products  # Assurez-vous que 'products.py' est dans le même dossier que 'import_data.py'

def import_products():
    try:
        for product in products.products:
            user = User.objects.filter(username='admin').first()  # Assignez un utilisateur par défaut
            Product.objects.create(
                user=user,
                name=product['name'],
                image=product['image'],
                brand=product['brand'],
                category=product['category'],
                description=product['description'],
                rating=product['rating'],
                numReviews=product['numReviews'],
                price=product['price'],
                countInStock=product['countInStock']
            )
        print("Products imported successfully")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == '__main__':
    import_products()
