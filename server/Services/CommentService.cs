using CommentApi.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace CommentApi.Services;

public class CommentService
{
    private readonly IMongoCollection<Comment> _commentCollection;

    public CommentService(
        IOptions<CommentDatabaseSettings> commentDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            commentDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            commentDatabaseSettings.Value.DatabaseName);

        _commentCollection = mongoDatabase.GetCollection<Comment>(
            commentDatabaseSettings.Value.CommentCollectionName);
    }

    public async Task<List<Comment>> GetAsync() =>
        await _commentCollection.Find(_ => true).ToListAsync();

    public async Task<Comment?> GetAsync(string id) =>
        await _commentCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(Comment newComment) =>
        await _commentCollection.InsertOneAsync(newComment);

    public async Task UpdateAsync(string id, Comment updatedComment) =>
        await _commentCollection.ReplaceOneAsync(x => x.Id == id, updatedComment);

    public async Task RemoveAsync(string id) =>
        await _commentCollection.DeleteOneAsync(x => x.Id == id);
}