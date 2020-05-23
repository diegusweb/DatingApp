using System;

namespace DatingApp.API.DTOs
{
    public class PhotoForReturnDto
    {
         public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime DateAdd { get; set; }
        public bool IsMan { get; set; }
        public string PublicId { get; set; }
    }
}