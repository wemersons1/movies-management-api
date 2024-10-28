/*
  Warnings:

  - Made the column `name` on table `roles` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `movies` MODIFY `poster_path` VARCHAR(64) NULL;

-- AlterTable
ALTER TABLE `roles` MODIFY `name` VARCHAR(10) NOT NULL;
