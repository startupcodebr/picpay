class Buyer {
    constructor(firstName, lastName, document, email, phone){
        
        //Primeiro nome do comprador.
        this.firstName = firstName;

        //Sobrenome do comprador.
        this.lastName = lastName;

        //CPF do comprador no formato 123.456.789-10
        this.document = document;

        //E-mail do comprador.
        this.email = email;

        //Numero de telefone do comprador no formato +55 27 12345-6789
        this.phone = phone;
    }
    
}

module.exports = Buyer;