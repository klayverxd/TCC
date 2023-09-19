# TCC

[Dados testes de carga Figma](https://www.figma.com/file/4SQl68gLFmCOii5dujvYMm/TCC?type=design&node-id=301%3A184&mode=design&t=v9Fnu6uF60sJDg8o-1)

[Notion](https://www.notion.so/TCC-c8ed551023704ecaa0fcf79011053f37?pvs=4)

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


# Linux

### MySQL
Iniciar o serviço `sudo service mysql start`
Verificar se o serviço está em execução `service mysql status`

Acessar prompt mysql `sudo mysql -u root -p`
`apt --fix-broken install`

---
Monitorar a pacotes por porta `sudo tcpdump -i any -n port 8080`


Monitorar um processo e gerar arquivo de logs em função do tempo `top -b -d 1 -p 39350 >> /media/klayver/Codes/TCC/testes/logs/logs.txt`

Monitorar um processo pelo arquivo e gerar arquivo de logs em função do tempo `top -b -d 1 -p $(pgrep -f "node /media/klayver/Codes/TCC/crud-laboratorio/crud-laboratorio-nodejs/node_modules/.bin/nodemon index.js") >> /media/klayver/Codes/TCC/testes/logs/logs2.txt`
