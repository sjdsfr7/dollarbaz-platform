from aiogram import Router, F
from aiogram.types import Message, ReplyKeyboardRemove
from aiogram.fsm.context import FSMContext

from apps.telegrambot.states.starsexchange_fsm import StarsExchange
from telegrambot.services.stars import submit_stars_exchange

router = Router()

@router.message(F.text.lower() == "/stars")
async def start_stars_flow(message: Message, state: FSMContext):
    await state.set_state(StarsExchange.entering_channel)
    await message.answer("Enter your Telegram channel username (e.g., @yourchannel):")

@router.message(StarsExchange.entering_channel)
async def handle_channel(message: Message, state: FSMContext):
    if not message.text.startswith("@"):
        return await message.answer("Please enter a valid @channel name.")
    await state.update_data(channel=message.text)
    await state.set_state(StarsExchange.entering_followers)
    await message.answer("How many followers does the channel have?")

@router.message(StarsExchange.entering_followers)
async def handle_followers(message: Message, state: FSMContext):
    if not message.text.isdigit():
        return await message.answer("Please enter a number.")
    await state.update_data(followers=int(message.text))
    await state.set_state(StarsExchange.entering_offer)
    await message.answer("Describe your offer for exchange:")

@router.message(StarsExchange.entering_offer)
async def handle_offer(message: Message, state: FSMContext):
    await state.update_data(offer=message.text)
    data = await state.get_data()

    summary = (
        f"📨 Exchange Summary:\n"
        f"Channel: {data['channel']}\n"
        f"Followers: {data['followers']}\n"
        f"Offer: {data['offer']}\n\n"
        "Type 'confirm' to submit or 'cancel' to discard."
    )
    await state.set_state(StarsExchange.confirming_exchange)
    await message.answer(summary, reply_markup=ReplyKeyboardRemove())

@router.message(StarsExchange.confirming_exchange, F.text.lower() == "confirm")
async def confirm_stars(message: Message, state: FSMContext):
    data = await state.get_data()
    await message.answer("Submitting your request...")

    # Call backend API
    result = await submit_stars_exchange(data)

    if result.success:
        await message.answer("✅ Your stars exchange request has been submitted.")
    else:
        await message.answer(f"❌ Failed to submit: {result.message}")

    await state.clear()

@router.message(StarsExchange.confirming_exchange, F.text.lower() == "cancel")
async def cancel_stars(message: Message, state: FSMContext):
    await message.answer("❌ Exchange request cancelled.", reply_markup=ReplyKeyboardRemove())
    await state.clear()
