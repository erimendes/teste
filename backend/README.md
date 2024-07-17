# Autentificação JWT Node.js com PostgreSQL

Exemplo de API Rest com Express que suporta autenticação baseada em token com JWT (JSONWebToken) e PostgreSQL. 

Foi aprendido:

 - Fluxo apropriado para registro e login do usuário com autenticação JWT.
 - Node.js Express Architecture com CORS, middlewares de autenticação e autorização e sequenciamento.
 - Como configurar rotas expressas para trabalhar com JWT.
 - Como definir modelos de dados e associação para autenticação e autorização.
 - Maneira de usar o Sequelize para interagir com o banco de dados PostgreSQL.

## Visão geral

Funcionalidades:

 - O usuário pode se inscrever em uma nova conta ou fazer login com nome de usuário e senha.
 - As informações do usuário serão armazenadas no banco de dados PostgreSQL.
 - Pela função do usuário (admin, moderador, usuário), autorizamos o usuário a acessar recursos.

Rotas:

| Methods | Urls             | Actions                            |
| ------- | ---------------- | ---------------------------------- |
| POST    | /api/auth/signup | inscrição de nova conta            |
| POST    | /api/auth/signin | login em uma conta                 |
| GET     |	/api/test/all    | recupera conteúdo público          |
| GET     |	/api/test/user   | acessar conteúdo do usuário        |
| GET     |	/api/test/mod    | acessar conteúdo do moderador      |
| GET     |	/api/test/admin  | acessar conteúdo do administrador  |

## Execução e teste

Execute o aplicativo Node.js com o comando:

```cmd
npm run dev
```

As tabelas definidas no models serão geradas automaticamente no banco de dados PostgreSQL.

Testes de requisição podem ser feitos no Postman uma ferramenta que dá suporte à documentação das requisições feitas pela API.
