import express from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express();
const PORT:Number=3000;

app.get('/', async(req, res) => {
    await res.send('COOLAPP Backend v1.0.0-alpha - Created by shady - Found a bug, vulnurability, or exploit? Contact me on Discord: bandsnracks');
})

app.get('/json/', async(req, res) => {
    const tracks = await prisma.track.findMany()
    await res.send(tracks)
    console.log("[COOLAPP_Server] A user requested /json/")
})

app.get('/createtrack/', async(req, res) => {
    const track = await prisma.track.create({
        data: {
            name: 'Test Track',
            album: 'The COOLAPP Archives',
            artist: 'shady',
            imagePath: '21',
            mediaPath: 'Louis-Bags-x-2-22-22-x-REFThe-Ga'
        },
    })

    await res.send("Created track entry!")
})

app.listen(PORT, () => {
    console.log('[[ COOLAPP_SERVER - v1.0.0-alpha ]]\n\nServer has started on port 3000!\n\nhttp://localhost:' + PORT)
})
