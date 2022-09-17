from django.contrib.auth import logout as django_logout
from django.http import HttpResponse
from rest_framework import mixins, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from .models import UserProfile, Pet
from .serializers import UserProfileSerializer, PetSerializer, SignupSerializer


class UserProfileViewSet(viewsets.GenericViewSet):
    serializer_class = UserProfileSerializer
    queryset = UserProfile.objects

    @action(methods=('GET', 'PATCH'), detail=False, url_path='me', url_name='me')
    def me(self, request, *args, **kwargs):
        if request.method == 'PATCH':
            serializer = self.get_serializer(data=request.data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.update(instance=request.user.user_profile, validated_data=serializer.validated_data)
        else:  # request.method == 'GET':
            serializer = self.get_serializer(self.request.user.user_profile)
        return Response(serializer.data)

    def get_queryset(self):
        return super().get_queryset().filter(user=self.request.user)


class SignupUserViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    permission_classes = (AllowAny, )
    serializer_class = SignupSerializer


def logout(request):
    django_logout(request)
    return HttpResponse(status=200)


class PetViewSet(mixins.CreateModelMixin,
                     mixins.RetrieveModelMixin,
                     mixins.DestroyModelMixin,
                     mixins.ListModelMixin,
                     viewsets.GenericViewSet):
    queryset = Pet.objects
    serializer_class = PetSerializer
    lookup_field = 'uuid'

    def get_queryset(self):
        """
        Restrict the returned list of pets by filtering against the current user.
        """
        queryset = super().get_queryset().filter(owner=self.request.user)
        return queryset
