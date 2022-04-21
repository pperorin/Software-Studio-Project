using BookStoreApi.Models;
using BookStoreApi.Services;

using UserApi.Models;
using UserApi.Services;

using SubjectApi.Models;
using SubjectApi.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.Configure<BookStoreDatabaseSettings>(
    builder.Configuration.GetSection("BookStoreDatabase"));

builder.Services.AddSingleton<BooksService>();

builder.Services.Configure<UserDatabaseSettings>(
    builder.Configuration.GetSection("UserDatabase"));

builder.Services.AddSingleton<UsersService>();

builder.Services.Configure<SubjectDatabaseSettings>(
    builder.Configuration.GetSection("SubjectDatabase"));

builder.Services.AddSingleton<SubjectService>();

builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
