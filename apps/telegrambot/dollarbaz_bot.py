from telegram import Update, ReplyKeyboardMarkup
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

TOKEN = "7676611193:AAEGTMa0mRovWvCxA_2Mcvtb4xvjdLuDtLY"

WELCOME_TEXT = """👋 Welcome to Dollarbazbot!
How we can Help you today?

Use /rates to check current rates.
Use /request to request a payout.
Use /support to contact us.
"""

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(WELCOME_TEXT)

async def rates(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("📊 Current Rates:\n\n1,000 Stars ≈ 1.00 USD\nCommission: 10%\nYou receive 90% of the value in TON/USDT/IRR.")

async def request(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("📝 To request a payout:\n1. Send the amount of Stars to our registered app (COMING SOON)\n2. Send your wallet info (TON, USDT, or IRR)\n3. We'll confirm and send payment!\n\nExample:\n/request 5000 TON WALLET_ADDRESS")

async def support(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("📞 Contact us at @yourusername or email: support@dollarbaz.com")

def main():
    app = ApplicationBuilder().token(TOKEN).build()

    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("rates", rates))
    app.add_handler(CommandHandler("request", request))
    app.add_handler(CommandHandler("support", support))

    print("Bot is running...")
    app.run_polling()

if __name__ == "__main__":
    main()
