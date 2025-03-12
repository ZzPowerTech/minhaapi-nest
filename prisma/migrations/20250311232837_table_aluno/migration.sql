-- CreateTable
CREATE TABLE "animal" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" DOUBLE PRECISION NOT NULL,
    "sexo" TEXT NOT NULL,
    "raca" TEXT NOT NULL,
    "porte" DOUBLE PRECISION NOT NULL,
    "temperamento" TEXT NOT NULL,
    "historico_saude" TEXT[],
    "necessidades_especiais" TEXT[],

    CONSTRAINT "animal_pkey" PRIMARY KEY ("id")
);
