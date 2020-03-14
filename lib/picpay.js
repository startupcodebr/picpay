const Payment = require('./payment');

class Picpay {
    
    constructor(picpayToken, sellerToken) {

        this.picpayToken = picpayToken;
        this.sellerToken = sellerToken;

        this._payment = new Payment(this.picpayToken, this.sellerToken);
    }

    get payment() {
        return this._payment;
    }

}

module.exports = Picpay;