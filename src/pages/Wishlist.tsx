import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { useStore } from "@/context/StoreContext";
import { allProducts } from "@/data/products";
import { Button } from "@/components/ui/button";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useStore();
  const items = allProducts.filter((p) => wishlist.includes(p.id));

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
        <p className="text-muted-foreground mb-6">Your saved items will appear here.</p>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">Your wishlist is empty.</p>
            <Link to="/products" className="inline-block mt-4 text-primary underline">
              Browse products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {items.map((p) => (
              <div key={p.id} className="rounded-md border p-3 flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <img src={p.images[0]} alt={p.name} className="h-16 w-16 object-cover rounded" />
                  <div>
                    <div className="font-semibold">{p.name}</div>
                    <div className="text-sm text-muted-foreground">₹{p.price}</div>
                  </div>
                </div>
                <div className="mt-2 flex gap-2">
                  <Button size="sm" variant="secondary" onClick={() => addToCart(p, 1)}>
                    Add to Cart
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => removeFromWishlist(p.id)}>
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Wishlist;
