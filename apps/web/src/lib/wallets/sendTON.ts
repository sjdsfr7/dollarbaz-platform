import TonWeb from 'tonweb';

const { mnemonicToWalletKey } = TonWeb.utils.keyPair;
const { Wallets } = TonWeb.wallet;

const tonweb = new TonWeb(
  new TonWeb.HttpProvider('https://toncenter.com/api/v2/jsonRPC', {
    apiKey: process.env.TONCENTER_API!,
  }),
);

export async function sendTON(
  toAddress: string,
  amount: number,
  comment: string,
) {
  const mnemonic = process.env.TON_MNEMONIC!.split(' ');
  const walletKey = await TonWeb.utils.mnemonicToWalletKey(mnemonic);
  const wallet = tonweb.wallet.create({
    publicKey: walletKey.publicKey,
    wc: 0,
    walletType: 'v4R2',
  });

  await wallet.open();

  const seqno = await wallet.methods.seqno().call();

  const transfer = wallet.methods.transfer({
    secretKey: walletKey.secretKey,
    toAddress,
    amount: TonWeb.utils.toNano(amount.toString()), // 1 TON = 10^9 nanoTON
    seqno,
    payload: comment,
    sendMode: 3,
  });

  return await transfer.send();
}
