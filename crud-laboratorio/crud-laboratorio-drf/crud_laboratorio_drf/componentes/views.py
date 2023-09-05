from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from componentes.models import Componentes
from componentes.serializers import ComponentesSerializer

import psutil
from prometheus_client import Gauge

process_resident_memory = Gauge('my_django_app_process_resident_memory_bytes',
                                 'Resident memory size in bytes for my Django app')

def update_memory_metric():
    process = psutil.Process()
    memory_info = process.memory_info()
    process_resident_memory.set(memory_info.rss)

@api_view(['GET', 'POST'])
def componente_list(request):
    update_memory_metric()

    """
    List all code componentes, or create a new componente.
    """

    if request.method == 'GET':
        componentes = Componentes.objects.all()
        serializer = ComponentesSerializer(componentes, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ComponentesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def componente_detail(request, pk):
    update_memory_metric()

    """
    Retrieve, update or delete a code componente.
    """
    
    try:
        componente = Componentes.objects.get(pk=pk)
    except Componentes.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ComponentesSerializer(componente)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ComponentesSerializer(componente, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        componente.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
