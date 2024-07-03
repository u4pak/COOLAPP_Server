"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
const PORT = 3000;
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield res.send('COOLAPP Backend v1.0.0-alpha - Created by shady - Found a bug, vulnurability, or exploit? Contact me on Discord: bandsnracks');
}));
app.get('/json/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /*
    await res.send([
        {
            "name": "FIELD TRIP",
            "album": "VULTURES 2",
            "artist": "KANYE WEST",
            "id": 1001,
            "isFeatured": true,
            "imagePath": "Vultures2",
            "mediaPath": "field trip 12.21."
        },
        {
            "name": "BIGGER",
            "album": "THE PARTY NEVER ENDS",
            "artist": "JUICE WRLD",
            "id": 1002,
            "isFeatured": false,
            "imagePath": "TPNE",
            "mediaPath": "Juice_Wrld_-_bigger_v1.5_margate167"
        },
    ])
    */
    const tracks = yield prisma.track.findMany();
    yield res.send(tracks);
    console.log("[COOLAPP_Server] A user requested /json/");
}));
app.get('/createtrack/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const track = yield prisma.track.create({
        data: {
            name: 'Test Track',
            album: 'The COOLAPP Archives',
            artist: 'shady',
            imagePath: '21',
            mediaPath: 'Louis-Bags-x-2-22-22-x-REFThe-Ga'
        },
    });
    yield res.send("Created track entry!");
}));
app.listen(PORT, () => {
    console.log('[[ COOLAPP_SERVER - v1.0.0-alpha ]]\n\nServer has started on port 3000!\n\nhttp://localhost:' + PORT);
});
