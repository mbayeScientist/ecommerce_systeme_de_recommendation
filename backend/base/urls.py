#fichier urls de l'app base
from django.urls import path
from . import views
urlpatterns = [
    path("", views.getRoutes, name="routes"),
    path("routes/", views.getRoutes, name="routes"),
    path("products/", views.getProducts, name="products"),
]