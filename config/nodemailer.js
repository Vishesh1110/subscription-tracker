import nodemailer from 'nodemailer'
import { EMAIL_PASSWORD } from './env.js'

export const accountEmail = 'visheshvividh@gmail.com'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'visheshvividh@gmail.com',
        pass: EMAIL_PASSWORD
    }
})

export default transporter