import { Search, Heart, ShoppingCart, User, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useStore } from "@/context/StoreContext";

const Navbar = () => {
  const { cartCount, wishlistCount } = useStore();
  const [cartBump, setCartBump] = useState(false);
  const [wishlistBump, setWishlistBump] = useState(false);

  const prevCartRef = useRef(cartCount);
  const prevWishRef = useRef(wishlistCount);

  useEffect(() => {
    if (prevCartRef.current !== cartCount) {
      setCartBump(true);
      prevCartRef.current = cartCount;
      const t = setTimeout(() => setCartBump(false), 300);
      return () => clearTimeout(t);
    }
  }, [cartCount]);

  useEffect(() => {
    if (prevWishRef.current !== wishlistCount) {
      setWishlistBump(true);
      prevWishRef.current = wishlistCount;
      const t = setTimeout(() => setWishlistBump(false), 300);
      return () => clearTimeout(t);
    }
  }, [wishlistCount]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">Sowdha</span>
          </div>

          {/* Search Bar - Hidden on small mobile, visible on larger screens */}
          <div className="hidden flex-1 max-w-2xl md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for fruits, veggies, dairy..."
                className="pl-10 bg-background border-border"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Link to="/wishlist" aria-label="Wishlist">
              <Button variant="ghost" size="icon" className="relative group">
                <Heart className="h-5 w-5 transition-all duration-300 group-hover:scale-110 group-hover:fill-current group-hover:text-red-500" />
                <Badge
                  variant="destructive"
                  className={`absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs transition-transform duration-300 ${
                    wishlistBump ? "scale-110" : ""
                  }`}
                >
                  {wishlistCount}
                </Badge>
              </Button>
            </Link>

            <Link to="/cart" aria-label="Cart">
              <Button variant="ghost" size="icon" className="relative group">
                <ShoppingCart className="h-5 w-5 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" />
                <Badge
                  variant="destructive"
                  className={`absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs transition-transform duration-300 ${
                    cartBump ? "scale-110" : ""
                  }`}
                >
                  {cartCount}
                </Badge>
              </Button>
            </Link>
            {/* Mobile Icon */}
            <Link to="/login">
              <Button variant="outline" size="sm" className="sm:hidden group h-9 w-9">
                <User className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />
              </Button>
            </Link>
            {/* Desktop Icon */}
            <Link to="/login">
              <Button variant="outline" size="sm" className="hidden sm:flex gap-2 group h-10 text-sm">
                <User className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                Login
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Search - Visible only on small screens */}
        <div className="mt-3 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-10 bg-background border-border"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
