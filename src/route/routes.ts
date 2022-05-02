import express from 'express';

/**
 * Routes
 */
import IndexRouter = require('./IndexRoute');

export default function routes(app: express.Application): void {
    // API routes
    app.use('/', IndexRouter);

    app.use('*', (req, res) => { // Handle unknown routes
        res.status(404).json({
            error: true,
            message: 'Route not found'
        });
    });
}