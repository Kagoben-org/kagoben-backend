/*
  Warnings:

  - You are about to alter the column `tanggal` on the `keranjang` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `usia` on the `members` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(3)`.

*/
-- AlterTable
ALTER TABLE `keranjang` MODIFY `tanggal` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `members` MODIFY `usia` VARCHAR(3) NOT NULL;
