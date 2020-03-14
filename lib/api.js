const axios = require('axios');

class Api {
    constructor(picpayToken, sellerToken) {

        this.picpayToken = picpayToken;
        this.sellerToken = sellerToken;

        this.instance = axios.create({
            baseURL: this.getBaseUrl(),
            headers: {
                'accept-encoding': 'gzip,deflate',
                'Content-Type': 'application/json',
                'x-picpay-token': this.picpayToken
            }
        });
    }

    getBaseUrl() {
        return 'https://appws.picpay.com/ecommerce/public';
    }

    async post(uri, body) {

        try {
            const {status, data} = await this.instance.post(uri, body);
            return {status, data};
        } catch (err) {
            const {status, data} = err.response;
            return {status, data};
        }
    }

    async get(uri, params) {
        try{
            const {status, data} = await this.instance.get(uri, params);
            return {status, data};
        }catch(err){
            const {status, data} = err.response;
            return {status, data};
        }
    }
}

module.exports = Api;