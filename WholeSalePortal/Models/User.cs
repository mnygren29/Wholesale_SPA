﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WholeSalePortal.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

        public DateTime Created {get;set;}
        public string AboutBroker {get;set;}
        public string City {get;set;}

        public ICollection<Photo> Photos {get;set;}
    }
}
