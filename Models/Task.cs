namespace TaskManagementAPI.Models
{
    public class Task
    {
        public int TaskId { get; set; }
        public  string Title { get; set; }
        public string? Description { get; set; }
        public string Status { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
