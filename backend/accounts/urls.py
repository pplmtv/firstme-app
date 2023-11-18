from django.urls import path, include, re_path
from .views import GoogleLoginView

urlpatterns = [
    path("google/", GoogleLoginView.as_view(), name="google"),
]
