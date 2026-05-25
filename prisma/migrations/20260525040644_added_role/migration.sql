/*
  Warnings:

  - Added the required column `role` to the `gds` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "gds" ADD COLUMN     "role" "Role" NOT NULL;
