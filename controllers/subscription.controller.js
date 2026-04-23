import Subscription from "../models/subscription.model.js"
import { workflowClient } from '../config/upstash.js'
import { SERVER_URL } from '../config/env.js'

export const createSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id,
        })

        const { workflowRunId } = await workflowClient.trigger({
            url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
            body: {
                subscriptionId: subscription.id,
            },
            headers: {
                'content-type': 'application/json'
            },
            retries: 0
        })

        res.status(201).json({ success: true, data: { subscription, workflowRunId } })
    } catch (error) {
        next(error)
    }
}

export const getUserSubscription = async (req, res, next) => {
    try {
        if (req.user.id !== req.params.id) {
            const error = new Error('You are not the owner of this account')
            error.status = 401
            throw error
        }
        const subscriptions = await Subscription.find({user: req.params.id})
        res.status(200).json({
            success: true,
            data: subscriptions
        })

        // if (!subscription) {
        //     return res.status(404).json({ success: false, message: 'Subscription not found' })
        // }

        // res.status(200).json({ success: true, data: subscription })
    } catch (error) {
        next(error)
    }
}

export const cancelSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.findById(req.params.id)

        if (!subscription) {
            return res.status(404).json({ success: false, message: 'Subscription not found' })
        }

        if (subscription.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({ success: false, message: 'You are not the owner of this subscription' })
        }

        subscription.status = 'cancelled'
        await subscription.save()

        res.status(200).json({ success: true, data: subscription })
    } catch (error) {
        next(error)
    }
}

export const deleteSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.findById(req.params.id)

        if (!subscription) {
            return res.status(404).json({ success: false, message: 'Subscription not found' })
        }

        if (subscription.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({ success: false, message: 'You are not the owner of this subscription' })
        }

        await subscription.deleteOne()

        res.status(200).json({ success: true, message: 'Subscription deleted successfully' })
    } catch (error) {
        next(error)
    }
}  

export const getUpcomingRenewals = async (req, res, next) => {
    try {
        const upcomingRenewals = await Subscription.find({ 
            nextBillingDate: { $gte: new Date(), $lte: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) },
            status: 'active'
        }).populate('user', 'name email')

        res.status(200).json({ success: true, data: upcomingRenewals })
    } catch (error) {
        next(error)
    }
}

export const getSubscriptionDetails = async (req, res, next) => {
    try {
        const subscription = await Subscription.findById(req.params.id).populate('user', 'name email')

        if (!subscription) {
            return res.status(404).json({ success: false, message: 'Subscription not found' })
        }

        if (subscription.user._id.toString() !== req.user._id.toString()) {
            return res.status(401).json({ success: false, message: 'You are not the owner of this subscription' })
        }

        res.status(200).json({ success: true, data: subscription })
    } catch (error) {
        next(error)
    }
}

export const allSubscriptionsCost = async (req, res, next) => {
    try {
        const subscription = await Subscription.find({user: req.params.id})

        if (!subscription) {
            return res.status(404).json({ success: false, message: 'Subscription not found' })
        }

        if (subscription[0].user.toString() !== req.user._id.toString()) {
            return res.status(401).json({ success: false, message: 'You are not the owner of this subscription' })
        }

        const totalCost = subscription.reduce((sum, sub) => {
            return sum + sub.price 
        }, 0)

        res.status(200).json({ success: true, data: { totalCost } })
    } catch (error) {
        next(error)
    }
}