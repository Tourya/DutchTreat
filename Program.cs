using AutoMapper;
using DutchTreat.Data;
using DutchTreat.Data.Entities;
using DutchTreat.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System.Reflection;
using System.Text;

var builder = WebApplication.CreateBuilder(args);


builder.Configuration.SetBasePath(Directory.GetCurrentDirectory())
                     .AddJsonFile("config.json")
                     .AddEnvironmentVariables();

//var connectionString = builder.Configuration.GetConnectionString("DutchContextDb");

builder.Services.AddIdentity<StoreUser, IdentityRole>(cfg =>
cfg.User.RequireUniqueEmail = true)
                .AddEntityFrameworkStores<DutchContext>();

builder.Services.AddAuthentication()
                .AddCookie()
                .AddJwtBearer(cfg =>
                {
                    cfg.TokenValidationParameters = new TokenValidationParameters()
                    {
                        ValidIssuer = builder.Configuration["Tokens:Issuer"],
                        ValidAudience = builder.Configuration["Tokens:Audience"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Tokens:Key"]))
                    };
                });

builder.Services.AddDbContext<DutchContext>();

builder.Services.AddTransient<DutchSeeder>();

builder.Services.AddAutoMapper(Assembly.GetExecutingAssembly());

builder.Services.AddScoped<IDutchRepository, DutchRepository>();
builder.Services.AddTransient<IMailService, NullMailService>();

builder.Services.AddControllersWithViews()
                .AddRazorRuntimeCompilation()
                .AddNewtonsoftJson(cfg => cfg.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore);

builder.Services.AddRazorPages();


var app = builder.Build();

if (args.Length == 1 && args[0].ToLower() == "/seed")
{
    RunSeeding(app);
}


void RunSeeding(IHost app)
{
    var scopeFactory = app.Services.GetService<IServiceScopeFactory>();
    using (var scope = scopeFactory!.CreateScope())
    {
        var seeder = scope.ServiceProvider.GetService<DutchSeeder>();
        seeder!.SeedAsync().Wait();
    }

}


if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}
else
{
    app.UseExceptionHandler("/error");
}

app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapRazorPages();
app.MapControllerRoute(
    name: "Default",
    pattern: "/{controller}/{action}/{id?}",
    new { controller = "App", action = "Index" });

app.Run();
