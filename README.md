## Descrição

Este é um projeto feito em Node, oferecendo funcionalidades para registro e login de usuários, bem como operações CRUD para tarefas. A aplicação é uma api RESTful que pode ser integrada a um front-end que utilize os endpoints fornecidos.

## Funcionalidades

1. **Registro e Login de Usuários**
   - **Registro de Usuário:** Permite que novos usuários se registrem no sistema.
   - **Login de Usuário:** Permite que usuários registrados façam login no sistema usando credenciais válidas.

2. **CRUD de Tarefas**
   - **Criar Tarefa:** Adiciona novas tarefas ao sistema.
   - **Ler Tarefas:** Recupera e lista uma ou todas as tarefas armazenadas.
   - **Atualizar Tarefa:** Atualiza informações de tarefas existentes.
   - **Excluir Tarefa:** Remove tarefas do sistema.

## Tecnologias

- **Node:** Linguagem de programação base do projeto.
- **Express:** Framework principal para desenvolvimento do backend.
- **SQLite:** Banco de dados utilizado para persistência.
- **Sequelize:** ORM, ou seja, um mapeador objeto-relacional.
- **bcryptjs:** Uma biblioteca para fazer hash de senhas.
- **JWT (JSON Web Token):** Para autenticação e gerenciamento de sessões de usuário.
- **Render**: Plataforma usada para deploy.

## Endpoints

- Utilize ferramenta de teste de API (recomendo postman)
- Insira a URL no campo da ferramenta escolhida: https://to-do-list-5lfc.onrender.com
- cole a URL relativa ao método HTTP desejado (ex.: para o método de registro de usuário seria https://to-do-list-5lfc.onrender.com/users/sign_in)

### Usuários (registro e login)

- **Registro de Usuário**
  - **Método:** `POST`
  - **URL:** `/users/sign_up`
  - **Corpo da Requisição:**
    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```

- **Login de Usuário**
  - **Método:** `POST`
  - **URL:** `/sessions/sign_in`
  - **Corpo da Requisição:**
    ```json
    {
      "username": "string",
      "password": "string"
    }

    ```
    Resposta: JSON contendo um token JWT se as credenciais forem válidas.

  - **OBS.:** Para os próximos métodos, deve-se escolher o tipo de autentiação "bearer token" e inserir o token JWT gerado no login (o token expira 1 dia depois de gerado).

### Tarefas (CRUD)

- **Criar Tarefa**
  - **Método:** `POST`
  - **URL:** `/tasks`
  - **Corpo da Requisição:**
    ```json
    {
      "title": "string"
    }
    ```
    (só é permitido um desses três no campo status)


- **Ver todas as Tarefas**
  - **Método:** `GET`
  - **URL:** `/tasks`
  - **Resposta:** Lista de tarefas em formato JSON.

- **Localizar por ID**
  - **Método:** `GET`
  - **URL:** `/tasks/:id`
  - **Respota:** tarefa em formato JSON

- **Atualizar Tarefa**
  - **Método:** `PUT`
  - **URL:** `/tasks/:id`
  - **Corpo da Requisição:**
    ```json
    {
      "title": "string"
    }
    ```

- **Excluir Tarefa**
  - **Método:** `DELETE`
  - **URL:** `/tasks/:id`

## Estrutura do Projeto

```plaintext
   to-do-list/
   │
   ├── src/
   │   ├── controllers/
   |   |   ├── SessionsController.js
   |   |   ├── TasksController.js
   |   |   └── UsersController.js
   │   ├── database/
   |   |   └── database.js
   │   ├── middlewares/
   |   |   └── auth.js
   │   ├── models/
   |   |   ├── Task.js
   |   |   └── User.js
   │   ├── routes/
   |   |   ├── sessionRoutes.js
   |   |   ├── taskRoutes.js
   |   |   └── userRoutes.js
   │   └── app.js
   ├── .gitignore
   ├── package-lock.json
   ├── package.json
   └── README.md
   ```
