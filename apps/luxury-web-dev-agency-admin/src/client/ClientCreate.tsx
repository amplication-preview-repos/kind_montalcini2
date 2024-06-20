import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ClientCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="AssociatedBusiness" source="associatedBusiness" />
        <TextInput label="AssociatedHotel" source="associatedHotel" />
        <TextInput label="AssociatedVilla" source="associatedVilla" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="FirstName" source="firstName" />
        <TextInput label="LastName" source="lastName" />
      </SimpleForm>
    </Create>
  );
};
