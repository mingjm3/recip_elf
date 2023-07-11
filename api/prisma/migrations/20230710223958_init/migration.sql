-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "date" TIMESTAMP(3),

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DietaryRestriction" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "DietaryRestriction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_IngredientToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DietaryRestrictionToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "DietaryRestriction_name_key" ON "DietaryRestriction"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_IngredientToUser_AB_unique" ON "_IngredientToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_IngredientToUser_B_index" ON "_IngredientToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DietaryRestrictionToUser_AB_unique" ON "_DietaryRestrictionToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_DietaryRestrictionToUser_B_index" ON "_DietaryRestrictionToUser"("B");

-- AddForeignKey
ALTER TABLE "_IngredientToUser" ADD CONSTRAINT "_IngredientToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientToUser" ADD CONSTRAINT "_IngredientToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DietaryRestrictionToUser" ADD CONSTRAINT "_DietaryRestrictionToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "DietaryRestriction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DietaryRestrictionToUser" ADD CONSTRAINT "_DietaryRestrictionToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
