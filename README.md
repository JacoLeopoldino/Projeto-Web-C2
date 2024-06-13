# Projeto-Web-C2
Projeto Web C2 

## Descrição

Este projeto é a implementação de uma API usando Node.js, TypeScript, Prisma e um banco de dados (sugerido SQLite), conforme discutido em sala de aula. O projeto segue o padrão MVC para os modelos existentes no Prisma Quickstart e inclui um modelo adicional para Comentários.

## Estrutura do Projeto

O projeto segue a arquitetura MVC (Model-View-Controller) e está organizado da seguinte forma:

- `src/`
  - `controllers/` - Contém os controladores responsáveis por gerenciar as requisições e respostas da API.
  - `models/` - Contém os modelos do Prisma para interagir com o banco de dados.
  - `routes/` - Define as rotas da API.


## Modelos

### User

Representa um usuário na aplicação.

### Post

Representa uma postagem na aplicação. Um Post possui vários Comentários.

### Comment

Representa um comentário na aplicação. Cada Comentário pertence a somente um Post e é feito por um Usuário.

## Configuração do Ambiente

### Pré-requisitos

- Node.js instalado
- TypeScript instalado globalmente
- Prisma instalado globalmente

### Instalação na sua máquina

1. Clone o repositório:

```sh
git clone https://github.com/seu_usuario/nome_do_repositorio.git
cd nome_do_repositorio
```

2. Instale as dependências:

```sh
npm install
```

3. Configure o banco de dados no arquivo `.env`:

```sh
DATABASE_URL="file:./dev.db"
```

4. Execute as migrações do Prisma para configurar o banco de dados:

```sh
npx prisma migrate dev --name init
```

5. Inicie a aplicação:

```sh
npm run dev
```

## Rotas da API

### Usuários

- `GET /users` - Lista todos os usuários.
- `POST` - Cria um novo usuário.
- `GET` - Obtém um usuário.
- `PUT` - Atualiza um usuário.
- `DELETE` - Deleta um usuário.

### Postagens

- `GET` - Lista todas as postagens.
- `POST` - Cria uma nova postagem.
- `GET` - Obtém uma postagem por ID.
- `PUT` - Atualiza uma postagem por ID.
- `DELETE` - Deleta uma postagem por ID.

### Comentários

- `GET` - Lista todos os comentários.
- `POST` - Cria um novo comentário.
- `GET` - Obtém um comentário por ID.
- `PUT` - Atualiza um comentário por ID.
- `DELETE` - Deleta um comentário por ID.

## Ferramentas Utilizadas

- **Node.js** - Plataforma de desenvolvimento
- **TypeScript** - Linguagem de programação
- **Prisma** - ORM (Object-Relational Mapping)
- **SQLite** - Banco de dados sugerido

## Autor

- Nome: Jaco


Telas de Teste <br>
![Modelo Geral](https://github.com/JacoLeopoldino/Projeto-Web-C2/assets/118086103/d4636962-ae56-40fb-9f7d-ff634ccbd239)

Post 
![modelo_post_salvo](https://github.com/JacoLeopoldino/Projeto-Web-C2/assets/118086103/7b0df9f9-7c5f-4891-a298-8d0255861acd)

Comentario
![modelo_post_comentario](https://github.com/JacoLeopoldino/Projeto-Web-C2/assets/118086103/452ae97b-0416-476c-a970-32109006b853)
