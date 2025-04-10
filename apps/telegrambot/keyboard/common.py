from aiogram.types import ReplyKeyboardMarkup, KeyboardButton

def get_card_type_keyboard():
    return ReplyKeyboardMarkup(
        keyboard=[
            [KeyboardButton(text="Visa USD"), KeyboardButton(text="MasterCard EUR")]
        ],
        resize_keyboard=True
    )

def get_payment_keyboard():
    return ReplyKeyboardMarkup(
        keyboard=[
            [KeyboardButton(text="Balance"), KeyboardButton(text="Crypto")]
        ],
        resize_keyboard=True
    )
