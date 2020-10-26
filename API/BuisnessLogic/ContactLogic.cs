using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using DataAccess;
using DataAccess.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace BusinessLogic
{
    public static class ServiceCollectionExtensions
    {
        public static void AddContactLogic(this IServiceCollection services, DataContext dbContext)
        {
            if (dbContext == null)
            {
                throw new ArgumentNullException(nameof(dbContext));
            }

            services.AddScoped<IContactLogic, ContactLogic>(cl => new ContactLogic(dbContext));
        }
    }

    public interface IContactLogic
    {
        Task<List<Contact>> GetContactsAsync();
    }

    public class ContactLogic: IContactLogic
    {
        private readonly DataContext _dbContext;

        public ContactLogic(DataContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<List<Contact>> GetContactsAsync()
        {
            return await _dbContext.Contacts.ToListAsync();
        }
    }
}
