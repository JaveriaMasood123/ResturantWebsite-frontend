const API_URL = "http://localhost:5000/api/menu";

export async function getMenuItems() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch menu");
  return res.json();
}
