import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { useStore } from "@/context/StoreContext";
import { allProducts } from "@/data/products";
import { Button } from "@/components/ui/button";

const Cart = () => {
  const { cart, removeFromCart, updateCartQty, clearCart } = useStore();
  // Map cart entries to product details; remove any cart items whose product no longer exists
  const items = cart
    .map((it) => {
      const p = allProducts.find((prod) => prod.id === it.id);
      if (!p) return null;
      return { ...p, qty: it.qty };
    })
    .filter((x): x is (typeof allProducts)[number] & { qty: number } => x !== null);

  // Clean up invalid cart ids (if any) so they don't persist in localStorage
  items.length !== cart.length && cart.forEach((it) => {
    const exists = allProducts.some((p) => p.id === it.id);
    if (!exists) removeFromCart(it.id);
  });

  const subtotal = items.reduce((s, it) => s + (it.price || 0) * it.qty, 0);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <p className="text-muted-foreground mb-6">Items you add to cart will appear here.</p>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">Your cart is empty.</p>
            <Link to="/products" className="inline-block mt-4 text-primary underline">
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              {items.map((it) => (
                <div key={it.id} className="flex items-center gap-4 rounded border p-4">
                  <img src={it.images[0]} alt={it.name} className="h-20 w-20 object-cover rounded" />
                  <div className="flex-1">
                    <div className="font-semibold">{it.name}</div>
                    <div className="text-sm text-muted-foreground">₹{it.price}</div>
                    <div className="flex items-center gap-2 mt-2">
                      <Button size="sm" variant="outline" onClick={() => updateCartQty(it.id, Math.max(1, it.qty - 1))}>-</Button>
                      <div className="px-3">{it.qty}</div>
                      <Button size="sm" variant="outline" onClick={() => updateCartQty(it.id, it.qty + 1)}>+</Button>
                      <Button size="sm" variant="ghost" onClick={() => removeFromCart(it.id)} className="ml-4">Remove</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="rounded border p-4">
              <h3 className="font-semibold">Order Summary</h3>
              <div className="mt-4 flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-bold">₹{subtotal}</span>
              </div>
              <div className="mt-4 space-y-2">
                <Button className="w-full">Proceed to Checkout</Button>
                <Button variant="ghost" className="w-full" onClick={clearCart}>Clear Cart</Button>
              </div>
            </aside>
          </div>
        )}
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Cart;
