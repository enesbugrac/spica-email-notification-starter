import React, { useEffect, useState } from "react";
import "./Orders.css";
import { Order } from "../services/Order.service";

const Orders = () => {
  const [orders, setOrders] = useState<Array<Order>>([]);
  const [selectedItem, setSelectedItem] = useState<{
    _id: string;
    product_name: string;
    owner_mail: string;
  }>();
  useEffect(() => {}, []);

  const handleDeleteOrder = (order: Order) => {
    setSelectedItem(undefined);
  };

  return (
    <div className="container">
      {orders.length > 0 ? (
        <>
          <h3>Current Orders</h3>
          <table className="container__table">
            <tr>
              <th>ID</th>
              <th>Item</th>
              <th>Action</th>
            </tr>
            {orders?.map((order) => (
              <tr>
                <td>{order._id}</td>
                <td>{order.product_name}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteOrder(order)}
                  >
                    Delete Order
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </>
      ) : null}
    </div>
  );
};

export default Orders;
