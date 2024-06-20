import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const HotelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Location" source="location" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="NumberOfRooms" source="numberOfRooms" />
        <NumberInput label="Rating" source="rating" />
      </SimpleForm>
    </Edit>
  );
};
