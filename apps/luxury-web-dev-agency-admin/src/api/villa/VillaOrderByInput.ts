import { SortOrder } from "../../util/SortOrder";

export type VillaOrderByInput = {
  amenities?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  pricePerNight?: SortOrder;
  updatedAt?: SortOrder;
};
