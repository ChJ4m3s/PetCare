from django.conf import settings
from django.urls import re_path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions

schema_view = get_schema_view(
    openapi.Info(
        title='Petcare API',
        default_version='v1',
        description='Swagger dashboard for PetCare apis.\n\n'
                    'NB: Just for demo purpose, at the moment all the endpoints DONT require authentication',
        terms_of_service='',
        contact=openapi.Contact(email=settings.EMAIL_ADDRESS_TECH),
        license=openapi.License(name="[Add License Name Here]"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

swagger_urlpatterns = (
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    re_path(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
)
