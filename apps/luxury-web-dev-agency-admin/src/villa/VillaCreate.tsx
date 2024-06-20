import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const VillaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Amenities" multiline source="amenities" />
        <TextInput label="Location" source="location" />
        <TextInput label="Name" source="name" />
        <NumberInput label="PricePerNight" source="pricePerNight" />
      </SimpleForm>
    </Create>
  );
};
