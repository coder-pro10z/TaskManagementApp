using Microsoft.EntityFrameworkCore;
using TaskManagementAPI.Data;

namespace TaskManagementAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllers();

            // Add CORS policy
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowSpecificOrigins",
                    builder =>
                    {
                        builder.WithOrigins("http://localhost:4200") // Angular development server URL
                               .AllowAnyHeader()
                               .AllowAnyMethod();
                    });
            });

            // Configure DbContext with SQL Server
            builder.Services.AddDbContext<TaskContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            // Add SPA static files
            builder.Services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "TaskManagementApp/dist";
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseAuthorization();

            // Use CORS policy
            app.UseCors("AllowSpecificOrigins");

            app.MapControllers();

            // Configure SPA
            //app.UseSpa(spa =>
            //{
            //    spa.Options.SourcePath = "TaskManagementApp";

            //    if (app.Environment.IsDevelopment())
            //    {
            //        spa.UseProxyToSpaDevelopmentServer("http://localhost:4200");
            //    }
            //});

            app.Run();
        }
    }
}