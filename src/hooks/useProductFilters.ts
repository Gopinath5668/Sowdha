import { useState, useMemo } from "react";
import { Product, allProducts } from "@/data/products";
import { FilterState } from "@/components/products/FilterSheet";

const defaultFilters: FilterState = {
  sortBy: "relevance",
  categories: [],
  productTypes: [],
  inStockOnly: false,
  deliveryTime: "all",
  priceRange: "all"
};

export const useProductFilters = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.type.toLowerCase().includes(query) ||
          p.detail.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (filters.categories.length > 0) {
      result = result.filter((p) => filters.categories.includes(p.category));
    }

    // Product type filter
    if (filters.productTypes.length > 0) {
      result = result.filter((p) => filters.productTypes.includes(p.type));
    }

    // Stock filter
    if (filters.inStockOnly) {
      result = result.filter((p) => p.inStock);
    }

    // Delivery time filter
    if (filters.deliveryTime !== "all") {
      const maxDays = filters.deliveryTime === "same-day" ? 0 
        : filters.deliveryTime === "1-day" ? 1
        : filters.deliveryTime === "2-days" ? 2
        : 3;
      result = result.filter((p) => p.deliveryDays <= maxDays);
    }

    // Price range filter
    if (filters.priceRange !== "all") {
      result = result.filter((p) => {
        switch (filters.priceRange) {
          case "under-100":
            return p.price < 100;
          case "100-300":
            return p.price >= 100 && p.price <= 300;
          case "300-500":
            return p.price >= 300 && p.price <= 500;
          case "over-500":
            return p.price > 500;
          default:
            return true;
        }
      });
    }

    // Sorting
    switch (filters.sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // relevance - keep original order
        break;
    }

    return result;
  }, [searchQuery, filters]);

  const getProductsByCategory = (category: string): Product[] => {
    return filteredProducts.filter((p) => p.category === category);
  };

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (filters.sortBy !== "relevance") count++;
    if (filters.categories.length > 0) count += filters.categories.length;
    if (filters.productTypes.length > 0) count += filters.productTypes.length;
    if (filters.inStockOnly) count++;
    if (filters.deliveryTime !== "all") count++;
    if (filters.priceRange !== "all") count++;
    return count;
  }, [filters]);

  const clearFilters = () => {
    setFilters(defaultFilters);
  };

  return {
    searchQuery,
    setSearchQuery,
    filters,
    setFilters,
    filteredProducts,
    getProductsByCategory,
    activeFiltersCount,
    clearFilters
  };
};
