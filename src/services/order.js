import axios from "axios";

const API = "http://localhost:5000/api/orders";

export async function createOrder(orderData, token) {
  const res = await axios.post(API, orderData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}

export async function getOrders(token) {
  const res = await axios.get(API, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}
