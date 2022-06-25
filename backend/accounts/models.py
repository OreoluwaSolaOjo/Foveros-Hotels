from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class UserAccountManager(BaseUserManager):
    def create_user(self, firstName, lastName, email, password=None):
        if not email:
            raise valueError('Please enter a valid email address')
        email = self.normalize_email(email)
        user = self.model(email=email, firstName=firstName, lastName=lastName)
# This is going to create an hashed version of the password
        user.set_password(password)
        user.save()
        return user
    # def create_staffuser(self, firstName, lastName, email, password):
    #     """
    #     Creates and saves a staff user with the given email and password.
    #     """
    #     user = self.create_user(
    #         email,
    #         password=password,
    #         firstName,
    #         lastName
    #     )
    #     user.staff = True
    #     user.save(using=self._db)
    #     return user

    def create_superuser(self, firstName, lastName, email, password):
        """
        Creates and saves a superuser with the given email and password.
        """
        user = self.create_user(email=self.normalize_email(
            email), firstName=firstName, lastName=lastName, password=password)

        user.is_active = True
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    firstName = models.CharField(max_length=255)
    lastName = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['firstName', 'lastName', 'password']

    def get_full_name(self):
        return self.firstName, self.lastName

    def get_short_name(self):
        return self.firstName

    def __str__(self):
        return self.email
