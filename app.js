import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { router } from './src/routes/user.router.js';


const app  = express();

dotenv.config();
const PORT = process.env.PORT || 8080;

app.use( express.static('public') );
app.use( cors() );
app.use( express.json() );

app.use('/api/usuarios', router);


app.listen(PORT, () => {
    console.log(`Server running in port http://localhost:${ PORT }`)
});