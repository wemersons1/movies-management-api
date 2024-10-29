# Administrador de filmes

## Como instalar

Softwares obrigatórios:

- Docker
- docker-compose

É necessario copiar o arquivo .env.example e renomear para .env.

Dentro da pasta raiz do projeto você deve executar `docker-compose up --build`.

Você está pronto para rodar agora.

- `Está disponível em http://localhost:3000`

## Comando para subir filmes para a aplicação

- Ao subir a aplicação o seguinte comando subirá alguns filmes: `docker-compose exec app bash -c "npm run command:get-movies"`

## Endpoints disponíveis

- Sincroniza os filmes: POST localhost:3000/sync-themoviedb
- Lista os filmes: GET localhost:3000/movies
