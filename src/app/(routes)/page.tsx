import Billboard from "@/components/ui/billboard";
import getBillboardById from "@/actions/billboard/get-billboard-by-id";
import Container from "@/components/ui/container";
import getProducts from "@/actions/product/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0;

export default async function HomePage() {
  const billboard = await getBillboardById("ba44e166-541a-40d8-b8eb-b24e96514307");
  const products = await getProducts({ isFeatured: true });

  return (
    // <Container className="flex items-center justify-center h-screen">
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList items={products} title="Featured Products" />
        </div>
      </div>
    </Container>
  );
}
