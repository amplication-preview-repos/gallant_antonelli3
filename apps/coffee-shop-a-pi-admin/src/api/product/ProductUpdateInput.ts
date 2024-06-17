import { InventoryUpdateManyWithoutProductsInput } from "./InventoryUpdateManyWithoutProductsInput";
import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  category?: string | null;
  description?: string | null;
  inventories?: InventoryUpdateManyWithoutProductsInput;
  name?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
  price?: number | null;
};
