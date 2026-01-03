import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { categories, productTypes } from "@/data/products";

export interface FilterState {
  sortBy: string;
  categories: string[];
  productTypes: string[];
  inStockOnly: boolean;
  deliveryTime: string;
  priceRange: string;
}

interface FilterSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  onClearFilters: () => void;
}

const FilterSheet = ({ open, onOpenChange, filters, onFiltersChange, onClearFilters }: FilterSheetProps) => {
  const handleCategoryToggle = (category: string) => {
    if (category === "All") {
      onFiltersChange({ ...filters, categories: [] });
    } else {
      const newCategories = filters.categories.includes(category)
        ? filters.categories.filter(c => c !== category)
        : [...filters.categories, category];
      onFiltersChange({ ...filters, categories: newCategories });
    }
  };

  const handleTypeToggle = (type: string) => {
    if (type === "All") {
      onFiltersChange({ ...filters, productTypes: [] });
    } else {
      const newTypes = filters.productTypes.includes(type)
        ? filters.productTypes.filter(t => t !== type)
        : [...filters.productTypes, type];
      onFiltersChange({ ...filters, productTypes: newTypes });
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-md p-0">
        <SheetHeader className="p-4 sm:p-6 pb-0">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-xl font-bold">Filters</SheetTitle>
            <Button variant="ghost" size="sm" onClick={onClearFilters} className="text-muted-foreground">
              Clear All
            </Button>
          </div>
        </SheetHeader>
        
        <ScrollArea className="h-[calc(100vh-140px)] px-4 sm:px-6">
          <div className="space-y-6 py-4">
            {/* Sort By */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Sort By</h3>
              <RadioGroup 
                value={filters.sortBy} 
                onValueChange={(value) => onFiltersChange({ ...filters, sortBy: value })}
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="relevance" id="relevance" />
                  <Label htmlFor="relevance" className="cursor-pointer">Relevance</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="price-low" id="price-low" />
                  <Label htmlFor="price-low" className="cursor-pointer">Price: Low to High</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="price-high" id="price-high" />
                  <Label htmlFor="price-high" className="cursor-pointer">Price: High to Low</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="rating" id="rating" />
                  <Label htmlFor="rating" className="cursor-pointer">Highest Rated</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="name-asc" id="name-asc" />
                  <Label htmlFor="name-asc" className="cursor-pointer">Name: A to Z</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="name-desc" id="name-desc" />
                  <Label htmlFor="name-desc" className="cursor-pointer">Name: Z to A</Label>
                </div>
              </RadioGroup>
            </div>

            <Separator />

            {/* Categories */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Categories</h3>
              <div className="space-y-2">
                {categories.filter(c => c !== "All").map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`cat-${category}`}
                      checked={filters.categories.includes(category)}
                      onCheckedChange={() => handleCategoryToggle(category)}
                    />
                    <Label htmlFor={`cat-${category}`} className="cursor-pointer">{category}</Label>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Product Types */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Product Type</h3>
              <div className="space-y-2">
                {productTypes.filter(t => t !== "All").map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`type-${type}`}
                      checked={filters.productTypes.includes(type)}
                      onCheckedChange={() => handleTypeToggle(type)}
                    />
                    <Label htmlFor={`type-${type}`} className="cursor-pointer">{type}</Label>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Price Range */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Price Range</h3>
              <RadioGroup 
                value={filters.priceRange} 
                onValueChange={(value) => onFiltersChange({ ...filters, priceRange: value })}
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="price-all" />
                  <Label htmlFor="price-all" className="cursor-pointer">All Prices</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="under-100" id="under-100" />
                  <Label htmlFor="under-100" className="cursor-pointer">Under ₹100</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="100-300" id="100-300" />
                  <Label htmlFor="100-300" className="cursor-pointer">₹100 - ₹300</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="300-500" id="300-500" />
                  <Label htmlFor="300-500" className="cursor-pointer">₹300 - ₹500</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="over-500" id="over-500" />
                  <Label htmlFor="over-500" className="cursor-pointer">Over ₹500</Label>
                </div>
              </RadioGroup>
            </div>

            <Separator />

            {/* Stock Availability */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Availability</h3>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="in-stock"
                  checked={filters.inStockOnly}
                  onCheckedChange={(checked) => onFiltersChange({ ...filters, inStockOnly: checked as boolean })}
                />
                <Label htmlFor="in-stock" className="cursor-pointer">In Stock Only</Label>
              </div>
            </div>

            <Separator />

            {/* Delivery Time */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Delivery Time</h3>
              <RadioGroup 
                value={filters.deliveryTime} 
                onValueChange={(value) => onFiltersChange({ ...filters, deliveryTime: value })}
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="delivery-all" />
                  <Label htmlFor="delivery-all" className="cursor-pointer">All</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="same-day" id="same-day" />
                  <Label htmlFor="same-day" className="cursor-pointer">Same Day Delivery</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1-day" id="1-day" />
                  <Label htmlFor="1-day" className="cursor-pointer">Within 1 Day</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="2-days" id="2-days" />
                  <Label htmlFor="2-days" className="cursor-pointer">Within 2 Days</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="3-days" id="3-days" />
                  <Label htmlFor="3-days" className="cursor-pointer">Within 3 Days</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </ScrollArea>

        <div className="p-4 sm:p-6 pt-0 border-t">
          <Button 
            className="w-full" 
            onClick={() => onOpenChange(false)}
          >
            Apply Filters
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FilterSheet;
