/*
  Warnings:

  - Added the required column `updatedAt` to the `tb_categoria` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tb_categoria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_tb_categoria" ("id", "nome", "status") SELECT "id", "nome", "status" FROM "tb_categoria";
DROP TABLE "tb_categoria";
ALTER TABLE "new_tb_categoria" RENAME TO "tb_categoria";
CREATE UNIQUE INDEX "tb_categoria_nome_key" ON "tb_categoria"("nome");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
