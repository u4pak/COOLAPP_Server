import express from 'express';

const app = express();
const PORT:Number=3000;

app.get('/', (req, res) => {
    res.send('COOLAPP Backend v1.0.0-alpha - Created by shady - Found a bug, vulnurability, or exploit? Contact me on Discord: bandsnracks');
})

app.get('/json/', (req, res) => {
    res.send([
        {
            "name": "FIELD TRIP",
            "album": "VULTURES 2",
            "artist": "KANYE WEST",
            "id": 1001,
            "isFeatured": true,
            "isFavorite": true,
            "imageName": "Vultures2",
            "mediaName": "field trip 12.21."
        },
        {
            "name": "BIGGER",
            "album": "THE PARTY NEVER ENDS",
            "artist": "JUICE WRLD",
            "id": 1002,
            "isFeatured": false,
            "isFavorite": false,
            "imageName": "TPNE",
            "mediaName": "Juice_Wrld_-_bigger_v1.5_margate167"
        },
    ]
    )
})

app.listen(PORT, () => {
    console.log('[[ COOLAPP_SERVER - v1.0.0-alpha ]]\n\nServer has started on port 3000!\n\nhttp://localhost:' + PORT)
})