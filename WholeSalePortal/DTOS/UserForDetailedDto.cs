using System;

namespace WholeSalePortal.DTOS
{
   public class UserForDetailedDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public DateTime Created { get; set; }
        public string Introduction { get; set; }
        public string City { get; set; }
      
       
    }
}