from aiogram import Router, F
from aiogram.types import Message, CallbackQuery
from aiogram.fsm.context import FSMContext
from aiogram.types import ReplyKeyboardRemove

from ..states.virtualcards_fsm import VirtualCardOrder
from apps.telegrambot.keyboard.common import get_card_type_keyboard
from apps.telegrambot.services.cards import create_virtual_card

router = Router()

@router.message(F.text.lower() == "/ordercard")
async def start_order(message: Message, state: FSMContext):
    await state.set_state(VirtualCardOrder.choosing_card_type)
    await message.answer(
        "Choose your virtual card type:",
        reply_markup=get_card_type_keyboard()
    )

@router.message(VirtualCardOrder.choosing_card_type)
async def handle_card_type(message: Message, state: FSMContext):
    await state.update_data(card_type=message.text)
    await state.set_state(VirtualCardOrder.entering_amount)
    await message.answer("Enter the amount for the card in USD:")

@router.message(VirtualCardOrder.entering_amount)
async def handle_amount(message: Message, state: FSMContext):
    if not message.text.isdigit():
        return await message.answer("Please enter a valid number.")

    await state.update_data(amount=int(message.text))
    await state.set_state(VirtualCardOrder.selecting_payment_method)
    await message.answer(
        "Select payment method:",
        reply_markup=get_payment_keyboard()
    )

@router.message(VirtualCardOrder.selecting_payment_method)
async def handle_payment_method(message: Message, state: FSMContext):
    await state.update_data(payment_method=message.text)
    data = await state.get_data()

    summary = (
        f"🧾 Order Summary:\n"
        f"Card: {data['card_type']}\n"
        f"Amount: ${data['amount']}\n"
        f"Payment: {data['payment_method']}\n\n"
        "Type 'confirm' to place the order or 'cancel' to abort."
    )
    await state.set_state(VirtualCardOrder.confirming_order)
    await message.answer(summary, reply_markup=ReplyKeyboardRemove())

@router.message(VirtualCardOrder.confirming_order, F.text.lower() == "confirm")
async def confirm_order(message: Message, state: FSMContext):
    data = await state.get_data()
    await message.answer("Processing your order...")

    # Call backend API
    response = await create_virtual_card(data)

    if response.success:
        await message.answer(f"✅ Card created!\nCard ID: {response.card_id}")
    else:
        await message.answer(f"❌ Failed: {response.message}")

    await state.clear()

@router.message(VirtualCardOrder.confirming_order, F.text.lower() == "cancel")
async def cancel_order(message: Message, state: FSMContext):
    await message.answer("❌ Order cancelled.", reply_markup=ReplyKeyboardRemove())
    await state.clear()
