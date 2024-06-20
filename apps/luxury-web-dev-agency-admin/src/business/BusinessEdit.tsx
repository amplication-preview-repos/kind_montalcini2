import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const BusinessEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ContactEmail" source="contactEmail" type="email" />
        <TextInput label="Industry" source="industry" />
        <TextInput label="Name" source="name" />
        <NumberInput
          step={1}
          label="NumberOfEmployees"
          source="numberOfEmployees"
        />
      </SimpleForm>
    </Edit>
  );
};
