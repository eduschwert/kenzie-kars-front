# KenzieKars Project

A aplicação KenzieKars é uma playaforma de anúncios de veículos para compra/venda.

A plataforma conta com dois tipos de usuários: comprador e anunciante. Contudo, para visualizar a página de anúncios (homepage), não é necessário ter uma conta ou estar logado.

No header de todas as páginas o usuário conta com um menu de botões que permite efetuar o cadastro ou fazer o login, caso já disponha de uma conta cadastrada. Uma vez logado, o usuário pode editar seu perfil e seu endereço. Se for anunciante, poderá criar, editar ou deletar um anúncio.

A página inicial mostra XX anúncios por página. Ao pé da página é possível navegar para outras páginas de anúncios. A home page conta também com um filtro, caso o usuário deseje obter anúncios específicos por: marca, modelo, cor, ano, combustível, kilometragem (fornecer um intervalo) e preço (fornecer um intervalo).

Uma vez especificado um filtro, a aplicação mostrará os anúncios que atendam o filtro selecionado, em uma ou mais páginas.

Para visualizar detalhes de um determinado anúncio, basta clicar sobre o card do anúncio, que direciona o usuário para a página de detalhes do anúncio. Nessa página o usuário logado poderá vizualizar mais imagens do veículo anunciado, caso disponíveis, fazer um comentário sobre o anúncio, ou optar por visualizar todos os anúncios daquele anunciante. É também nessa página de detalhes do anúncio que o usuário poderá comprar o veículo.

Um usuário não logado poderá ter acesso a essa mesma página de detalhes do anúncio, mas não poderá efetuar um comentário. Caso tente fazer, será direcionado para a página de login.

A partir da página de detalhes do anúncio o usuário comprador poderá ser direcionado para uma página  com todos os anuncios do daquele anunciante específico.

Para o caso de login de anunciante, o usuário é direcionado para a página de seus própios anúncios, mesmo que ele esteja sem qualquer anúncio cadastrado. É nessa página que o anunciante poderá criar um anúncio, bem como editá-lo ou deletá-lo. Poderá também visuazizar os detalhes de seu anúncio através da opção "ver detalhes", em cada card do anúncio.

O anunciante poderá ir, a a partir de qualquer página, para a sua página de anúncios, bastando para isso utilizar a opção "meus anúncios" disponível no menu no header da página.

Para o cadastro de um novo veículo, o formulário é alimentado com dados a partir da uma API da tabela Fipe. Todos os veículos lá cadastrados estarão automaticamente disponíveis para serem anunciados.

A qualquer momento qualquer usuário poderá ir para a homepage, bastando para isso clicar no logo no canto superior esquerdo.

# To access the aplication

http://localhost:3000/ (SUBSTITUIR PELO ENDEREÇO DO VERCEL)

# Getting Started with Vite

This project was bootstrapped with [Vite](https://vitejs.dev/guide/).

# Repositório da aplicação

### `https://github.com/G8-KenzieKars/Kenzie-Kars_front/tree/develop/kenzie-kars-front`

## Installing all dependencies

### `npm i`

## Available Scripts

In the project directory, you can run:
"dev": "vite",
"build": "tsc && vite build",
"lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
"preview": "vite preview"

### `npm run dev`

Runs the app in the development mode.\
(start dev server, aliases: `vite dev`, `vite serve`)\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run preview`

Vite preview is a CLI utility that can be used to preview Vite projects in a production-like environment.\ It builds the project, starts a production server, and opens a browser to the server URL.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Vite documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
