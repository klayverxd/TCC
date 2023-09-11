using CrudLaboratorio.Data;
using Microsoft.EntityFrameworkCore;
using Prometheus;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var connectionStringMysql = builder.Configuration.GetConnectionString("ConexaoMySql");
builder.Services.AddDbContext<ComponenteDbContext>(options => options.UseMySql(
        connectionStringMysql,
        ServerVersion.AutoDetect(connectionStringMysql)
        )
);

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Middlewares de métricas Prometheus
app.UseMetricServer();
app.UseHttpMetrics();

app.UseAuthorization();

app.MapControllers();

app.Run();
