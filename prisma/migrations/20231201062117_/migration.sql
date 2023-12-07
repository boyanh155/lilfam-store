/*
  Warnings:

  - You are about to drop the column `excutive` on the `Product` table. All the data in the column will be lost.
  - Added the required column `executive` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Product` DROP COLUMN `excutive`,
    ADD COLUMN `executive` VARCHAR(191) NOT NULL;
