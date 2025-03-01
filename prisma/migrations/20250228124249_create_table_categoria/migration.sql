-- CreateTable
CREATE TABLE "tb_categoria" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "tb_categoria_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_categoria_nome_key" ON "tb_categoria"("nome");
