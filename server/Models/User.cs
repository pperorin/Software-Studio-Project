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
    public string Firstname { get; set; } = null!;

    public string Lastname { get; set; } = null!;

    public Boolean Admin { get; set; } = false;
}