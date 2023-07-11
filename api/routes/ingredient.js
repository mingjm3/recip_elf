const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const { isAuthed } = require('../lib/auth/jwt');

const prisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL
      }
    }
});

router.use(isAuthed)

router.get('/', async (req, res) => {
    try {
        const ingredients = await prisma.ingredient.findMany();
        res.json(ingredients);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { name, date } = req.body;
        const formattedDate = new Date(date);

        const createdIngredient = await prisma.ingredient.create({
            data: {
                name,
                date: formattedDate,
            },
        });
        res.json(createdIngredient);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
