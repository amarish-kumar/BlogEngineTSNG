using BlogEngine.Models;

namespace BlogEngine.Services
{
    public interface ISiteService
    {
        Site GetSettings();
        void UpdateSettings(Site site);
        string[] GetThemes();
    }
}