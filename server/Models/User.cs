using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace UserApi.Models;

public class User
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    // [BsonElement("Firstname")]
    // [BsonElement("Lastname")]
    public string Username { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string? NewPassword { get; set; }

    public Boolean IsAdmin { get; set; } = false;

    public Boolean IsBan { get; set; } = false;
}