import CategoryProducts from '@/components/CategoryProducts';
import Container from '@/components/Container';
import { Title } from '@/components/ui/text';
import { getCategories } from '@/sanity/queries';

const CategoryPage = async ({params}: {params: Promise<{slug: string}>}) => {
  const {slug} = await params;
  const categories = await getCategories();
  return (
    <div className='py-10'>
      <Container>
        <Title>Products by Category:{" "}
          <span className='font-bold text-green-600 capitalize tracking-wide'>{slug && slug}</span>
        </Title>
        <CategoryProducts categories={categories} slug={slug}/>
      </Container>
    </div>
  )
}

export default CategoryPage;
