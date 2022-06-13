from asyncio import tasks
from queue import PriorityQueue
from turtle import done
from django.db import models

class Todo(models.Model):
    task = models.CharField(max_length=50)
    description = models.TextField()
    TITLE = (
        ("H", "High"),
        ("M", "Medium"),
        ("L", "Low"),
    )
    priority = models.CharField(max_length=50, choices=TITLE, default="L")
    done= models.BooleanField()
    createdDate = models.DateTimeField(auto_now_add=True)
    updatedDate = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.task