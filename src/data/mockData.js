export const customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    location: "New York",
    totalSpent: 5000,
    tags: ["loyal", "high-value"],
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    location: "Los Angeles",
    totalSpent: 1200,
    tags: ["new"],
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    location: "Chicago",
    totalSpent: 3500,
    tags: ["loyal"],
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    location: "Miami",
    totalSpent: 800,
    tags: ["new"],
  },
  {
    id: 5,
    name: "Charlie Wilson",
    email: "charlie@example.com",
    location: "Seattle",
    totalSpent: 6500,
    tags: ["high-value", "loyal"],
  },
];

export const campaigns = [
  {
    id: 1,
    title: "Summer Sale",
    message: "Get 20% off on all products!",
    deliveryType: "email",
    segment: ["loyal"],
    status: "delivered",
    successRate: 85,
    sentAt: "2024-03-15",
  },
  {
    id: 2,
    title: "Welcome Bonus",
    message: "Welcome to our store! Here's $10 off your first purchase.",
    deliveryType: "sms",
    segment: ["new"],
    status: "delivered",
    successRate: 92,
    sentAt: "2024-03-10",
  },
  {
    id: 3,
    title: "VIP Exclusive",
    message: "Special access to new arrivals!",
    deliveryType: "email",
    segment: ["high-value"],
    status: "pending",
    successRate: 0,
    sentAt: "2024-03-20",
  },
];

export const availableTags = ["loyal", "new", "high-value"]; 