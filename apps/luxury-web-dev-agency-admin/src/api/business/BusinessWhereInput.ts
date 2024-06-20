import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type BusinessWhereInput = {
  contactEmail?: StringNullableFilter;
  id?: StringFilter;
  industry?: StringNullableFilter;
  name?: StringNullableFilter;
  numberOfEmployees?: IntNullableFilter;
};
