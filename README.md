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

- Node.js
- npm or yarn
- Docker(Opcional para ambiente conteinerizado)

### React + TypeScript + Vite

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) usa [Babel](https://babeljs.io/) para Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) usa [SWC](https://swc.rs/) para Fast Refresh

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
 ```sh
npm start
# or
yarn start
 ```
O aplicativo estará disponível em http://localhost:3000.

Building para Produção
Para criar uma compilação de produção, execute:
 ```sh
npm run build
# or
yarn build
 ```
A compilação estará localizada no diretório de compilação.

## Opcional uso do docker

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Configuração do Ambiente

- Crie um arquivo `.env` na raiz do projeto com o contéudo de ".env-default"

## Como executar o projeto

- Construção dos ambientes de aplicação e banco de dados:

      docker compose up --build
 
- Depois da primeira construção, poderá usar comando abaixo para executar:

      docker compose up
