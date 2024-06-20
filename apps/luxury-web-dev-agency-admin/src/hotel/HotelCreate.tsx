import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const HotelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Location" source="location" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="NumberOfRooms" source="numberOfRooms" />
        <NumberInput label="Rating" source="rating" />
      </SimpleForm>
    </Create>
  );
};
