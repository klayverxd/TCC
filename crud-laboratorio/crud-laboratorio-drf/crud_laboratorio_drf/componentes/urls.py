from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from componentes import views

urlpatterns = [
    path('componentes/', views.componente_list),
    path('componentes/<int:pk>/', views.componente_detail),
]

urlpatterns = format_suffix_patterns(urlpatterns)
