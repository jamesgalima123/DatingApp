using System.ComponentModel.DataAnnotations;

namespace DatingApp.Core.Dtos.Users
{
    public class UserForChangePasswordDto
    {
        [Required]
        public string Password { get; set; }
        public string NewPassword { get; set; }


    }
}
