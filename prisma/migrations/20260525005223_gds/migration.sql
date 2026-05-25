-- CreateEnum
CREATE TYPE "Role" AS ENUM ('GDS_BPM', 'GDS_ABPM', 'GDS_DAKSEVAK');

-- CreateTable
CREATE TABLE "gds" (
    "id" SERIAL NOT NULL,
    "empId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "office" TEXT NOT NULL,
    "acOffice" TEXT NOT NULL,
    "salaryAc" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isPremium" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "gds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "substitute" (
    "id" SERIAL NOT NULL,
    "subId" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "subAc" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "subOf" TEXT NOT NULL,

    CONSTRAINT "substitute_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "gds_empId_key" ON "gds"("empId");

-- CreateIndex
CREATE UNIQUE INDEX "substitute_subId_key" ON "substitute"("subId");

-- CreateIndex
CREATE UNIQUE INDEX "substitute_subOf_key" ON "substitute"("subOf");

-- AddForeignKey
ALTER TABLE "substitute" ADD CONSTRAINT "substitute_subOf_fkey" FOREIGN KEY ("subOf") REFERENCES "gds"("empId") ON DELETE RESTRICT ON UPDATE CASCADE;
