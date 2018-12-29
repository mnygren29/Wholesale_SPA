using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using WholeSalePortal.Data;
using WholeSalePortal.DTOS;
using WholeSalePortal.Models;

namespace WholeSalePortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        private readonly IAuthRepository _repo;
        private readonly IConfiguration _config;

        public AuthController(IAuthRepository repo,IConfiguration config)
        {
            _repo = repo;
            _config = config;
        }

        //need different object to pass these username and password in
        //need to use a DTO - often used to map domain models into simpler objects that get returned/displayed by view        
        [HttpPost("register")]
       // public async Task<IActionResult> Register(string username, string password)
        public async Task<IActionResult> Register(UserForRegisterDTO userForRegisterDto)
        {
            userForRegisterDto.UserName = userForRegisterDto.UserName.ToLower();

            if (await _repo.UserExists(userForRegisterDto.UserName))
                return BadRequest("Username already exists");

            var userToCreate = new User
            {
                Username = userForRegisterDto.UserName
            };

            var createdUser = await _repo.Register(userToCreate, userForRegisterDto.Password);

            return StatusCode(201);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(UserForRegisterDTO userForLoginDto)
        {
            //may put identity server logic here

            var userFromRepo = await _repo.Login(userForLoginDto.UserName.ToLower(), userForLoginDto.Password);
            //once user past the stage above, then we need to start building out the token


            if (userForLoginDto == null)
                return Unauthorized(); //do this so they dont get hint user name exists

            //1 now build up a token to return to the user with 2 cliams
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier,userFromRepo.Id.ToString()),
                new Claim(ClaimTypes.Name,userFromRepo.Username)
            };

            //2. this is the part where the server needs to sign the key
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));

            //3. now that we have our key in the appsettings json (step 2), we can use this as our sign in credentials
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            //this is where the token starts getting created
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            //allows us to create the token
            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            //writes token into response sent back to the client
            return Ok(new
            {
                token = tokenHandler.WriteToken(token)
            });

        }

    }
}