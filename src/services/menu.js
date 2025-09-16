const API_URL = "https://resturant-website-backend-gamma.vercel.app/api/menu";

export async function getMenuItems() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch menu");
  return res.json();
}
