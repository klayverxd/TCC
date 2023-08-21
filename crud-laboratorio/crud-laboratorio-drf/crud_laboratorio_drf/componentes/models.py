from django.db import models

# Create your models here.

class Componentes(models.Model):
    nome = models.CharField(max_length=255)
    descricao = models.CharField(max_length=255)
    referencia = models.TextField()
    quantidade = models.IntegerField()

    class Meta:
        db_table = 'componentes'

    def __str__(self):
        return self.nome
