import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const VillaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Amenities" multiline source="amenities" />
        <TextInput label="Location" source="location" />
        <TextInput label="Name" source="name" />
        <NumberInput label="PricePerNight" source="pricePerNight" />
      </SimpleForm>
    </Edit>
  );
};
