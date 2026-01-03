import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/context/StoreContext";
import { allProducts } from "@/data/products";

interface ProductCardProps {
  id?: number;
  name: string;
  category: string;
  price: string;
  image: string;
}

const ProductCard = ({ id, name, category, price, image }: ProductCardProps) => {
  const { addToCart } = useStore();
  const [bump, setBump] = useState(false);

  // For home demo cards, prefer adding the real product by `id` when available

  useEffect(() => {
    if (bump) {
      const t = setTimeout(() => setBump(false), 300);
      return () => clearTimeout(t);
    }
  }, [bump]);

  return (
    <div className="group rounded-xl bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 active:translate-y-0">
      <div className="aspect-square overflow-hidden bg-secondary/20">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-1"
        />
      </div>
      <div className="p-4 space-y-3">
        <div className="inline-block px-2.5 py-1 rounded-full bg-secondary/50 text-xs font-medium text-secondary-foreground transition-all duration-300 group-hover:bg-secondary/70">
          {category}
        </div>
        <h3 className="font-semibold text-card-foreground line-clamp-2 min-h-[3rem] transition-colors duration-300">{name}</h3>
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-primary transition-all duration-300 group-hover:scale-110">{price}</span>
          <Button
            size="sm"
            variant="accent"
            className={`rounded-full h-9 w-9 p-0 group/btn ${bump ? 'scale-110' : ''}`}
            onClick={() => {
              // Try to resolve a real product from the data set: first by id, then by name+category
              let prod = id ? allProducts.find((p) => p.id === id) : undefined;
              if (!prod) {
                prod = allProducts.find((p) => p.name === name && p.category === category);
              }

              if (prod) {
                addToCart(prod, 1);
              } else {
                // If no matching product found, warn and do nothing (avoid random ids)
                // Optionally, we could create a light fallback, but it's safer to require a real product.
                // eslint-disable-next-line no-console
                console.warn("No matching product found to add to cart:", { id, name, category });
              }

              setBump(true);
            }}
          >
            <Plus className="h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-90" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;