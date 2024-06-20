import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BusinessList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Businesses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ContactEmail" source="contactEmail" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Industry" source="industry" />
        <TextField label="Name" source="name" />
        <TextField label="NumberOfEmployees" source="numberOfEmployees" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
