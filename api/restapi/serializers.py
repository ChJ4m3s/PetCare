from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers, validators

from .models import UserProfile, Pet


class SignupSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True, validators=[validators.UniqueValidator(queryset=User.objects.all())])

    class Meta:
        model = User
        fields = (
            'email',
            'password',
            'first_name',
            'last_name',
        )
        extra_kwargs = {
            'password': {'write_only': True, 'required': True, 'validators': [validate_password]},
            'first_name': {'required': True},
            'last_name': {'required': True},
        }

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['email'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )
        user.set_password(validated_data['password'])
        user.save()
        user_profile = UserProfile.objects.create(user=user)
        user_profile.save()
        return user


class UserProfileSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(required=False)
    last_name = serializers.CharField(required=False)

    class Meta:
        model = UserProfile
        read_only_fields = (
            'uuid',
            'email',
        )
        fields = read_only_fields + (
            'first_name',
            'last_name',
        )

    def update(self, instance, validated_data):
        instance.avatar_url = validated_data.get('avatar_url', instance.avatar_url)
        instance.description = validated_data.get('description', instance.description)
        instance.save()

        user = instance.user
        user.first_name = validated_data.get('first_name', user.first_name)
        user.last_name = validated_data.get('last_name', user.last_name)
        user.save()

        return instance


class PetSerializer(serializers.ModelSerializer):
    owner = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Pet
        read_only_fields = (
            'uuid',
            'owner',
        )
        fields = read_only_fields + (
            'name',
            'birthdate',
            'specie',
            'avatar_url',
        )
