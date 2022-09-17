from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from restapi.swagger import swagger_urlpatterns

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('restapi.urls', namespace='v1')),
]

urlpatterns += swagger_urlpatterns
urlpatterns += [
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += [
        path('__debug__/', include(debug_toolbar.urls)),
    ]

admin.site.site_header = 'PetCare API Admin Panel'
admin.site.site_title = 'PetCare API Admin Panel'
