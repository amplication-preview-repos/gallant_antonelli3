import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InventoryListRelationFilter } from "../inventory/InventoryListRelationFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProductWhereInput = {
  category?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  inventories?: InventoryListRelationFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  price?: FloatNullableFilter;
};
