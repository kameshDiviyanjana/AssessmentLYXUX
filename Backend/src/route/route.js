import express from 'express';
import todo from './todoroute.js'

const router = express.Router();

router.use('/to-do',todo)


export default router