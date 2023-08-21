from rest_framework import serializers
from .models import Componentes

class ComponentesSerializer(serializers.ModelSerializer):
  class Meta:
    model = Componentes
    fields = ['id', 'descricao', 'nome', 'referencia', 'quantidade']
