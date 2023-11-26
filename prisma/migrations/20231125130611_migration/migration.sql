/*
  Warnings:

  - You are about to alter the column `tanggal` on the `keranjang` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `keranjang` MODIFY `tanggal` DATETIME NOT NULL;
