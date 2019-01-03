using System;

namespace WholeSalePortal.DTOS
{
    public class UserForListDto
    {
         public int Id { get; set; }
        public string Username { get; set; }
        public DateTime Created { get; set; }
      public string AboutBroker { get; set; }
        public string City { get; set; }
       
    }
}