import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';

import connectDB from './config/bd.js';
import cvRoutes from './routes/cvRoutes.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';
const port = 4000;

connectDB(); //подключаемся в bd

const app = express();

//добавляетм cors
app.use(cors({ origin: true, credentials: true }));

// Middleware для автоматического парсинга JSON
app.use(express.json());
// Middleware для парсинга данных формы в формате x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//routs
app.use('/api/cv', cvRoutes);
app.use(notFound);
app.use(errorHandler);

app.get('/', (req, res) => {
	res.send('API is running....');
});
app.listen(port, () => {
	console.log(`Server is running. ${port} port!`);
});
