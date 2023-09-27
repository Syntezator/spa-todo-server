import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

const { NODE_ENV } = process.env;
if (NODE_ENV === 'dev') dotenv.config();

const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS } = process.env;

/**
 * @function initMailer
 * @typedef {import('node:events').EventEmitter} Bus
 * @typedef {import('./types').Mailer} Mailer
 * @param {Bus} bus 
 * @returns {Mailer}
 */

export const initMailer = (bus) => {
	const options = {
		host: MAIL_HOST,
		port: Number.parseInt(`${MAIL_PORT}`, 10),
		secure: true,
		auth: {
			user: MAIL_USER,
			pass: MAIL_PASS,
		},
		tls: {
			rejectUnauthorized: false,
		},
	}

	const mailer = nodemailer.createTransport(options);

	bus.on('sendEmail', async (emailOptions) => {
		const sendEmail = setInterval(async function() {
			try {
				await mailer.sendMail({ from: MAIL_USER, ...emailOptions });
				console.log('success');
				clearInterval(sendEmail);
			} catch (error) {
				/** @type {*} */
				const { message } = error;
				console.error(`Error sending email: ${message}`)
			}
		}, 3000);
		
	});

	return {
		metadata: { events: { on: ['sendEmail'] } },
	}
};
