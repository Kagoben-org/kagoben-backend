/*
  Warnings:

  - You are about to alter the column `tanggal` on the `keranjang` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - A unique constraint covering the columns `[email]` on the table `members` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `keranjang` MODIFY `tanggal` DATETIME NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `members_email_key` ON `members`(`email`);
