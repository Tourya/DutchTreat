using Microsoft.AspNetCore.Identity;
using System.Globalization;

namespace DutchTreat.Data.Entities
{
    public class StoreUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
