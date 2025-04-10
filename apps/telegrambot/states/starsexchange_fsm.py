from aiogram.fsm.state import State, StatesGroup

class StarsExchange(StatesGroup):
    entering_channel = State()       # e.g., @yourchannelname
    entering_followers = State()     # Number of followers
    entering_offer = State()         # e.g., "Looking to exchange with XYZ"
    confirming_exchange = State()    # Summary confirmation
