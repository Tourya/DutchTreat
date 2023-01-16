using Microsoft.AspNetCore.Mvc;

namespace DutchTreat.Controllers
{
    public class AccountController : Controller
    {
        private readonly ILogger<AccountController> _logger;

        public AccountController(ILogger<AccountController> logger)
        {
            _logger = logger;
        }

        public IActionResult Login()
        {
#pragma warning disable CS8602 // Dereference of a possibly null reference.
            if (this.User.Identity.IsAuthenticated)
            {
                return RedirectToAction("Index", "App");
            }
#pragma warning restore CS8602 // Dereference of a possibly null reference.
            return View();
        }
    }
}
