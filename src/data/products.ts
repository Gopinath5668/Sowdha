// Product data with multiple images and detailed information

export interface Product {
  id: number;
  name: string;
  type: string;
  category: string;
  detail: string;
  price: number;
  originalPrice?: number;
  quantity: string;
  images: string[];
  inStock: boolean;
  deliveryDays: number;
  rating: number;
}

export const allProducts: Product[] = [
  // Fresh Fruits
  {
    id: 1,
    name: "Organic Alphonso Mangoes",
    type: "Premium",
    category: "Fruits",
    detail: "Sweet, aromatic mangoes from Ratnagiri farms",
    price: 599,
    originalPrice: 799,
    quantity: "1 kg",
    images: [
      "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400",
      "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=400",
      "https://images.unsplash.com/photo-1591073113125-e46713c829ed?w=400"
    ],
    inStock: true,
    deliveryDays: 1,
    rating: 4.8
  },
  {
    id: 2,
    name: "Fresh Strawberries",
    type: "Imported",
    category: "Fruits",
    detail: "Juicy red strawberries, perfect for desserts",
    price: 299,
    quantity: "250 g",
    images: [
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400",
      "https://images.unsplash.com/photo-1587393855524-087f83d95bc9?w=400",
      "https://images.unsplash.com/photo-1543528176-61b239494933?w=400"
    ],
    inStock: true,
    deliveryDays: 1,
    rating: 4.5
  },
  {
    id: 3,
    name: "Green Apples",
    type: "Organic",
    category: "Fruits",
    detail: "Crisp and tangy Granny Smith apples",
    price: 189,
    originalPrice: 220,
    quantity: "500 g",
    images: [
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400",
      "https://images.unsplash.com/photo-1584306670957-acf935f5033c?w=400",
      "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=400"
    ],
    inStock: true,
    deliveryDays: 2,
    rating: 4.3
  },
  {
    id: 4,
    name: "Fresh Bananas",
    type: "Local",
    category: "Fruits",
    detail: "Ripe yellow bananas, rich in potassium",
    price: 49,
    quantity: "1 dozen",
    images: [
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400",
      "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400",
      "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=400"
    ],
    inStock: true,
    deliveryDays: 1,
    rating: 4.6
  },
  {
    id: 5,
    name: "Juicy Oranges",
    type: "Premium",
    category: "Fruits",
    detail: "Sweet and tangy Nagpur oranges",
    price: 129,
    quantity: "1 kg",
    images: [
      "https://images.unsplash.com/photo-1547514701-42782101795e?w=400",
      "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=400",
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=400"
    ],
    inStock: false,
    deliveryDays: 3,
    rating: 4.4
  },

  // Vegetables
  {
    id: 6,
    name: "Fresh Spinach",
    type: "Organic",
    category: "Vegetables",
    detail: "Nutrient-rich leafy greens, farm fresh",
    price: 35,
    quantity: "250 g",
    images: [
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400",
      "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?w=400",
      "https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?w=400"
    ],
    inStock: true,
    deliveryDays: 1,
    rating: 4.7
  },
  {
    id: 7,
    name: "Red Tomatoes",
    type: "Local",
    category: "Vegetables",
    detail: "Vine-ripened tomatoes for salads",
    price: 45,
    originalPrice: 60,
    quantity: "500 g",
    images: [
      "https://images.unsplash.com/photo-1546470427-e26264be0b11?w=400",
      "https://images.unsplash.com/photo-1561136594-7f68413baa99?w=400",
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400"
    ],
    inStock: true,
    deliveryDays: 1,
    rating: 4.2
  },
  {
    id: 8,
    name: "Baby Carrots",
    type: "Organic",
    category: "Vegetables",
    detail: "Sweet and crunchy baby carrots",
    price: 89,
    quantity: "400 g",
    images: [
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400",
      "https://images.unsplash.com/photo-1582515073490-39981397c445?w=400",
      "https://images.unsplash.com/photo-1447175008436-054170c2e979?w=400"
    ],
    inStock: true,
    deliveryDays: 2,
    rating: 4.5
  },
  {
    id: 9,
    name: "Fresh Broccoli",
    type: "Imported",
    category: "Vegetables",
    detail: "Crisp green broccoli florets",
    price: 120,
    quantity: "300 g",
    images: [
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400",
      "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?w=400",
      "https://images.unsplash.com/photo-1628773822503-930a7eaecf80?w=400"
    ],
    inStock: true,
    deliveryDays: 2,
    rating: 4.4
  },
  {
    id: 10,
    name: "Bell Peppers Mix",
    type: "Premium",
    category: "Vegetables",
    detail: "Colorful mix of red, yellow, green peppers",
    price: 199,
    originalPrice: 250,
    quantity: "500 g",
    images: [
      "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400",
      "https://images.unsplash.com/photo-1526346698789-22fd84314424?w=400",
      "https://images.unsplash.com/photo-1592005855419-c239c5eb1a5f?w=400"
    ],
    inStock: false,
    deliveryDays: 3,
    rating: 4.6
  },

  // Dairy & Eggs
  {
    id: 11,
    name: "Farm Fresh Milk",
    type: "Organic",
    category: "Dairy",
    detail: "Pure cow milk from local farms",
    price: 68,
    quantity: "1 L",
    images: [
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400",
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400",
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400"
    ],
    inStock: true,
    deliveryDays: 1,
    rating: 4.9
  },
  {
    id: 12,
    name: "Greek Yogurt",
    type: "Premium",
    category: "Dairy",
    detail: "Creamy probiotic-rich yogurt",
    price: 149,
    quantity: "400 g",
    images: [
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400",
      "https://images.unsplash.com/photo-1571212515416-fef01fc43637?w=400",
      "https://images.unsplash.com/photo-1593424747515-6f22a5d32b40?w=400"
    ],
    inStock: true,
    deliveryDays: 1,
    rating: 4.7
  },
  {
    id: 13,
    name: "Free Range Eggs",
    type: "Organic",
    category: "Dairy",
    detail: "Farm fresh eggs from free-range hens",
    price: 120,
    originalPrice: 150,
    quantity: "12 pcs",
    images: [
      "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400",
      "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=400",
      "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?w=400"
    ],
    inStock: true,
    deliveryDays: 1,
    rating: 4.8
  },
  {
    id: 14,
    name: "Cheddar Cheese",
    type: "Imported",
    category: "Dairy",
    detail: "Aged cheddar with rich flavor",
    price: 350,
    quantity: "200 g",
    images: [
      "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=400",
      "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400",
      "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=400"
    ],
    inStock: true,
    deliveryDays: 2,
    rating: 4.5
  },
  {
    id: 15,
    name: "Butter Unsalted",
    type: "Premium",
    category: "Dairy",
    detail: "Pure creamy butter for cooking",
    price: 280,
    quantity: "500 g",
    images: [
      "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400",
      "https://images.unsplash.com/photo-1622973536968-3ead9e780960?w=400",
      "https://images.unsplash.com/photo-1611432579699-484f7990b127?w=400"
    ],
    inStock: false,
    deliveryDays: 2,
    rating: 4.6
  },

  // Bakery
  {
    id: 16,
    name: "Whole Wheat Bread",
    type: "Fresh",
    category: "Bakery",
    detail: "Freshly baked whole grain bread",
    price: 55,
    quantity: "400 g",
    images: [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400",
      "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400"
    ],
    inStock: true,
    deliveryDays: 1,
    rating: 4.4
  },
  {
    id: 17,
    name: "Croissants",
    type: "Premium",
    category: "Bakery",
    detail: "Buttery flaky French croissants",
    price: 180,
    originalPrice: 220,
    quantity: "4 pcs",
    images: [
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400",
      "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=400",
      "https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=400"
    ],
    inStock: true,
    deliveryDays: 1,
    rating: 4.8
  },
  {
    id: 18,
    name: "Sourdough Loaf",
    type: "Artisan",
    category: "Bakery",
    detail: "Traditional sourdough with crispy crust",
    price: 150,
    quantity: "500 g",
    images: [
      "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?w=400",
      "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=400",
      "https://images.unsplash.com/photo-1593246049226-ded77bf90326?w=400"
    ],
    inStock: true,
    deliveryDays: 1,
    rating: 4.7
  },
  {
    id: 19,
    name: "Chocolate Muffins",
    type: "Fresh",
    category: "Bakery",
    detail: "Rich chocolate muffins with chips",
    price: 199,
    quantity: "6 pcs",
    images: [
      "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400",
      "https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?w=400",
      "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400"
    ],
    inStock: true,
    deliveryDays: 1,
    rating: 4.6
  },
  {
    id: 20,
    name: "Bagels Assorted",
    type: "Fresh",
    category: "Bakery",
    detail: "Mix of plain, sesame, and poppy bagels",
    price: 120,
    quantity: "4 pcs",
    images: [
      "https://images.unsplash.com/photo-1585535912311-d8a59bce0003?w=400",
      "https://images.unsplash.com/photo-1592950379584-93d1e53a9tried?w=400",
      "https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?w=400"
    ],
    inStock: false,
    deliveryDays: 2,
    rating: 4.3
  },

  // Beverages
  {
    id: 21,
    name: "Fresh Orange Juice",
    type: "Cold Pressed",
    category: "Beverages",
    detail: "100% pure orange juice, no sugar added",
    price: 149,
    quantity: "1 L",
    images: [
      "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400",
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400",
      "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=400"
    ],
    inStock: true,
    deliveryDays: 1,
    rating: 4.7
  },
  {
    id: 22,
    name: "Green Smoothie",
    type: "Premium",
    category: "Beverages",
    detail: "Kale, spinach, apple, and ginger blend",
    price: 199,
    originalPrice: 250,
    quantity: "500 ml",
    images: [
      "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=400",
      "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400",
      "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400"
    ],
    inStock: true,
    deliveryDays: 1,
    rating: 4.5
  },
  {
    id: 23,
    name: "Coconut Water",
    type: "Natural",
    category: "Beverages",
    detail: "Fresh tender coconut water",
    price: 45,
    quantity: "330 ml",
    images: [
      "https://images.unsplash.com/photo-1536657464919-892534f60d6e?w=400",
      "https://images.unsplash.com/photo-1595475207225-428b62bda831?w=400",
      "https://images.unsplash.com/photo-1544885935-98dd03b09034?w=400"
    ],
    inStock: true,
    deliveryDays: 1,
    rating: 4.8
  },
  {
    id: 24,
    name: "Almond Milk",
    type: "Organic",
    category: "Beverages",
    detail: "Plant-based milk, unsweetened",
    price: 220,
    quantity: "1 L",
    images: [
      "https://images.unsplash.com/photo-1556881286-fc6915169721?w=400",
      "https://images.unsplash.com/photo-1600718374662-0483d2b9da44?w=400",
      "https://images.unsplash.com/photo-1608570833453-a1c4e5c55e44?w=400"
    ],
    inStock: true,
    deliveryDays: 2,
    rating: 4.4
  },
  {
    id: 25,
    name: "Mixed Berry Juice",
    type: "Cold Pressed",
    category: "Beverages",
    detail: "Blend of blueberry, raspberry, strawberry",
    price: 179,
    quantity: "500 ml",
    images: [
      "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400",
      "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400",
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400"
    ],
    inStock: false,
    deliveryDays: 2,
    rating: 4.6
  },

  // Pantry
  {
    id: 26,
    name: "Extra Virgin Olive Oil",
    type: "Imported",
    category: "Pantry",
    detail: "Cold-pressed Italian olive oil",
    price: 650,
    originalPrice: 799,
    quantity: "500 ml",
    images: [
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
      "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=400",
      "https://images.unsplash.com/photo-1601001815894-4bb6c81416d7?w=400"
    ],
    inStock: true,
    deliveryDays: 2,
    rating: 4.9
  },
  {
    id: 27,
    name: "Organic Honey",
    type: "Premium",
    category: "Pantry",
    detail: "Raw unfiltered forest honey",
    price: 450,
    quantity: "500 g",
    images: [
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400",
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400",
      "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=400"
    ],
    inStock: true,
    deliveryDays: 2,
    rating: 4.8
  },
  {
    id: 28,
    name: "Basmati Rice",
    type: "Premium",
    category: "Pantry",
    detail: "Aged long-grain aromatic rice",
    price: 280,
    quantity: "1 kg",
    images: [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
      "https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?w=400",
      "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400"
    ],
    inStock: true,
    deliveryDays: 2,
    rating: 4.6
  },
  {
    id: 29,
    name: "Pasta Spaghetti",
    type: "Imported",
    category: "Pantry",
    detail: "Italian durum wheat spaghetti",
    price: 165,
    quantity: "500 g",
    images: [
      "https://images.unsplash.com/photo-1551462147-37885acc36f1?w=400",
      "https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=400",
      "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400"
    ],
    inStock: true,
    deliveryDays: 3,
    rating: 4.5
  },
  {
    id: 30,
    name: "Mixed Nuts",
    type: "Premium",
    category: "Pantry",
    detail: "Almonds, cashews, walnuts, pistachios",
    price: 599,
    originalPrice: 750,
    quantity: "400 g",
    images: [
      "https://images.unsplash.com/photo-1606567595334-d39972c85dfd?w=400",
      "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?w=400",
      "https://images.unsplash.com/photo-1536591375656-e1e09f4bbb87?w=400"
    ],
    inStock: true,
    deliveryDays: 2,
    rating: 4.7
  }
];

export const categories = ["All", "Fruits", "Vegetables", "Dairy", "Bakery", "Beverages", "Pantry"];

export const productTypes = ["All", "Organic", "Premium", "Imported", "Local", "Fresh", "Natural", "Artisan", "Cold Pressed"];
