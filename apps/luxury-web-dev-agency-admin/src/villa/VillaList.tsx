import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const VillaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Villas"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Amenities" source="amenities" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Location" source="location" />
        <TextField label="Name" source="name" />
        <TextField label="PricePerNight" source="pricePerNight" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
