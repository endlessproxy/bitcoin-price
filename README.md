# Backend: **Crypto API** usando **Node.js** e **TypeScript**

## Introdução
Este projeto é uma API Rest que usa Node.js e TypeScript para fornecer informações de criptomoedas utilizando a API pública do CoinCap. A API permite obter uma lista de criptomoedas disponiveis e detalhes de uma moeda selecionada.

## Funcionalidades
- **Rota `/crypto`**: Retorna uma lista de todas as criptomoedas disponíveis.
- **Rota `/crypto/:name`**: Retorna informações detalhadas sobre a criptomoeda escolhida, incluindo o nome, ticker e o preço em USD.

![image](https://github.com/user-attachments/assets/e128e964-f663-4def-b5d3-c088c9fc8a59)

![image](https://github.com/user-attachments/assets/69e8f778-7d6f-42a9-8052-7ae6906a0029)


## Pré-requisitos
1. Node.js instalado no seu sistema.

```sh
## Instalação
1. Clone o repositório:
   git clone https://github.com/endlessproxy/cryptocurrency-api.git
   cd cryptocurrency-api/

## Instale as dependencias
2. Dependencias:
   npm install

## Execute o programa no CMD
3. Executar:
   npm start
   curl -s http://localhost:8023/crypto | jq
   curl -s http://localhost:8023/crypto/{name} | jq
