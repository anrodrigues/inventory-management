"use client";

import { useGetUsersQuery } from "@/src/state/api";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Header from "../(components)/Header";

const columns: GridColDef[] = [
  { field: "userId", headerName: "ID", width: 200 },
  { field: "name", headerName: "Product Name", width: 200 },
  { field: "email", headerName: "Email", width: 200 },

];

const Users = () => {
  const { data: products, isError, isLoading } = useGetUsersQuery();
  console.log(products)
  if (isLoading) {
    return <div className="py-4">Loading...</div>;
  }

  if (isError || !products) {
    return (
      <div className="text-center text-red-500 py-4">
        Failed to fetch products
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Header name="Inventory" />
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row) => row.userId}
        checkboxSelection
        className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
      />
    </div>
  );
};

export default Users;
