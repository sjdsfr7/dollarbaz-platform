// apps/web/src/lib/wallets/sendUSDT.ts
import TronWeb from 'tronweb';

const tronWeb = new TronWeb({
  fullHost: 'https://api.trongrid.io',
  privateKey: process.env.TRON_PRIVATE_KEY!,
});

const USDT_CONTRACT = 'TXLAQ63Xg1NAzckPwKHvzw7CSEmLMEqcdj'; // Official TRC20 USDT

export async function sendUSDT(toAddress: string, amount: number) {
  const contract = await tronWeb.contract().at(USDT_CONTRACT);
  const tx = await contract.transfer(toAddress, tronWeb.toSun(amount)).send();
  return tx;
}
