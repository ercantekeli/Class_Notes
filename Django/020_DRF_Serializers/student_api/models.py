from importlib.resources import path
from django.db import models



class Path(models.Model):
    path_name = models.CharField(max_length=10)

    def __str__(self):
        return self.path_name
class Student(models.Model):
    path = models. ForeignKey(Path, related_name="students", on_delete=models.CASCADE)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    number = models.IntegerField(blank=True, null=True)
    register_date = models.DateTimeField(auto_now_add=True)

    # blank=True for admin dashboard
    # null=True for db
    
    def __str__(self):
        return self.last_name

