import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ClientList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Clients"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="AssociatedBusiness" source="associatedBusiness" />
        <TextField label="AssociatedHotel" source="associatedHotel" />
        <TextField label="AssociatedVilla" source="associatedVilla" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="FirstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="LastName" source="lastName" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
