namespace API.Entitites;

public class AppUser
{
	public string Id { get; set; } = Guid.NewGuid().ToString();
	public required string DisplayName { get; set; }
	public required string Emanil { get; set; }
}