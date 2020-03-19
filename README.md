<h1 align="center">
    <img alt="picpay" src="https://centraldesuporte.levelupgames.com.br/Media/61486946-8dd4-44fc-adbb-5f62eb6d5588.png" width="200px" />
</h1>

<h3 align="center">
  Picpay - node
</h3>

<blockquote align="center">“PicPay é o app que faz com que seus pagamentos sejam mais simples, rápidos e seguros. Receba e envie dinheiro para outras pessoas, pague contas, estabelecimentos pelo celular.”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafio-01?color=%2304D361">

  <a href="https://picpay.com.br">
    <img alt="Made by Picpay" src="https://img.shields.io/badge/made%20by-picpay-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/jeanbarbosa/picpay/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/jeanbarbosa/picpay?style=social">
  </a>
</p>

<p align="center">
  <a href="#Picpay">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#rocket-technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">Licença</a>
</p>

# Picpay
Node package API de E-Commerce do PicPay

## :rocket: Technologies

This project was developed with the following technologies:

- [Axios](https://github.com/axios/axios)

## :information_source: How To Use

```bash
# Using yarn:
$ yarn add picpay

# Install dependencies
$ yarn install
```

## Make Payment:

```bash

  const Picpay = require('./lib/picpay');

  const buyer = {
    "firstName": "Jean Barbosa",
    "lastName": "Dos Santos",
    "document": "000.000.000-00",
    "email": "exemple@gmail.com",
    "phone": "+55 61 99999-9999"
  };

  const payload = {
    "referenceId": "1020380",
    "value": 2.51,
    "callbackUrl": "http://www.sualoja.com.br/callback",
    "returnUrl": "http://www.sualoja.com.br/cliente/pedido/1020380",
    "expiresAt": "2022-05-01T16:00:00-03:00"
  }

  const picpay = new Picpay('YOUR_PICPAY_TOKEN', 'YOUR_SALLER_TOKEN');
  const {status, data} = await picpay.payment.send(payload, buyer);

```

## Status Payment:

```bash

  picpay.payment.status('1020380');

```

## Cancel Payment:

```bash

  picpay.payment.cancel('1020380');

```

## :memo: License
This project is under the MIT license. See the [LICENSE](https://github.com/jeanbarbosa/picpay/blob/master/LICENSE) for more information.
