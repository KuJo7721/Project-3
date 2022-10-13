import React from 'react';
import { Link } from 'react-router-dom';

const OrderList = ({
  orders
}) => {
  if (!orders.length) {
    return <h3>No Orders Yet</h3>;
  }

  return (
    <div>
      <h3>Your Orders</h3>
      {orders &&
        orders.map((order) => (
          <div key={order._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
            {`${order.width} x ${order.height}`}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{order.text}</p>
              <p>Total:$ {order.price}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/orders/${order._id}`}
            >
              Review this order.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default OrderList;
