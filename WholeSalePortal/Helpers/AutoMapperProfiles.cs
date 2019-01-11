using System.Linq;
using AutoMapper;
using WholeSalePortal.DTOS;
using WholeSalePortal.Models;

namespace WholeSalePortal.Helpers
{
    public class AutoMapperProfiles:Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>();
            CreateMap<User, UserForDetailedDto>();
            CreateMap<UserForUpdateDTO, User>();
            /*  CreateMap<User, UserForListDto>()
                 .ForMember(dest => dest.PhotoUrl, opt => {
                     opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
                 })
                 .ForMember(dest => dest.Age, opt => {
                     opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
                 });
             CreateMap<User, UserForDetailedDto>()
                 .ForMember(dest => dest.PhotoUrl, opt => {
                     opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
                 })
                 .ForMember(dest => dest.Age, opt => {
                     opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
                 });
             CreateMap<Photo, PhotosForDetailedDto>(); */
        }
    }
}
    