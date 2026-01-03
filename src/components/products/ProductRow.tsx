import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import EnhancedProductCard from "./EnhancedProductCard";
import { Product } from "@/data/products";

interface ProductRowProps {
  title: string;
  products: Product[];
  accentColor?: string;
}

const ProductRow = ({ title, products, accentColor = "bg-primary" }: ProductRowProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  if (products.length === 0) return null;

  return (
    <section className="py-6 sm:py-8">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div>
            <div className={`h-1 w-8 sm:w-12 ${accentColor} rounded-full mb-2`}></div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">{title}</h2>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 sm:h-9 sm:w-9 rounded-full"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 sm:h-9 sm:w-9 rounded-full"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-3 px-3 sm:-mx-4 sm:px-4"
        >
          {products.map((product) => (
            <div key={product.id} className="min-w-[160px] sm:min-w-[200px] md:min-w-[240px] max-w-[260px] flex-shrink-0">
              <EnhancedProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductRow;
