using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WholeSalePortal.DTOS
{
    public class UserForRegisterDTO
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        [StringLength(8,MinimumLength =4,ErrorMessage ="You must specify password between 4 to 8 characters.")]
        public string Password { get; set; }

    }
}
