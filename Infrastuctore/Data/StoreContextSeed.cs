using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.Extensions.Logging;

namespace Infrastuctore.Data
{
    public class StoreContextSeed
    {
        public static async Task SeedAsync(StoreContext context,ILoggerFactory LoggerFactory)
        {
            try
            {
                    if(!context.ProductBrands.Any())
                    {
                        var brandsData=File.ReadAllText("../Infrastuctore/SeedData/brands.json");
                        var brands=JsonSerializer.Deserialize<List<ProductBrand>>(brandsData);
                        foreach(var item in brands)
                        {
                            context.ProductBrands.Add(item);
                        }
                        await context.SaveChangesAsync();
                    }
                     if(!context.ProductTypes.Any())
                    {
                        var typesData=File.ReadAllText("../Infrastuctore/SeedData/types.json");
                        var types=JsonSerializer.Deserialize<List<ProductType>>(typesData);

                        foreach(var itme in types)
                        {
                            context.ProductTypes.Add(itme);
                        }
                        await context.SaveChangesAsync();
                    }
                     if(!context.Products.Any())
                    {
                        var produtsData=File.ReadAllText("../Infrastuctore/SeedData/products.json");
                        var produts=JsonSerializer.Deserialize<List<Product>>(produtsData);

                        foreach(var itme in produts)
                        {
                            context.Products.Add(itme);
                        }
                        await context.SaveChangesAsync();
                    }
                    
            }
            catch(Exception ex)
            {
                var logger=LoggerFactory.CreateLogger<StoreContextSeed>();
                logger.LogError(ex.Message);
            }
        }
    }
}