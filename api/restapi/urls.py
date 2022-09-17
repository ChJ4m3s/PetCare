from django.urls import path, include
from rest_framework import routers
from rest_framework.authtoken import views as drf_authtoken_views

from .apps import ApiConfig
from .views import UserProfileViewSet, SignupUserViewSet, logout, PetViewSet

router = routers.DefaultRouter()
router.register(r'', UserProfileViewSet, 'users')
router.register(r'signup', SignupUserViewSet, 'signup')
router.register(r'pet', PetViewSet, 'pet')

app_name = ApiConfig.name

urlpatterns = (
    path('', include(router.urls)),
    path('login', drf_authtoken_views.obtain_auth_token, name='login'),
    path('logout', logout, name='logout'),
)
