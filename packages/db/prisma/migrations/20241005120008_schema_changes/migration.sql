/*
  Warnings:

  - You are about to alter the column `number` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(10)`.
  - You are about to drop the `OnRampTransactions` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "TransactionStatus" AS ENUM ('Success', 'Failure', 'Processing');

-- DropForeignKey
ALTER TABLE "OnRampTransactions" DROP CONSTRAINT "OnRampTransactions_userId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "number" SET DATA TYPE VARCHAR(10);

-- DropTable
DROP TABLE "OnRampTransactions";

-- DropEnum
DROP TYPE "OnRampStatus";

-- CreateTable
CREATE TABLE "Transactions" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "toUserId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "provider" TEXT NOT NULL,
    "receiver" TEXT NOT NULL,
    "status" "TransactionStatus" NOT NULL,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Transactions_token_key" ON "Transactions"("token");

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
