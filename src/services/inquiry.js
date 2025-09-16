const API_URL = "http://localhost:5000/api/inquiries"; // plural

export async function sendInquiry(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to send inquiry");
  }

  return res.json();
}
