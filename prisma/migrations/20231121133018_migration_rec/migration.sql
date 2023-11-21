/*
  Warnings:

  - You are about to alter the column `tanggal` on the `keranjang` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - A unique constraint covering the columns `[name]` on the table `bahan` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `keranjang` MODIFY `tanggal` DATETIME NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `bahan_name_key` ON `bahan`(`name`);