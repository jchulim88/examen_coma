using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEnd.Models
{
    public class Cliente
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string Nombre { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string Apellido { get; set; }

        [Required]
        [Column(TypeName = "varchar(3)")]
        public string Edad { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string Correo_electronico { get; set; }

        [Required]
        [Column(TypeName = "varchar(15)")]
        public string Tipo_usuario { get; set; }

    }
}
