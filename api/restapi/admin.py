from django.contrib import admin
from django.utils.text import Truncator

from .models import UserProfile, Pet, Measure, Food


class DefaultAdminClass(admin.ModelAdmin):
    save_on_top = True
    list_per_page = 50

    def has_add_permission(self, request, obj=None):
        return request.user.is_superuser

    def has_change_permission(self, request, obj=None):
        return request.user.is_superuser

    def has_delete_permission(self, request, obj=None):
        return request.user.is_superuser

    @admin.display(description='UUID')
    def uuid_truncated(self, obj):
        return Truncator(obj.uuid).chars(7)


@admin.register(UserProfile)
class UserProfileAdmin(DefaultAdminClass):
    list_display = (
        'uuid_truncated',
        'full_name',
        'email',
    )
    list_display_links = (
        'uuid_truncated',
        'full_name',
    )
    readonly_fields = (
        'uuid',
        'full_name',
        'email',
        'username',
        'creation_date',
        'last_change_date',
    )
    search_fields = (
        'user__email',
        'user__first_name',
        'user__last_name',
    )
    list_select_related = (
        'user',
    )
    fieldsets = (
        (None, {
            'fields': (
                'uuid',
                'full_name',
                'email',
                'username',
            ),
        }),
        ('Timestamps', {
            'classes': ('collapse', 'wide'),
            'fields': (
                'creation_date',
                'last_change_date',
            ),
        }),
    )

    @admin.display(boolean=True)
    def has_desc(self, obj):
        return bool(obj.description)


@admin.register(Pet)
class PetAdmin(DefaultAdminClass):
    list_display = (
        'uuid_truncated',
        'name',
        'owner',
        'specie',
    )
    list_display_links = (
        'uuid_truncated',
    )
    list_editable = (
        'name',
    )
    fieldsets = (
        (None, {
            'fields': (
                'name',
                'uuid',
                'owner',
                'birthdate',
                'specie',
                'avatar_url',
            ),
        }),
        ('Timestamps', {
            'classes': ('collapse', 'wide'),
            'fields': (
                'creation_date',
                'last_change_date',
            ),
        }),
    )
    readonly_fields = (
        'uuid',
        'creation_date',
        'last_change_date',
    )

    @admin.display(boolean=True)
    def has_avatar(self, obj):
        return bool(obj.avatar_url)


@admin.register(Food)
class FoodAdmin(DefaultAdminClass):
    list_display = (
        'uuid_truncated',
        'name',
    )
    list_display_links = (
        'uuid_truncated',
    )
    fieldsets = (
        (None, {
            'fields': (
                'uuid',
                'name',
                'nutrients',
            ),
        }),
        ('Timestamps', {
            'classes': ('collapse', 'wide'),
            'fields': (
                'creation_date',
                'last_change_date',
            ),
        }),
    )
    readonly_fields = (
        'uuid',
        'creation_date',
        'last_change_date',
    )


@admin.register(Measure)
class FrameAdmin(DefaultAdminClass):
    list_display = (
        'uuid_truncated',
        'pet',
        'unit',
        'category',
        'value',
        'timestamp',
    )
    list_display_links = (
        'uuid_truncated',
    )
    list_filter = (
        'category',
    )
    readonly_fields = (
        'uuid',
        'timestamp',
        'creation_date',
        'last_change_date',
    )
