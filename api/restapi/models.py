import uuid

from django.contrib.auth.models import User
from django.db import models


class DateTimeAbstractModel(models.Model):
    creation_date = models.DateTimeField(auto_now_add=True, db_index=True)
    last_change_date = models.DateTimeField(auto_now=True, db_index=True)

    class Meta:
        abstract = True


class UserProfile(DateTimeAbstractModel):
    uuid = models.UUIDField(verbose_name='UUID', unique=True, default=uuid.uuid4, editable=False)
    user = models.OneToOneField(User, verbose_name='User', related_name='user_profile', on_delete=models.CASCADE)
    avatar_url = models.URLField(verbose_name='Avatar URL', null=True, blank=True)
    description = models.TextField(verbose_name='Description', null=True, blank=True)

    class Meta:
        verbose_name = "User profile"
        verbose_name_plural = "User profiles"
        ordering = ('-creation_date', 'uuid')

    @property
    def email(self):
        return self.user.email

    @property
    def username(self):
        return self.user.username

    @property
    def first_name(self):
        return self.user.first_name

    @property
    def last_name(self):
        return self.user.last_name

    @property
    def full_name(self):
        return self.user.get_full_name()

    def __str__(self):
        return self.full_name


class Pet(DateTimeAbstractModel):
    uuid = models.UUIDField(verbose_name='UUID', unique=True, default=uuid.uuid4, editable=False)
    owner = models.ForeignKey(User, verbose_name='Owner', related_name='pets', on_delete=models.CASCADE)
    name = models.CharField(verbose_name="Artwork's contract address", max_length=100, null=True)
    birthdate = models.CharField(verbose_name="Token id", max_length=100)
    specie = models.CharField(verbose_name="Owner's wallet address", max_length=100, null=True)
    avatar_url = models.URLField(verbose_name='Avatar URL', null=True, blank=True)

    class Meta:
        verbose_name = 'Pet'
        verbose_name_plural = 'Pets'
        ordering = ('-last_change_date',)

    def __str__(self):
        return self.name


class Food(DateTimeAbstractModel):
    uuid = models.UUIDField(verbose_name='UUID', unique=True, default=uuid.uuid4, editable=False)
    name = models.CharField(verbose_name='Name', max_length=100, null=True, blank=True)
    nutrients = models.TextField(verbose_name='Description', null=True, blank=True)

    class Meta:
        verbose_name = 'Food'
        verbose_name_plural = 'Foods'
        ordering = ('-last_change_date',)

    def __str__(self):
        return self.name


class Measure(DateTimeAbstractModel):
    uuid = models.UUIDField(verbose_name='UUID', unique=True, default=uuid.uuid4, editable=False)
    pet = models.ForeignKey(Pet, verbose_name='Pet', related_name='measures', on_delete=models.CASCADE)
    unit = models.CharField(verbose_name='Unit', max_length=100, null=True, blank=True)
    category = models.CharField(verbose_name='Category', max_length=100, null=True, blank=True)
    value = models.CharField(verbose_name='Value', max_length=100, null=True, blank=True)
    timestamp = models.DateTimeField(verbose_name='Timestamp', auto_now=True, db_index=True)
    note = models.TextField(verbose_name='Note', null=True, blank=True)
    source = models.CharField(verbose_name='Name', max_length=250, null=True, blank=True)

    class Meta:
        verbose_name = 'Measure'
        verbose_name_plural = 'Measures'
        ordering = ('-last_change_date',)

    def __str__(self):
        return f'{self.category}: {self.value} - {self.timestamp}'
