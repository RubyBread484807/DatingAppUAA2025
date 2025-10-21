using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using API.DTOs;
using API.Entitites;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class Seed
{
    public static async Task SeedUsers(AppDbContext context)
    {
        if (await context.Users.AnyAsync()) return;

        var seedUserData = await File.ReadAllTextAsync("Data/UserSeedData.json");
        var seedUsers = JsonSerializer.Deserialize<List<SeedUserDto>>(seedUserData);

        if (seedUsers == null)
        {
            Console.WriteLine("No seed data available");
            return;
        }

        foreach (var seedUser in seedUsers)
        {
            using var hmac = new HMACSHA3_512();
            var user = new AppUser
            {
                Id = seedUser.Id,
                Email = seedUser.Email.ToLower(),
                DisplayName = seedUser.DisplayName.ToLower(),
                ImageUrl = seedUser.ImageUrl,
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes("Pa$$w0rd")),
                PasswordSalt = hmac.Key,
                Member = new Member
                {
                    Id = seedUser.Id,
                    DisplayName = seedUser.DisplayName,
                    Gender = seedUser.Gender,
                    City = seedUser.City,
                    Country = seedUser.Country,
                    Description = seedUser.Description,
                    BirthDay = seedUser.BirthDay,
                    ImageUrl = seedUser.ImageUrl,
                    Created = seedUser.Created,
                    LastActive = seedUser.LastActive,
                }
            };

            user.Member.Photos.Add(new Photo
            {
                Url = seedUser.ImageUrl!,
                MemberId = seedUser.Id,
            });

            context.Users.Add(user);
        }

        await context.SaveChangesAsync();
    }
}
