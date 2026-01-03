import { useState, useEffect } from "react";
import { Heart, Plus, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";
import { useStore } from "@/context/StoreContext";

interface EnhancedProductCardProps {
  product: Product;
}

const EnhancedProductCard = ({ product }: EnhancedProductCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart, addToWishlist, removeFromWishlist, isWishlisted, cart } = useStore();

  const [cartBump, setCartBump] = useState(false);
  const [wishBump, setWishBump] = useState(false);

  const cartItem = cart.find((it) => it.id === product.id);
  const qty = cartItem ? cartItem.qty : 0;

  useEffect(() => {
    // reset bump when qty changes externally
    if (qty > 0) {
      setCartBump(true);
      const t = setTimeout(() => setCartBump(false), 350);
      return () => clearTimeout(t);
    }
  }, [qty]);

  useEffect(() => {
    // animation when wish state changes
    setWishBump(true);
    const t = setTimeout(() => setWishBump(false), 300);
    return () => clearTimeout(t);
  }, [isWishlisted(product.id)]);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group rounded-xl bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-1">
      {/* Image Carousel */}
      <div className="relative aspect-square overflow-hidden bg-secondary/20">
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        
        {/* Image Navigation */}
        {product.images.length > 1 && (
          <>
            <Button
              size="icon"
              variant="secondary"
              className="absolute left-2 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}

        {/* Image Dots */}
        {product.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {product.images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentImageIndex 
                    ? "w-4 bg-primary" 
                    : "w-1.5 bg-card/70 hover:bg-card"
                }`}
              />
            ))}
          </div>
        )}

        {/* Wishlist Button */}
        <Button
          size="icon"
          variant="secondary"
          className={`absolute top-2 right-2 h-8 w-8 rounded-full transition-transform duration-200 ${
            isWishlisted(product.id) ? "bg-destructive/10 text-destructive scale-105" : "opacity-0 group-hover:opacity-100"
          } ${wishBump ? "scale-110" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            if (isWishlisted(product.id)) removeFromWishlist(product.id);
            else addToWishlist(product.id);
            setWishBump(true);
            setTimeout(() => setWishBump(false), 300);
          }}
        >
          <Heart className={`h-4 w-4 ${isWishlisted(product.id) ? "fill-current" : ""}`} />
        </Button>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {discount > 0 && (
            <Badge variant="destructive" className="text-[10px] px-1.5 py-0.5">
              {discount}% OFF
            </Badge>
          )}
          {!product.inStock && (
            <Badge variant="secondary" className="text-[10px] px-1.5 py-0.5 bg-muted-foreground/80 text-white">
              Out of Stock
            </Badge>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-3 sm:p-4 space-y-2">
        {/* Type Badge */}
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-[10px] sm:text-xs font-medium">
            {product.type}
          </Badge>
          <div className="flex items-center gap-0.5 text-xs text-muted-foreground">
            <Star className="h-3 w-3 fill-bakery text-bakery" />
            <span>{product.rating}</span>
          </div>
        </div>

        {/* Name */}
        <h3 className="font-semibold text-sm sm:text-base text-card-foreground line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>

        {/* Detail */}
        <p className="text-xs text-muted-foreground line-clamp-1">
          {product.detail}
        </p>

        {/* Price and Quantity */}
        <div className="flex items-end justify-between pt-1">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg font-bold text-primary">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-xs text-muted-foreground line-through">₹{product.originalPrice}</span>
              )}
            </div>
            <span className="text-xs text-muted-foreground">{product.quantity}</span>
          </div>
          
          <div className="relative">
            <Button 
              size="sm" 
              variant="accent" 
              className={`rounded-full h-8 w-8 sm:h-9 sm:w-9 p-0 group/btn transition-transform ${cartBump ? "scale-110" : ""}`}
              disabled={!product.inStock}
              onClick={(e) => { e.stopPropagation(); addToCart(product, 1); setCartBump(true); setTimeout(() => setCartBump(false), 350); }}
            >
              <Plus className="h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-90" />
            </Button>
            {qty > 0 && (
              <span className={`absolute -top-2 -right-3 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground text-xs w-5 h-5 transition-transform ${cartBump ? "scale-110" : ""}`}>
                {qty}
              </span>
            )}
          </div>
        </div>

        {/* Delivery Info */}
        <p className="text-[10px] sm:text-xs text-muted-foreground">
          {product.inStock 
            ? product.deliveryDays === 1 
              ? "Delivery Tomorrow" 
              : `Delivery in ${product.deliveryDays} days`
            : "Currently unavailable"
          }
        </p>
      </div>
    </div>
  );
};

export default EnhancedProductCard;
