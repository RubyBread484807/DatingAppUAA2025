using System;
using API.Entitites;
using API.Intefaces;

namespace API.Data;

public class MembersRepositoy : IMembersRepository
{
    public Task<Member> GetMemberAsync(string id)
    {
        throw new NotImplementedException();
    }

    public Task<IReadOnlyList<Member>> GetMembersAsync()
    {
        throw new NotImplementedException();
    }

    public Task<IReadOnlyList<Photo>> GetPhotosAsync(string memberId)
    {
        throw new NotImplementedException();
    }

    public Task<bool> SaveAllAsync()
    {
        throw new NotImplementedException();
    }

    public void Update(Member member)
    {
        throw new NotImplementedException();
    }
}
