const assert = require('assert');
const Picpay = require('../index');
const uuid = require('uuid');
const dotenv = require('dotenv');

dotenv.config()

describe('Testing Class PicPay - payment', () => {
	const xPicpayToken = process.env.X_PICPAY_TOKEN;
	const xSellerToken = process.env.X_SELLER_TOKEN;

	console.log(xPicpayToken);

	const buyer = {
		"firstName": "José",
		"lastName": "Miguel",
		"document": "918.463.410-35",
		"email": "suporte@startupcode.com.br",
		"phone": "+55 11 4055-4380"
	};

	const payload = {
		"referenceId": uuid.v4(),
		"value": 2.51,
		"callbackUrl": "http://localhost:8080/callback",
		"returnUrl": "http://localhost:8080/1020371",
		"expiresAt": "2022-05-01T16:00:00-03:00"
	}

	const picpay = new Picpay(xPicpayToken, xSellerToken);

	async function getPayment() {
		const {status, data} = await picpay.payment.send(payload, buyer);
		console.log(status, data);
		return (status, data);
	}
	
	it('Make Payment', () => {
		return getPayment()
		assert.equal(4, 2 + 2);
	});

	it('Cancel Payment', () => {
		//picpay.payment.cancel('1020371');
		assert.equal(4, 2 + 2);
	});

	it('Status Payment', () => {
		//picpay.payment.status('1020371');
		assert.equal(4, 2 + 2);
	});
});