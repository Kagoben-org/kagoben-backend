-- CreateTable
CREATE TABLE `member` (
    `email` VARCHAR(100) NOT NULL,
    `username` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `usia` VARCHAR(100) NOT NULL,
    `no_telepon` VARCHAR(13) NOT NULL,
    `token` VARCHAR(100) NULL,

    PRIMARY KEY (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
