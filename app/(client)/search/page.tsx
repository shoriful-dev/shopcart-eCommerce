import Container from '@/components/Container';
import ProductGrid from '@/components/ProductGrid';
import { searchProducts } from '@/sanity/queries';
import { Product } from '@/sanity.types';
import ProductCard from '@/components/ProductCard';

interface SearchPageProps {
  searchParams: Promise<{
    query: string;
  }>;
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { query } = await searchParams;
  const products: Product[] = await searchProducts(query);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100">
      <Container className="p-8 bg-white rounded-lg shadow-md mt-10 w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Search Results for <span className="text-shop_dark_green">{query}</span>
        </h1>
        {products?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product?._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 gap-y-5">
            <h2 className="text-3xl font-bold font-sans text-center">
              No product found with matching query of{' '}
              <span className="text-shop_dark_green underline decoration-wavy underline-offset-4">
                {query}
              </span>
            </h2>
            <p className="text-sm text-gray-400 font-sans tracking-tight">
              Please attempt to search with different keywords or you can browse
              our products from the homepage.
            </p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default SearchPage;
