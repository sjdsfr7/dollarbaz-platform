from typing import List, Dict, Literal
from packages.db.services.cards import create_card_purchase, get_user_cards, check_card_status

CardStatus = Literal["active", "inactive", "blocked", "expired"]

def buy_card(user_id: int, card_type: str, amount: float) -> Dict:
    # Logic to call provider API or internal service
    result = create_card_purchase(user_id=user_id, card_type=card_type, amount=amount)
    return result

def list_cards(user_id: int) -> List[Dict]:
    cards = get_user_cards(user_id)
    return cards

def get_card_status(card_id: str) -> CardStatus:
    status = check_card_status(card_id)
    return status
import httpx

BASE_URL = "https://your-api.com/api/cards"  # TODO: move to config/env

async def create_virtual_card(data):
    async with httpx.AsyncClient() as client:
        res = await client.post(f"{BASE_URL}/order", json=data)
        if res.status_code == 200:
            return res.json()  # must contain card_id or similar
        return {"success": False, "message": res.text}
