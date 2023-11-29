-- CreateTable
CREATE TABLE `member` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(100) NOT NULL,
    `username` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `usia` VARCHAR(3) NOT NULL,
    `no_telepon` VARCHAR(13) NOT NULL,
    `token` VARCHAR(100) NULL,

    UNIQUE INDEX `member_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `keranjang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(100) NOT NULL,
    `tanggal` DATETIME(0) NOT NULL,
    `total` VARCHAR(100) NULL,
    `member_id` INTEGER NOT NULL,

    INDEX `keranjang_member_id_fkey`(`member_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bahan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `image` VARCHAR(250) NOT NULL,

    UNIQUE INDEX `bahan_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BahanOnKeranjang` (
    `keranjang_id` INTEGER NOT NULL,
    `bahan_id` INTEGER NOT NULL,
    `jumlah` INTEGER NOT NULL DEFAULT 1,
    `harga` DECIMAL(65, 30) NOT NULL DEFAULT 0.000000000000000000000000000000,

    INDEX `BahanOnKeranjang_bahan_id_fkey`(`bahan_id`),
    PRIMARY KEY (`keranjang_id`, `bahan_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `keranjang` ADD CONSTRAINT `keranjang_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `member`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BahanOnKeranjang` ADD CONSTRAINT `BahanOnKeranjang_bahan_id_fkey` FOREIGN KEY (`bahan_id`) REFERENCES `bahan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BahanOnKeranjang` ADD CONSTRAINT `BahanOnKeranjang_keranjang_id_fkey` FOREIGN KEY (`keranjang_id`) REFERENCES `keranjang`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
