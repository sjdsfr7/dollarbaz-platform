from aiogram import Router
from aiogram.types import Message
from aiogram.filters import Command

router = Router()

@router.message(Command("start"))
async def command_start_handler(message: Message) -> None:
    await message.answer("Hi! Welcome to DollarBaz.")
