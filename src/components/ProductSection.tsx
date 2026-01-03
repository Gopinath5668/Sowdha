import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
  accentColor?: string;
}

const ProductSection = ({ title, products, accentColor = "bg-primary" }: ProductSectionProps) => {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div>
            <div className={`h-1 w-12 ${accentColor} rounded-full mb-3`}></div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
          </div>
          <button className="text-sm font-medium text-primary hover:underline">
            View all →
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
