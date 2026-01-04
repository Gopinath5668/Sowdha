import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useRef } from "react";
import mangoesImg from "@/assets/product-mangoes.jpg";
import spinachImg from "@/assets/product-spinach.jpg";
import milkImg from "@/assets/product-milk.jpg";
import breadImg from "@/assets/product-bread.jpg";
import { Link } from "react-router-dom";

const latestProducts = [
  {
    id: 1,
    name: "Fresh Alphonso Mangoes",
    category: "Fruits",
    price: "₹120 / kg",
    image: mangoesImg,
  },
  {
    id: 2,
    name: "Organic Spinach Bunch",
    category: "Vegetables",
    price: "₹30 / bunch",
    image: spinachImg,
  },
  {
    id: 3,
    name: "Farm Fresh Milk",
    category: "Dairy",
    price: "₹60 / liter",
    image: milkImg,
  },
  {
    id: 4,
    name: "Whole Wheat Bread",
    category: "Bakery",
    price: "₹40 / loaf",
    image: breadImg,
  },
];

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-background py-6 sm:py-10 md:py-14 lg:py-20">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 overflow-hidden">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6 text-center lg:text-left">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground">
              Fresh groceries delivered with love
            </h1>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto lg:mx-0 px-1">
              Get farm-fresh vegetables, fruits, dairy, and all your daily essentials delivered right to your doorstep
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start px-1 sm:px-0">
              <Button size="default" className="bg-accent hover:bg-accent/90 group w-full sm:w-auto text-sm sm:text-base h-10 sm:h-11 md:h-12">
                <Link to="/products">
                  Shop Now
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              </Button>
              <Button size="default" variant="outline" className="border-primary-foreground/20 bg-card/10 text-primary-foreground hover:text-primary-foreground/90 hover:border-primary-foreground/40 hover:bg-card/20 w-full sm:w-auto text-sm sm:text-base h-10 sm:h-11 md:h-12">
                <Link to="/products">Browse Categories</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Product Carousel */}
          <div className="relative mt-2 sm:mt-4 lg:mt-0 max-w-full overflow-hidden">
            <div className="flex items-center gap-1 sm:gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scroll("left")}
                className="flex shrink-0 bg-card/80 hover:bg-card shadow-md hover:shadow-lg hover:scale-110 active:scale-95 h-8 w-8 sm:h-10 sm:w-10"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 hover:-translate-x-0.5" />
              </Button>

              <div
                ref={scrollRef}
                className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-2 -mb-2 max-w-full"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {latestProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/products?category=${encodeURIComponent(product.category)}`}
                    className="group min-w-[160px] xs:min-w-[180px] sm:min-w-[220px] md:min-w-[260px] snap-start rounded-xl bg-card p-2 xs:p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:rounded-lg"
                  >
                    <div className="aspect-square overflow-hidden rounded-lg mb-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />
                    </div>
                    <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
                      <div className="inline-block px-1.5 xs:px-2 sm:px-3 py-0.5 rounded-full bg-secondary text-[10px] xs:text-xs font-medium text-secondary-foreground transition-all duration-300 group-hover:bg-secondary/70">
                        {product.category}
                      </div>
                      <h3 className="font-semibold text-xs xs:text-sm sm:text-base text-card-foreground transition-colors duration-300 line-clamp-1">{product.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-sm xs:text-base sm:text-lg font-bold text-primary transition-all duration-300 ">{product.price}</span>
                        <Button size="icon" variant="accent" className="rounded-full h-7 w-7 xs:h-8 xs:w-8 sm:h-10 sm:w-10 group/btn" onClick={(e) => e.preventDefault()}>
                          <Plus className="h-3 w-3 xs:h-3.5 xs:w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover/btn:rotate-90" />
                        </Button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => scroll("right")}
                className="flex shrink-0 bg-card/80 hover:bg-card shadow-md hover:shadow-lg hover:scale-110 active:scale"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 hover:translate-x-0.5" />
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
