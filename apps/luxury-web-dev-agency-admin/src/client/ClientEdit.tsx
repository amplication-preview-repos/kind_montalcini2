import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ClientEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="AssociatedBusiness" source="associatedBusiness" />
        <TextInput label="AssociatedHotel" source="associatedHotel" />
        <TextInput label="AssociatedVilla" source="associatedVilla" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="FirstName" source="firstName" />
        <TextInput label="LastName" source="lastName" />
      </SimpleForm>
    </Edit>
  );
};
