import { Router } from 'express'
import authorize from '../middlewares/auth.middleware.js'
import { createSubscription, getUserSubscription, cancelSubscription, deleteSubscription, getUpcomingRenewals, getSubscriptionDetails } from '../controllers/subscription.controller.js'
import { get } from 'mongoose'

const subscriptionRouter = Router()

subscriptionRouter.get('/', (req, res) => res.send({ title: 'GET all subscriptions' }))

subscriptionRouter.get('/upcoming-renewals', authorize, getUpcomingRenewals)

subscriptionRouter.get('/:id', authorize, getSubscriptionDetails)

subscriptionRouter.post('/', authorize, createSubscription)

subscriptionRouter.put('/:id', () => res.send({ title: 'UPDATE subscription' }))

subscriptionRouter.delete('/:id', authorize, deleteSubscription)

subscriptionRouter.get('/users/:id', authorize, getUserSubscription)

subscriptionRouter.put('/:id/cancel', authorize, cancelSubscription)

export default subscriptionRouter