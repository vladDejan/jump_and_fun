/* type ReservationData = {
    name: string;
    email: string;
    phone: string;
    city: string;
    variant: "bouncecastle" | "bubblehouse" | "minibouncecastle" | "paket1" | "paket2" | "paket3" | "paket4";
    decoration?: boolean;
    date: string;
    specialRequests?: string;
} */

const API_URL = import.meta.env.VITE_API_URL;

export const submitReservation = async (data: any) => {
  const fullUrl = `${API_URL}/api/reservations/submit`;

  console.log("Sending request to:", fullUrl); // <<< ovde vidiš tačan URL

  try {
    const response = await fetch(fullUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const result = await response.json();
    console.log("Server response:", result);
    return result;

  } catch (err) {
    console.error("Error submitting reservation:", err);
    throw err;
  }
};