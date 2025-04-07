import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import { handleExchange } from './handlers/exchange';
import { handleBuyStars } from './handlers/buystars';
import { handleAdmin } from './handlers/admin';
dotenv.config();

export const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN!);

bot.start((ctx) => {
  ctx.reply('💸 Welcome to Dollarbaz — Telegram Fintech Engine\n\nChoose:', {
    reply_markup: {
      inline_keyboard: [
        [{ text: '📤 Exchange Stars', callback_data: 'exchange' }],
        [{ text: '💎 Buy Stars', callback_data: 'buyStars' }],
        [{ text: '🛍️ Buy Services', callback_data: 'services' }],
      ],
    },
  });
});

bot.action('exchange', handleExchange);
bot.action('buyStars', handleBuyStars);
bot.command('admin', handleAdmin);
