import 'dotenv/config';
import path from 'path';
import {fileURLToPath} from 'url';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import companyRoutes from './Routes/ManagingCompany.js';

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendPath = path.resolve(__dirname, '../frontend/dist');
app.use(express.static(frontendPath));

app.use(companyRoutes);
app.get(/.*/, (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/dist/index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));