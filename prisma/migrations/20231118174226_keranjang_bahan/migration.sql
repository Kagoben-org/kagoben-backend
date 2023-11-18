/*
  Warnings:

  - You are about to alter the column `tanggal` on the `keranjang` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `keranjang` MODIFY `tanggal` DATETIME NOT NULL;

-- CreateTable
CREATE TABLE `bahan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `image` VARCHAR(250) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BahanOnKeranjang` (
    `keranjang_id` INTEGER NOT NULL,
    `bahan_id` INTEGER NOT NULL,

    PRIMARY KEY (`keranjang_id`, `bahan_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BahanOnKeranjang` ADD CONSTRAINT `BahanOnKeranjang_keranjang_id_fkey` FOREIGN KEY (`keranjang_id`) REFERENCES `keranjang`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BahanOnKeranjang` ADD CONSTRAINT `BahanOnKeranjang_bahan_id_fkey` FOREIGN KEY (`bahan_id`) REFERENCES `bahan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
