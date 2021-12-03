# Agenda da ShipSmart!

A aplicação gerada neste projeto tem como intuito efetivar as necessidade identificadas no documento.

## Instruções

Instalar uma versão recente do [Node JS (>14)](https://nodejs.org/en/download/package-manager/)

Instalar o [docker composer](https://docs.docker.com/compose/install/)

Copiar o arquivo `.env.app` para `.env`

Instalar os pacotes do node com o comando `npm install`

Buildar as dependências com `npx mix build`

Levantar todos os containers com `docker-compose up -d`

Entre no container com o comando `docker exec -it shipsmart.webapp bash`

Migre as tabelas com o comando `php artisan migrate`

Popule a tabela de estados com `php artisan db:seed StatesSeeder`

## TODOS
- [ ] Validar campos
- [ ] Incluir conexão com o MongoDB (nunca havia mexido com esse banco de dados e não consegui terminar, apesar de ter levantado a instância, criado um banco ao inicializar o container)
