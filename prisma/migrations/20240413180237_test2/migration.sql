/*
  Warnings:

  - You are about to drop the column `userId` on the `userPreferences` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userPreferencesId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "userPreferences" DROP CONSTRAINT "userPreferences_userId_fkey";

-- DropIndex
DROP INDEX "userPreferences_userId_key";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "userPreferencesId" TEXT;

-- AlterTable
ALTER TABLE "userPreferences" DROP COLUMN "userId";

-- CreateIndex
CREATE UNIQUE INDEX "User_userPreferencesId_key" ON "User"("userPreferencesId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userPreferencesId_fkey" FOREIGN KEY ("userPreferencesId") REFERENCES "userPreferences"("id") ON DELETE SET NULL ON UPDATE CASCADE;
