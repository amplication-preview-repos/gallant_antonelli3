import { Inventory } from "../inventory/Inventory";
import { Order } from "../order/Order";

export type Product = {
  category: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  inventories?: Array<Inventory>;
  name: string | null;
  orders?: Array<Order>;
  price: number | null;
  updatedAt: Date;
};
