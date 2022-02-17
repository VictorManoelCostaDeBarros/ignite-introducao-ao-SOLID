import express from "express";
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

import { usersRoutes } from "./routes/users.routes";

const app = express();
const router = express.Router();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

app.use("/users", usersRoutes);

export { app };
