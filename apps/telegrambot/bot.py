import asyncio
import logging
import os

from aiogram import Bot, Dispatcher
from aiogram.enums import ParseMode
from aiogram.fsm.storage.memory import MemoryStorage

from .routers import base, virtualcards, starsexchange

TOKEN = os.getenv("BOT_TOKEN")

async def main():
    logging.basicConfig(level=logging.INFO)

    bot = Bot(token=TOKEN, parse_mode=ParseMode.HTML)
    dp = Dispatcher(storage=MemoryStorage())

    # Register routers
    dp.include_router(base.router)
    dp.include_router(virtualcards.router)
    dp.include_router(starsexchange.router)

    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())
