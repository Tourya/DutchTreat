using Microsoft.EntityFrameworkCore;

namespace DutchTreat.Data.Entities
{
    public class OrderItem
    {
        public int Id { get; set; }
        public Product Product { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        [Precision(14, 2)]
        public decimal UnitPrice { get; set; }
        public Order Order { get; set; }
    }
}