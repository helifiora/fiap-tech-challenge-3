![Logo Projeto](logo.png)

# Tech Challenge 3 - FIAP

---

## Grupo

- Guilherme Buzati, RM354942
- Helielton Fioramonte, RM355309
- Luiz Fernando, RM356132

## Funcionalidades

- [x] Lista de Posts com título do autor, breve descrição e campo de busca
- [x] Leitura do Post
- [x] Criação do Postagem
- [x] Edição do Postagem
- [x] Administração da Postagem com opção de editar e excluir
- [x] Autenticação e Autorização

## Principais ferramentas, bibliotecas e frameworks

- [Node.js](https://nodejs.org/pt), plataforma que permite a execução de código JavaScript fora de um navegador web
- [Docker](https://www.docker.com/) (Opcional para ambiente conteinerizado)
- [Docker Compose](https://docs.docker.com/compose/) (Opcional para ambiente conteinerizado)
- [Express](https://expressjs.com/), framework minimalista para nodejs
- [Valibot](https://valibot.dev/), alternativa ao Zod para validação de schemas
- [Vitest](https://vitest.dev/) como framework para testes
- [Pg](https://github.com/brianc/node-postgres) como driver postgres
- [Kysely](https://kysely.dev/) sql query builder que integra com o driver pg
- [Tsup](https://tsup.egoist.dev/), bundler typescript para produção
- [Tsx](https://github.com/privatenumber/tsx) executar Typescript, utilizado
  no desenvolvimento

## Dependências

O projeto usa as seguintes dependências para sua funcionalidade principal e validação de formulário:

- **React Hook Form**: permite a validação do formulário, permitindo a personalização de componentes, ao mesmo tempo que fornece fácil integração de regras de validação.
- **Valibot**: uma biblioteca de validação de formulário que se integra ao React Hook Form para validar entradas antes do envio.
- **@hookform/resolvers**: Fornece resolvedores de validação para integração com bibliotecas como Valibot para validação de formulário.
- **React Markdown**: Converte o conteúdo do Markdown em HTML, permitindo que tags como parágrafos, listas, etc., sejam renderizadas corretamente.
- **Date-fns**: uma biblioteca de utilitários para manipular datas e horas com uma ampla variedade de funções integradas.
- **Axios**: um cliente HTTP baseado em promessa usado para fazer solicitações ao back-end.
- **Redux**: Atualmente usado para gerenciamento de estado global, especificamente para armazenar o estado do usuário logado.
- **React Router DOM**: Manages the routing and navigation between different pages in the application.


## Instalação

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

## Executando o Projeto

Para iniciar o servidor de desenvolvimento execute:


    npm install
    # or
    yarn install

    
O aplicativo estará disponível em http://localhost:3000.

Building para Produção
Para criar uma compilação de produção, execute:

   
    npm install
    # or
    yarn install
  
    
A compilação estará localizada no diretório de compilação.

## Configuração do Ambiente

- Crie um arquivo `.env` na raiz do projeto com o contéudo de ".env-default"

## Como executar o projeto

- Construção dos ambientes de aplicação e banco de dados:

      docker compose up --build
 
- Depois da primeira construção, poderá usar comando abaixo para executar:

      docker compose up
