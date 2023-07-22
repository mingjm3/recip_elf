const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async () => {
    console.log('hello world');
    const user = await prisma.user.findFirst({});
    console.log({ user} );
})();