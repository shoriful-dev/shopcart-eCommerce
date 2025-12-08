import Container from './Container';
import FooterTop from './FooterTop';
import Logo from './Logo';
import SocialMedia from './SocialMedia';
import { SubText, SubTitle } from './ui/text';
import { categoriesData, quickLinksData } from '@/constants/data';
import Link from 'next/link';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <SubText>
              Discover amazing products at ShopCart, your trusted online
              shopping destination for quality items and exceptional customer
              service.
            </SubText>
            <SocialMedia
              className="text-dark-color/60"
              iconClassName="border-dark-color/60 hover:border-shop_dark_green hover:text-shop_dark_green"
              tooltipClassName="bg-dark-color text-white"
            />
          </div>
          {/* Quick Links */}
          <div className="div">
            <SubTitle>Quick Links</SubTitle>
            <ul className="mt-4 space-y-3">
              {quickLinksData?.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item?.href}
                    className="hover:text-shop_light_green hoverEffect font-medium"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Categories */}
          <div className="div">
            <SubTitle>Categories</SubTitle>
            <ul className="mt-4 space-y-3">
              {categoriesData?.map((item, index) => (
                <li key={index}>
                  <Link
                    href={`/category/${item?.href}`}
                    className="hover:text-shop_light_green hoverEffect font-medium"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <SubTitle>Newsletter</SubTitle>
            <SubText>
              Subscribe to out newsletter to receive updates and exclusive
              offers
            </SubText>
            <form className="space-y-3">
              <Input placeholder="Enter your email" type="email" required />
              <Button className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        {/* Bottom copyright section */}
        <div className="py-6 border-t text-center text-sm text-gray-600">
          <div>
            © {new Date().getFullYear()} <Logo className='text-sm'/>
            . All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
