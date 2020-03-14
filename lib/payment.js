const api = require('./api');

class Payment {

    constructor(picpayToken, sellerToken) {
        this.picpayToken = picpayToken;
        this.sellerToken = sellerToken;

        this._instance = new api(this.picpayToken, this.sellerToken);
    }

    /**
     * Solicitar o pagamento de um pedido no PicPay
     * 
     * @param {string} referenceId Identificador único do seu pedido.
     * Este campo precisa ter um valor diferente a cada requisição.
     * Este também será o ID exibido ao cliente no momento do pagamento
     * e também será o ID que sua loja utilizará para ver status de pagamento,
     * solicitar cancelamento, etc
     * 
     * @param {number} value Valor do pagamento em reais.
     * 
     * @param { string } callbackUrl Url para o qual o PicPay irá retornar
     * a situação do pagamento.
     * 
     * @param {object} buyer Objeto contendo as informações do comprador.
     * 
     * @param { Date } expiresAt Quando a ordem de pagamento irá expirar.
     * Formato ISO 8601. Exemplo:
     *  2022-05-01T16:00:00-03:00 (significa que expirará em 01/05/2022 às 16h 
     * no fuso horário -03:00)
     *
     * @param { string } returnUrl Url para a qual o cliente será redirecionado
     * após o pagamento.
     */
    async makePayment(referenceId, value, callbackUrl, buyer, expiresAt, returnUrl) {

        const uri = '/payments';

        const payload = {
            referenceId,
            value,
            callbackUrl,
            buyer,
            expiresAt,
            returnUrl
        }

        const response = await this._instance.post(uri, payload);

        return response;
    }

    /**
     * Solicitar o pagamento de um pedido no PicPay
     * 
     * @param {object} payload
     * @param {object} buyer
     */
    async send(payload, buyer) {

        const uri = '/payments';

        const response = await this._instance.post(uri, {
            ...payload,
            buyer
        });

        return response;
    }

    /**
     * cancelamento/estorno de um pedido
     * 
     * @param {string} referenceId Identificador da transação
     * 
     * @param {string} authorizationId ID da autorização que seu e-commerce
     * recebeu na notificação de pedido pago. Caso o pedido não esteja pago,
     * não é necessário enviar este parâmetro
     */
    async cancel(referenceId, authorizationId = '') {
        const uri = `/payments/${referenceId}/cancellations`;

        const response = await this._instance.post(uri, {
            referenceId,
            authorizationId
        });

        return response;
    }

    /**
     * consultar o status de uma transação.
     * 
     * @param {string} referenceId Identificador da transação
     */
    async status(referenceId) {

        let uri = `/payments/${referenceId}/status`;
        const response = await this._instance.get(uri);
        
        return response;
    }

    /**
     * 
     * @param {string} referenceId Identificador da transação
     * @param {string} authorizationId Identificador único da autorização,
     * caso pago/em análise. Você deve usar esse valor para realizar 
     * estornos em nossa API.
     */
    notification(referenceId, authorizationId) {

    }
}

module.exports = Payment;