using SubjectApi.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace SubjectApi.Services;

public class SubjectService
{
    private readonly IMongoCollection<Subject> _subjectCollection;

    public SubjectService(
        IOptions<SubjectDatabaseSettings> subjectDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            subjectDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            subjectDatabaseSettings.Value.DatabaseName);

        _subjectCollection = mongoDatabase.GetCollection<Subject>(
            subjectDatabaseSettings.Value.SubjectCollectionName);
    }

    public async Task<List<Subject>> GetAsync() =>
        await _subjectCollection.Find(_ => true).ToListAsync();

    public async Task<Subject?> GetAsync(string id) =>
        await _subjectCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(Subject newSubject) =>
        await _subjectCollection.InsertOneAsync(newSubject);

    public async Task UpdateAsync(string id, Subject updatedSubject) =>
        await _subjectCollection.ReplaceOneAsync(x => x.Id == id, updatedSubject);

    public async Task RemoveAsync(string id) =>
        await _subjectCollection.DeleteOneAsync(x => x.Id == id);
}