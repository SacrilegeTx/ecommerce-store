import getCategoryById from "@/actions/category/get-category-by-id";
import getColors from "@/actions/color/get-colors";
import getProducts from "@/actions/product/get-products";
import getSizes from "@/actions/size/get-sizes";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";

import Filter from "./components/filter";
import MobileFilters from "./components/mobile-filters";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { categoryId } = params;
  const { colorId, sizeId } = searchParams;

  const products = await getProducts({
    categoryId,
    colorId,
    sizeId,
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategoryById(categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            {/* Add Mobile filters */}
            {/* <div className="lg:col-span-1">
              <div className="sticky top-16">
                <h2 className="mb-4 text-lg font-semibold">Filters</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium">Color</h3>
                    <div className="-mx-2 flex flex-wrap">
                      {colors.map((color) => (
                        <a
                          key={color.id}
                          className="inline-block rounded-full px-2 py-1"
                          href={`/category/${categoryId}?colorId=${color.id}`}
                        >
                          <span
                            className="block h-6 w-6 rounded-full"
                            style={{ backgroundColor: color.value }}
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <MobileFilters colors={colors} sizes={sizes} />
            <div className="hidden lg:col-span-1 lg:block">
              <Filter name="Sizes" valueKey="sizeId" values={sizes} />
              <Filter name="Colors" valueKey="colorId" values={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
