import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const BusinessCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
