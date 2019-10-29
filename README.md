# Payment Service Provider (PSP)

[![N|Solid](https://pagar.me/static/logo_pagarme-7f30803956c8405d6bd8dce37e6ff06f.svg)](https://pagar.me)
Mais informações [README.md](https://github.com/pagarme/vagas/blob/master/desafios/software-engineer-backend/README.md)

### Dependência
___
##### Pré Dependência:
[YARN](https://yarnpkg.com/en/docs/install#debian-stable) 
```sh
$ npm install yarn
```
##### Instalando o Projeto:
Instala as dependências do projeto
```sh
$ yarn install
```
### Configuração
___
O projeto utiliza os arquivos de configuração: `.env` 
| Arquivo | Ambiente |
| ------ | ------ |
| `.env` | *PRODUÇÂO* |
| `.env.test` | *DESENVOLVIMENTO*  |

#### Para a produção
>Para produção é necessário setar o banco de dados (*postgres*)

exemplo do `.env`:
```
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_HOST=127.0.0.1
DB_DIALECT=postgres
DB_NAME={DATABASE_NAME}
```

>Rodando o Postgres com docker

```sh
docker run --name postgres -e "POSTGRES_PASSWORD=postgres" -p 5432:5432 -d postgres
```

### Executando a aplicação
___
Executa a aplicação em modo de desenvolvimento
```sh
$ yarn dev
```
> Por padrão a aplicação fica exposta em http://localhost:3000, para alterar, basta configurar o arquivo `.env.test` na raiz do projeto

### Testes
___
Executa os testes automatizados
```sh
$ yarn test
```

### Executando a aplicação em PROD
___
Executa a aplicação em modo de desenvolvimento
```sh
$ NODE_ENV=production node src/app/server.js
```
>Por padrão a aplicação roda em *http://localhost:3000* 

### Exemplo de uso da aplicação

| Verbo | EndPoint | Descrição|
| ------ | ------ |------ |
| GET | http://localhost:3000/clients/{client_ID}/transactions | Retorna todas as transações de um determinado cliente|
| GET | http://localhost:3000/clients/{client_ID}/funds | Recupera os valores de saldo do cliente|
| POST | http://localhost:3000/payables | Executa a ação de pagamento em lote|

>Exemplos de payloads para os endpoints

| Verbo | EndPoint | Descrição|
| ------ | ------ |------ |
| POST | http://localhost:3000/clients/{client_ID}/checkout | Efetua a transação, gera o recebível e altera o saldo do cliente |

```JSON
{
	"value": 1000000,
	"description": "Smartband XYZ 3.0",
	"card_number": "5536044136482387",
	"card_name": "John Doe",
	"card_valid_thru":"10/21",	
	"card_cvv": 938,
	"payment_method": "credit_card"
}
```

| Verbo | EndPoint | Descrição|
| ------ | ------ |------ |
| POST | http://localhost:3000/clients | Cria um novo cliente|
```JSON
{
	"name": "John Doe"
}
```

