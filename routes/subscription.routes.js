import { Router } from 'express'
import authorize from '../middlewares/auth.middleware.js'
import { createSubscription, getUserSubscription, cancelSubscription } from '../controllers/subscription.controller.js'

const subscriptionRouter = Router()

subscriptionRouter.get('/', () => res.send({ title: 'GET all subscriptions' }))

subscriptionRouter.get('/:id', () => res.send({ title: 'GET subscription details' }))

subscriptionRouter.post('/', authorize, createSubscription)

subscriptionRouter.put('/:id', () => res.send({ title: 'UPDATE subscription' }))

subscriptionRouter.delete('/:id', () => res.send({ title: 'DELETE subscription' }))

subscriptionRouter.get('/users/:id', authorize, getUserSubscription)

subscriptionRouter.put('/:id/cancel', authorize, cancelSubscription)

subscriptionRouter.get('/upcoming-renewals', () => res.send({ title: 'GET upcoming renewals' }))

export default subscriptionRouter