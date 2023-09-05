# TCC

[Dados testes de carga](https://www.figma.com/file/4SQl68gLFmCOii5dujvYMm/TCC?type=design&node-id=301%3A184&mode=design&t=v9Fnu6uF60sJDg8o-1)

## Processo de extração de dados
- Instalação do [Prometheus](https://prometheus.io/download/)

### NODEJS
Instalar prom-client para exposição das métricas (não reconhece caso não tenha)

### DJANGO 
Instalar django-prometheus para exposição das métricas (https://github.com/korfuri/django-prometheus)
Criar um listener para os dados de memória (my_django_app_process_resident_memory_bytes)

### .NET 
Instalar `Install-Package prometheus-net.AspNetCore`
Configure o Middleware de Exportação de Métricas no Program.cs (executados após a configuração de segurança (como HTTPS e autorização) e antes da execução de rotas de controllers)

## Instalação do JMeter e plugin
Instalar o JMeter e executar o `bin/jmeter.bat`
Plugin para o [prometheus](https://github.com/johrstrom/jmeter-prometheus-plugin/releases)


### prometheus.yml
Adicionar o endpoint das métricas da API no yml
  - API's: porta de execução
  - JMeter: 9270
Executar prometheus dentro da pasta instalada como admin -> permitir firewall `./prometheus --config.file=prometheus.yml`


#### Query para leitura dos dados de memória
process_resident_memory_bytes
process_resident_memory_bytes{job="job1"}

## GRAFANA
Inicia Grafana Cloud
Via Grafana Agent
Download and run the Windows installer

Instalar Grafana Agent (https://github.com/grafana/agent/releases/latest/download/grafana-agent-installer.exe.zip)

---
Baixar grafana (https://grafana.com/grafana/download?platform=windows)
Executar o `bin/grafana-server.exe`
Abrir localhost:3000/login com user e senha admin
Adicionar base de dados Prometheus
Criar dashboard (template 2204)


## windows_exporter


## Outros
`netstat -ano` verificar portas em execução
