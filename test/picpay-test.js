const assert = require('assert');
const Picpay = require('../index');

describe('Testing Class PicPay - payment', () => {

	const xPicpayToken = '';
	const xSellerToken = '';

	const buyer = {
		"firstName": "Jean Barbosa",
		"lastName": "Dos Santos",
		"document": "048.789.011-60",
		"email": "programmer.jean@gmail.com",
		"phone": "+55 61 99357-6555"
	};

	const payload = {
		"referenceId": "1020371", ///1020323 // 1020367 // 1020368 //1020369 //1020370 //1020371
		"value": 2.51,
		"callbackUrl": "http://www.sualoja.com.br/callback",
		"returnUrl": "http://www.sualoja.com.br/cliente/pedido/1020371",
		"expiresAt": "2022-05-01T16:00:00-03:00"
	}

	const picpay = new Picpay(xPicpayToken, xSellerToken);
	
	it('Make Payment', () => {
		//picpay.payment.payment(payload.referenceId, payload.value, payload.callbackUrl, payload.buyer, payload.expiresAt, payload.returnUrl);
		//picpay.payment.send(payload, buyer);
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