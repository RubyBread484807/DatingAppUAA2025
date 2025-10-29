using API.Entitites;

namespace API.Intefaces;

public interface ITokenService
{
    string CreateToken(AppUser user);
}
