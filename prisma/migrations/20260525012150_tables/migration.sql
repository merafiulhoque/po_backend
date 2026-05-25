/*
  Warnings:

  - You are about to drop the column `dob` on the `substitute` table. All the data in the column will be lost.
  - Added the required column `age` to the `substitute` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `substitute` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "substitute" DROP COLUMN "dob",
ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
