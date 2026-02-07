import { Router } from 'express'

const subscriptionRouter = Router()

subscriptionRouter.get('/', () => res.send({ title: 'GET all subscriptions' }))

subscriptionRouter.get('/:id', () => res.send({ title: 'GET subscription details' }))

subscriptionRouter.post('/', () => res.send({ title: 'CREATE subscription' }))

subscriptionRouter.put('/:id', () => res.send({ title: 'UPDATE subscription' }))

subscriptionRouter.delete('/:id', () => res.send({ title: 'DELETE subscription' }))

subscriptionRouter.get('/users/:id', () => res.send({ title: 'GET all users subscription' }))

subscriptionRouter.put('/:id/cancel', () => res.send({ title: 'CANCEL subscription' }))

subscriptionRouter.get('/upcoming-renewals', () => res.send({ title: 'GET upcoming renewals' }))

export default subscriptionRouter