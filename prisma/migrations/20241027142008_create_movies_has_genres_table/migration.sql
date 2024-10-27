-- CreateTable
CREATE TABLE `movie_has_genre` (
    `movie_id` INTEGER NOT NULL,
    `genre_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `movie_has_genre_movie_id_genre_id_key`(`movie_id`, `genre_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `movie_has_genre` ADD CONSTRAINT `movie_has_genre_movie_id_fkey` FOREIGN KEY (`movie_id`) REFERENCES `movies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `movie_has_genre` ADD CONSTRAINT `movie_has_genre_genre_id_fkey` FOREIGN KEY (`genre_id`) REFERENCES `movie_genres`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
