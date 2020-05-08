using Core.Entities;

namespace Core.Specifications
{
    public class ProductWiithFilterForCountSpecification:BaseSpecification<Product>
    {
        public ProductWiithFilterForCountSpecification(ProductSpecParams productParams)
        :base(x =>
         (!productParams.BrandId.HasValue || x.ProductBrandId==productParams.BrandId) &&
         (!productParams.TypeId.HasValue || x.ProductTypeId==productParams.TypeId))
        {
        }
    }
}