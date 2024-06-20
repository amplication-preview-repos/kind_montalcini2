import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  associatedBusiness?: SortOrder;
  associatedHotel?: SortOrder;
  associatedVilla?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  updatedAt?: SortOrder;
};
