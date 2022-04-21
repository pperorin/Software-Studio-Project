namespace SubjectApi.Models;

public class SubjectDatabaseSettings
{
    public string ConnectionString { get; set; } = null!;

    public string DatabaseName { get; set; } = null!;

    public string SubjectCollectionName { get; set; } = null!;
}