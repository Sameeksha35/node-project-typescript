import express from "express";
import bodyParser from 'body-parser';
// const express = require('express');

import todosRoutes from './routes/todos';

const app = express();

app.use(bodyParser.json());
app.use(todosRoutes);


app.listen({port: 3000});