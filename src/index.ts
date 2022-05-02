import express from 'express';
import 'dotenv/config'; // import dotenv and set environment variables

const app = express();

// import the routing files
import Routes from './route/routes';
Routes(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
        console.log(`Api running on port ${port}`);
    }
);