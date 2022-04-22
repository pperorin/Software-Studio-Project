using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CommentApi.Models;
public class Comment
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    public string? User_ID { get; set; }

    public string? Subject_ID { get; set; }

    public string? Username { get; set; }
    
    public string? Desc { get; set; }

    public Boolean IsHide { get; set; } = false;

    public DateTime Created_At { get; set; }

    public DateTime Updated_At { get; set; }

    public List<string> CountLikes { get; set; } = new List<string>();
}
