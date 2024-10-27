-- CreateTable
CREATE TABLE `movie_genres` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(16) NOT NULL,

    UNIQUE INDEX `movie_genres_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
