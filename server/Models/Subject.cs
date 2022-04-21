using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace SubjectApi.Models;

public class Subject
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    public string? User_ID { get; set; }

    public string Title { get; set; } = null!;

    public string Desc { get; set; } = null!;

    public Boolean IsHide { get; set; } = false;

    public DateTime Created_At { get; set; }

    public DateTime Updated_At { get; set; }

    public List<CountLike> CountLikes { get; set; } = new List<CountLike>();
  
    public Boolean IsAnouncement { get; set; } = false;

    public List<CommentSub> Comments { get; set; } = new List<CommentSub>();
}

public class CommentSub
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]

    public string? Id { get; set; }

    public int? User_ID { get; set; }

    public string Desc { get; set; } = null!;

    public Boolean IsHide { get; set; } = false;

    public DateTime Created_At { get; set; }

    public DateTime Updated_At { get; set; }

    public List<CountLike> CountLikes { get; set; } = new List<CountLike>();
}

public class CountLike
{
    public string? User_ID { get; set; }
}