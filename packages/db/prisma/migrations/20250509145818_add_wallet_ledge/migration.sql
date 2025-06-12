-- CreateEnum
CREATE TYPE "CardRequestStatus" AS ENUM ('PENDING', 'REVIEW', 'APPROVED', 'ISSUED', 'FAILED', 'CANCELED');

-- CreateEnum
CREATE TYPE "CardCurrency" AS ENUM ('USD', 'EUR', 'GBP');

-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('USD', 'USDT', 'BTC');

-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('TOPUP', 'ORDER_SERVICE', 'WITHDRAWAL', 'ADJUSTMENT');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StarsExchange" (
    "id" TEXT NOT NULL,
    "telegramId" TEXT NOT NULL,
    "username" TEXT,
    "starsAmount" INTEGER NOT NULL,
    "payoutType" TEXT NOT NULL,
    "payoutInfo" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StarsExchange_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserWallet" (
    "id" TEXT NOT NULL,
    "telegramId" TEXT NOT NULL,
    "username" TEXT,
    "tonAddress" TEXT,
    "usdtAddress" TEXT,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserWallet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VirtualCardRequest" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "cardCurrency" "CardCurrency" NOT NULL,
    "cardType" TEXT,
    "fundingAmount" DECIMAL(10,2) NOT NULL,
    "fundingMethod" TEXT NOT NULL,
    "cardLabel" TEXT,
    "billingAddress" TEXT,
    "postalCode" TEXT,
    "paymentSourceType" TEXT NOT NULL,
    "paymentSource" TEXT NOT NULL,
    "proofOfPaymentUrl" TEXT,
    "isFirstCard" BOOLEAN NOT NULL DEFAULT false,
    "expectedMonthlySpend" DECIMAL(10,2),
    "industryOrUseCase" TEXT,
    "status" "CardRequestStatus" NOT NULL DEFAULT 'PENDING',
    "cardProviderId" TEXT,
    "adminNotes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "VirtualCardRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NotifyLead" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "platform" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NotifyLead_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wallet" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "currency" "Currency" NOT NULL,
    "balance" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "locked" DECIMAL(65,30) NOT NULL DEFAULT 0,

    CONSTRAINT "Wallet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "walletId" TEXT NOT NULL,
    "type" "TransactionType" NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "ref" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "note" TEXT,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "StarsExchange_reference_key" ON "StarsExchange"("reference");

-- CreateIndex
CREATE UNIQUE INDEX "UserWallet_telegramId_key" ON "UserWallet"("telegramId");

-- CreateIndex
CREATE INDEX "VirtualCardRequest_userId_idx" ON "VirtualCardRequest"("userId");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "Wallet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
