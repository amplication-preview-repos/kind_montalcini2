import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ClientShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="AssociatedBusiness" source="associatedBusiness" />
        <TextField label="AssociatedHotel" source="associatedHotel" />
        <TextField label="AssociatedVilla" source="associatedVilla" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="FirstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="LastName" source="lastName" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
