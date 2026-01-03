import { Search, Heart, ShoppingCart, User, Leaf, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface ProductsNavbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onFilterClick: () => void;
  activeFiltersCount: number;
}

const ProductsNavbar = ({ searchQuery, onSearchChange, onFilterClick, activeFiltersCount }: ProductsNavbarProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <nav className="container mx-auto px-3 sm:px-4 md:px-6 py-2.5 sm:py-3">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary">
              <Leaf className="h-4 w-4 sm:h-6 sm:w-6 text-primary-foreground" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-primary">Sowda</span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden flex-1 max-w-2xl md:flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for fruits, veggies, dairy..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 bg-background border-border h-10"
              />
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onFilterClick}
              className="gap-2 h-10 relative"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
              {activeFiltersCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Button variant="ghost" size="icon" className="relative group h-9 w-9 sm:h-10 sm:w-10">
              <Heart className="h-4 w-4 sm:h-5 sm:w-5 transition-all duration-300 group-hover:scale-110 group-hover:fill-current group-hover:text-destructive" />
              <Badge 
                variant="destructive" 
                className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 h-4 w-4 sm:h-5 sm:w-5 rounded-full p-0 flex items-center justify-center text-[10px] sm:text-xs"
              >
                3
              </Badge>
            </Button>
            
            <Button variant="ghost" size="icon" className="relative group h-9 w-9 sm:h-10 sm:w-10">
              <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 transition-all duration-300 group-hover:scale-110" />
              <Badge 
                variant="destructive" 
                className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 h-4 w-4 sm:h-5 sm:w-5 rounded-full p-0 flex items-center justify-center text-[10px] sm:text-xs"
              >
                5
              </Badge>
            </Button>

            {/* Mobile: Icon only */}
            <Button variant="outline" size="icon" className="sm:hidden group h-9 w-9">
              <User className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            </Button>
            {/* Desktop: Icon + Text */}
            <Button variant="outline" size="sm" className="hidden sm:flex gap-2 group h-10 text-sm">
              <User className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              Login
            </Button>
          </div>
        </div>

        {/* Mobile Search & Filter */}
        <div className="mt-2.5 sm:mt-3 md:hidden flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 bg-background border-border h-10"
            />
          </div>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={onFilterClick}
            className="h-10 w-10 relative shrink-0"
          >
            <SlidersHorizontal className="h-4 w-4" />
            {activeFiltersCount > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 flex items-center justify-center text-[10px]"
              >
                {activeFiltersCount}
              </Badge>
            )}
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default ProductsNavbar;
