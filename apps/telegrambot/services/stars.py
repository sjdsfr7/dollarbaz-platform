from typing import Literal, Dict
from decimal import Decimal

# Pretend rate is dynamic — later plugged into external API or admin-defined config
RATES = {
    "USD": Decimal("0.015"),
    "EUR": Decimal("0.013"),
}

def get_rate(currency: Literal["USD", "EUR"]) -> Decimal:
    return RATES.get(currency, Decimal("0.00"))

def send_stars(user_id: int, recipient_username: str, stars: int, currency: str) -> Dict:
    rate = get_rate(currency)
    fiat_value = stars * rate
    return {
        "recipient": recipient_username,
        "stars": stars,
        "value": fiat_value,
        "currency": currency,
        "rate": float(rate),
    }

def confirm_exchange(user_id: int, recipient_username: str, stars: int, currency: str) -> bool:
    # Here you would update DB, trigger notifications, etc.
    # We'll simulate success
    return True
import httpx

BASE_URL = "https://your-api.com/api/stars"  # TODO: move to env

async def submit_stars_exchange(data):
    async with httpx.AsyncClient() as client:
        res = await client.post(f"{BASE_URL}/order", json=data)
        if res.status_code == 200:
            return res.json()
        return {"success": False, "message": res.text}
