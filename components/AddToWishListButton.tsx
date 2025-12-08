import { cn } from '@/lib/utils';
import { Product } from '@/sanity.types';
import { Heart } from 'lucide-react';

const AddToWishListButton = ({product, className}: {product: Product; className?: string}) => {
  return (
    <div className={cn('absolute top-2 right-2 z-10 ', className)}>
      <div className="p-2.5 rounded-full hover:bg-shop_dark_green hover:text-white hoverEffect bg-product-bg">
        <Heart size={15} />
      </div>
    </div>
  );
}

export default AddToWishListButton;
