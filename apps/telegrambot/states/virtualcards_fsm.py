from aiogram.fsm.state import State, StatesGroup

class VirtualCardOrder(StatesGroup):
    choosing_card_type = State()       # e.g., Visa, MasterCard, USD, EUR
    entering_amount = State()          # input amount
    selecting_payment_method = State() # from balance / crypto / external
    confirming_order = State()         # show summary before sending
