import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClientWhereInput = {
  associatedBusiness?: StringNullableFilter;
  associatedHotel?: StringNullableFilter;
  associatedVilla?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
};
