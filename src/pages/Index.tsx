import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ProductSection from "@/components/ProductSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import mangoesImg from "@/assets/product-mangoes.jpg";
import spinachImg from "@/assets/product-spinach.jpg";
import milkImg from "@/assets/product-milk.jpg";
import breadImg from "@/assets/product-bread.jpg";

const featuredProducts = [
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

const freshFruits = [
  {
    id: 5,
    name: "Sweet Red Apples",
    category: "Fruits",
    price: "₹150 / kg",
    image: mangoesImg,
  },
  {
    id: 6,
    name: "Fresh Bananas",
    category: "Fruits",
    price: "₹40 / dozen",
    image: mangoesImg,
  },
  {
    id: 7,
    name: "Juicy Oranges",
    category: "Fruits",
    price: "₹80 / kg",
    image: mangoesImg,
  },
  {
    id: 8,
    name: "Premium Grapes",
    category: "Fruits",
    price: "₹100 / kg",
    image: mangoesImg,
  },
];

const organicVegetables = [
  {
    id: 9,
    name: "Fresh Tomatoes",
    category: "Vegetables",
    price: "₹35 / kg",
    image: spinachImg,
  },
  {
    id: 10,
    name: "Green Capsicum",
    category: "Vegetables",
    price: "₹45 / kg",
    image: spinachImg,
  },
  {
    id: 11,
    name: "Organic Carrots",
    category: "Vegetables",
    price: "₹40 / kg",
    image: spinachImg,
  },
  {
    id: 12,
    name: "Fresh Broccoli",
    category: "Vegetables",
    price: "₹60 / kg",
    image: spinachImg,
  },
];

const dairyEggs = [
  {
    id: 13,
    name: "Fresh Curd",
    category: "Dairy",
    price: "₹35 / 500g",
    image: milkImg,
  },
  {
    id: 14,
    name: "Butter Premium",
    category: "Dairy",
    price: "₹250 / 500g",
    image: milkImg,
  },
  {
    id: 15,
    name: "Farm Eggs",
    category: "Dairy",
    price: "₹80 / dozen",
    image: milkImg,
  },
  {
    id: 16,
    name: "Paneer Fresh",
    category: "Dairy",
    price: "₹90 / 200g",
    image: milkImg,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <ProductSection
          title="Featured Products"
          products={featuredProducts}
          accentColor="bg-primary"
        />
        <ProductSection
          title="Fresh Fruits"
          products={freshFruits}
          accentColor="bg-fruit"
        />
        <ProductSection
          title="Organic Vegetables"
          products={organicVegetables}
          accentColor="bg-accent"
        />
        <ProductSection
          title="Dairy & Eggs"
          products={dairyEggs}
          accentColor="bg-dairy"
        />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
