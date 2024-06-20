import { SortOrder } from "../../util/SortOrder";

export type BusinessOrderByInput = {
  contactEmail?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  industry?: SortOrder;
  name?: SortOrder;
  numberOfEmployees?: SortOrder;
  updatedAt?: SortOrder;
};
