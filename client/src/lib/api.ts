type ReservationData = {
    name: string;
    email: string;
    phone: string;
    city: string;
    variant: "bouncecastle" | "bubblehouse" | "minibouncecastle" | "paket1" | "paket2" | "paket3" | "paket4";
    decoration?: boolean;
    date: string;
    specialRequests?: string;
}

const BASE_URL = "https://jumpandfun-production.up.railway.app"

export const submitReservation = async (data: ReservationData) => {
    console.log("Sending request to:", BASE_URL);
    const response = await fetch(`${BASE_URL}/api/reservations/submit`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    if (!response.ok){
        throw new Error("Greska pri slanju rezervacije")
    }
    return response.json()
}
