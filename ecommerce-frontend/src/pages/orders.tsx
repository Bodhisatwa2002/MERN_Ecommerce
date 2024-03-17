import { Column } from "react-table";
import TableHOC from "../components/admin/TableHOC";
import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";

type DataType = {
  _id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
};
const column: Column<DataType>[] = [
  {
    Header: "ID",
    accessor: "_id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
const Orders = () => {
  const [rows] = useState<DataType[]>([
    {
      _id: "proxy",
      amount: 43545,
      quantity: 13,
      discount: 454,
      status: <span className="red">Processing</span>,
      action: <Link to={`/orders/proxy`}>View</Link>,
    },
  ]);
  const Table = TableHOC<DataType>(
    column,
    rows,
    "dashboard-product-box",
    "Orders",
   
  )();
  return (
    <div className="container">
      <h1>My orders</h1>
      {Table}
    </div>
  );
};

export default Orders;
