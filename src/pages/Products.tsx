import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import ProductsNavbar from "@/components/products/ProductsNavbar";
import { categories as dataCategories } from "@/data/products";
import FilterSheet from "@/components/products/FilterSheet";
import ProductRow from "@/components/products/ProductRow";
import EnhancedProductCard from "@/components/products/EnhancedProductCard";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { useProductFilters } from "@/hooks/useProductFilters";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const Products = () => {
  const [filterSheetOpen, setFilterSheetOpen] = useState(false);
  const {
    searchQuery,
    setSearchQuery,
    filters,
    setFilters,
    filteredProducts,
    getProductsByCategory,
    activeFiltersCount,
    clearFilters
  } = useProductFilters();

  const [searchParams, setSearchParams] = useSearchParams();

  const [landingCategory, setLandingCategory] = useState<string | null>(null);
  const [showLandingHint, setShowLandingHint] = useState(false);

  // Read the URL params into filters/searchQuery (initial load and when URL changes)
  const lastAppliedParamsRef = useRef<string | null>(null);
  useEffect(() => {
    const currentParams = searchParams.toString();
    // If we've already applied these params, skip to avoid repeated state writes/scrolls
    if (lastAppliedParamsRef.current === currentParams) return;

    const paramQ = searchParams.get("q");
    const paramCategory = searchParams.get("category");
    const paramTypes = searchParams.get("types");
    const inStock = searchParams.get("instock") === "1";
    const delivery = searchParams.get("delivery");
    const price = searchParams.get("price");
    const sort = searchParams.get("sort");

    let newFilters = { ...filters };
    let needsUpdate = false;

    // Categories: if param present, set; if absent and filters has categories, clear
    if (paramCategory) {
      const list = paramCategory
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
        .map((s) => {
          const normalized = s.toLowerCase() === "grocery" ? "Pantry" : s;
          const match = dataCategories.find((c) => c.toLowerCase() === normalized.toLowerCase());
          return match || s;
        });

      // Only set if different
      const sameCategories =
        list.length === filters.categories.length && list.every((v, i) => v === filters.categories[i]);
      if (!sameCategories) {
        newFilters = { ...newFilters, categories: list };
        needsUpdate = true;
      }

      if (list.length > 0 && list[0] !== landingCategory) {
        setLandingCategory(list[0]);
        setShowLandingHint(true);
        // ensure we land at the top of the products page when navigating via category
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (filters.categories.length > 0) {
      newFilters = { ...newFilters, categories: [] };
      needsUpdate = true;
    }

    // Product types
    if (paramTypes !== null) {
      const typesList = paramTypes.split(",").map((s) => s.trim()).filter(Boolean);
      const sameTypes =
        typesList.length === filters.productTypes.length && typesList.every((v, i) => v === filters.productTypes[i]);
      if (!sameTypes) {
        newFilters = { ...newFilters, productTypes: typesList };
        needsUpdate = true;
      }
    } else if (filters.productTypes.length > 0) {
      newFilters = { ...newFilters, productTypes: [] };
      needsUpdate = true;
    }

    // InStock
    if (inStock !== filters.inStockOnly) {
      newFilters = { ...newFilters, inStockOnly: inStock };
      needsUpdate = true;
    }

    // Delivery
    const newDelivery = delivery && delivery !== "all" ? (delivery as any) : "all";
    if (newDelivery !== filters.deliveryTime) {
      newFilters = { ...newFilters, deliveryTime: newDelivery };
      needsUpdate = true;
    }

    // Price
    const newPrice = price && price !== "all" ? (price as any) : "all";
    if (newPrice !== filters.priceRange) {
      newFilters = { ...newFilters, priceRange: newPrice };
      needsUpdate = true;
    }

    // Sort
    const newSort = sort && sort !== "relevance" ? (sort as any) : "relevance";
    if (newSort !== filters.sortBy) {
      newFilters = { ...newFilters, sortBy: newSort };
      needsUpdate = true;
    }

    if (needsUpdate) {
      setFilters((prev) => ({ ...prev, ...newFilters }));
    }

    // Search query
    if (paramQ !== null && paramQ !== undefined && paramQ !== "") {
      if (paramQ !== searchQuery) setSearchQuery(paramQ);
    } else if ((paramQ === null || paramQ === undefined) && searchQuery !== "") {
      // URL has no query param but our state did -> clear it
      setSearchQuery("");
    }

    lastAppliedParamsRef.current = currentParams;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // Push current filters/searchQuery to the URL (bi-directional sync)
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set("q", searchQuery);
    if (filters.categories.length > 0) params.set("category", filters.categories.join(","));
    if (filters.productTypes.length > 0) params.set("types", filters.productTypes.join(","));
    if (filters.inStockOnly) params.set("instock", "1");
    if (filters.deliveryTime !== "all") params.set("delivery", filters.deliveryTime);
    if (filters.priceRange !== "all") params.set("price", filters.priceRange);
    if (filters.sortBy !== "relevance") params.set("sort", filters.sortBy);

    const current = searchParams.toString();
    const next = params.toString();
    if (current !== next) {
      // Mark this params string as applied before replacing it to avoid a feedback loop
      lastAppliedParamsRef.current = next;
      // Replace the current history entry instead of pushing a new one (no back/forward entries)
      setSearchParams(params, { replace: true });
    }
  }, [filters, searchQuery, setSearchParams, searchParams]);

  const hasActiveSearch = searchQuery.trim().length > 0;
  const hasActiveFilters = activeFiltersCount > 0;

  // Category data for rows
  const categoryRows = [
    { title: "Fresh Fruits", category: "Fruits", accent: "bg-fruit" },
    { title: "Farm Fresh Vegetables", category: "Vegetables", accent: "bg-veggie" },
    { title: "Dairy & Eggs", category: "Dairy", accent: "bg-dairy" },
    { title: "Bakery Fresh", category: "Bakery", accent: "bg-bakery" },
    { title: "Healthy Beverages", category: "Beverages", accent: "bg-primary" },
    { title: "Pantry Essentials", category: "Pantry", accent: "bg-accent" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ProductsNavbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onFilterClick={() => setFilterSheetOpen(true)}
        activeFiltersCount={activeFiltersCount}
      />

      <FilterSheet
        open={filterSheetOpen}
        onOpenChange={setFilterSheetOpen}
        filters={filters}
        onFiltersChange={setFilters}
        onClearFilters={clearFilters}
      />

      {showLandingHint && landingCategory && (
        <div className="container mx-auto px-3 sm:px-4 md:px-6 py-3">
          <div className="rounded-md bg-primary/10 p-3 flex items-center justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1 text-sm font-medium text-foreground shadow-sm transition-transform duration-300 hover:scale-102">
                <strong>Filtering by:</strong>
                <span className="ml-1 px-2 py-0.5 rounded bg-primary text-primary-foreground text-xs">{landingCategory}</span>
              </span>
              <span className="text-sm text-muted-foreground">Showing products for the selected category</span>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setShowLandingHint(false)} className="ml-2 text-muted-foreground">Dismiss</button>
            </div>
          </div>
        </div>
      )}

      <main className="pb-8">
        {/* Active Filters Display */}
        {(hasActiveSearch || hasActiveFilters) && (
          <div className="container mx-auto px-3 sm:px-4 md:px-6 py-4">
            <div className="flex flex-wrap items-center gap-2">
              {hasActiveSearch && (
                <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1">
                  Search: "{searchQuery}"
                  <button onClick={() => setSearchQuery("")} className="ml-1">
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              {filters.categories.map((cat) => (
                <Badge key={cat} variant="secondary" className="flex items-center gap-1 px-3 py-1">
                  {cat}
                  <button
                    onClick={() =>
                      setFilters({
                        ...filters,
                        categories: filters.categories.filter((c) => c !== cat)
                      })
                    }
                    className="ml-1"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
              {filters.productTypes.map((type) => (
                <Badge key={type} variant="secondary" className="flex items-center gap-1 px-3 py-1">
                  {type}
                  <button
                    onClick={() =>
                      setFilters({
                        ...filters,
                        productTypes: filters.productTypes.filter((t) => t !== type)
                      })
                    }
                    className="ml-1"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
              {filters.inStockOnly && (
                <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1">
                  In Stock Only
                  <button
                    onClick={() => setFilters({ ...filters, inStockOnly: false })}
                    className="ml-1"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-muted-foreground text-xs"
                >
                  Clear All
                </Button>
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} found
            </p>
          </div>
        )}

        {/* Show grid when searching or filtering, otherwise show category rows */}
        {hasActiveSearch || hasActiveFilters ? (
          <section className="container mx-auto px-3 sm:px-4 md:px-6 py-4">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {filteredProducts.map((product) => (
                  <EnhancedProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">No products found matching your criteria.</p>
                <Button variant="link" onClick={clearFilters} className="mt-2">
                  Clear filters
                </Button>
              </div>
            )}
          </section>
        ) : (
          <>
            {/* Hero Banner */}
            <section className="bg-gradient-to-r from-primary/10 via-secondary/30 to-accent/10 py-8 sm:py-12 md:py-16">
              <div className="container mx-auto px-3 sm:px-4 md:px-6 text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                  Fresh & Organic Groceries
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-4 sm:mb-6">
                  Discover farm-fresh produce, dairy, bakery items, and more. Delivered straight to your doorstep.
                </p>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                  <Badge variant="secondary" className="px-3 py-1.5 text-xs sm:text-sm">
                    🚚 Free Delivery over ₹200
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1.5 text-xs sm:text-sm">
                    🌿 100% Organic Options
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1.5 text-xs sm:text-sm">
                    ⏰ Same Day Delivery
                  </Badge>
                </div>
              </div>
            </section>

            {/* Category Rows */}
            {categoryRows.map((row) => (
              <ProductRow
                key={row.category}
                title={row.title}
                products={getProductsByCategory(row.category)}
                accentColor={row.accent}
              />
            ))}
          </>
        )}

        {/* Newsletter */}
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};

export default Products;
