import os
import re

import sentry_sdk
from sentry_sdk.integrations.django import DjangoIntegration

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.0/howto/deployment/checklist/
print('-------- Production settings have been loaded. --------')

DEBUG = False

SECRET_KEY = os.environ.get('SECRET_KEY')

DATABASE_URL = os.environ.get('DATABASE_URL')
# Postgres database connection url is like: 'postgres://user:password@host:5432/db_name'
POSTGRES_DB_URL_REGEX = 'postgres://(.*?):(.*?)@(.*?):(.*?)/(.*)'
DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME = re.match(POSTGRES_DB_URL_REGEX, DATABASE_URL).groups()

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': DB_NAME,
        'USER': DB_USER,
        'PASSWORD': DB_PASS,
        'HOST': DB_HOST,
        'PORT': DB_PORT,  # 5432
    }
}

# Url configurations
DOMAIN = "petcare.com"
DOMAIN_PROTOCOL = 'https'
DOMAIN_URL = DOMAIN_PROTOCOL + "://www." + DOMAIN
HEROKU_APP_NAME = 'petcare-hackzurich'

# Password validation
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

ALLOWED_HOSTS = (
    HEROKU_APP_NAME + '.herokuapp.com',
    DOMAIN,
    'www.' + DOMAIN,
    'localhost',
)

sentry_sdk.init(
    dsn=os.environ.get('SENTRY_DSN'),
    integrations=[DjangoIntegration()],
    # Set traces_sample_rate to 1.0 to capture 100% of transactions for performance monitoring.
    # We recommend adjusting this value in production.
    traces_sample_rate=1.0,
    environment='prod',
    # To associate users to errors (assuming you are using django.contrib.auth) you may enable sending PII data
    send_default_pii=True,
)
