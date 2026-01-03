import React from "react";
import { Apple, Carrot, Milk, Croissant, ShoppingBag, Coffee, Cookie, Droplet } from "lucide-react";
import CategoryCard from "./CategoryCard";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Fruits", icon: Apple, colorClass: "bg-fruit/30 hover:bg-fruit/40" },
  { name: "Vegetables", icon: Carrot, colorClass: "bg-veggie/30 hover:bg-veggie/40" },
  { name: "Dairy", icon: Milk, colorClass: "bg-dairy hover:bg-dairy/80" },
  { name: "Bakery", icon: Croissant, colorClass: "bg-bakery/30 hover:bg-bakery/40" },
  { name: "Pantry", icon: ShoppingBag, colorClass: "bg-secondary hover:bg-secondary/80" },
  { name: "Beverages", icon: Coffee, colorClass: "bg-muted/40 hover:bg-muted/50" },
  { name: "Snacks", icon: Cookie, colorClass: "bg-fruit/20 hover:bg-fruit/30" },
  { name: "Household", icon: Droplet, colorClass: "bg-secondary/50 hover:bg-secondary/60" },
];

const Categories = () => {
  const navigate = useNavigate();
  const clickDisabledRef = React.useRef(false);

  const handleClick = (categoryName?: string) => {
    if (clickDisabledRef.current) return;
    clickDisabledRef.current = true;
    setTimeout(() => (clickDisabledRef.current = false), 700);

    if (categoryName) {
      navigate(`/products?category=${encodeURIComponent(categoryName)}`);
    } else {
      navigate("/products");
    }
  }

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3 md:text-4xl">Shop by Category</h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Quickly explore our wide range of fresh products
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              icon={category.icon}
              colorClass={category.colorClass}
              onClick={() => handleClick(category.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
