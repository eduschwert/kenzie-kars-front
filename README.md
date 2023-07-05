# KenzieKars Project

<h1 align="center">Kenzie Kars</h1>

The KenzieKars application is a vehicle advertisement platform for purchase/sale.
<br/>

<h2>Features</h2>

- Buyer or advertiser registration
- AutoLogin
- View ads page with filter options (dynamic filter) by brand, model, color, year, fuel, mileage range and price range (no need to be logged in).
- Ads details can be seen by clickng on the ad card
- Create, edit and delete vehicle ads (logged in as advertiser)
- Create, edit and delete vehicle ad comments (logged in as buyer or advertiser). If user is not logged in, will be redirected to login page.
- Purchase of a vehicle (buyer is directed to whatsapp for direct contact with the advertiser)

To register a new vehicle, the form is fed with data from an API of the Fipe table. All vehicles registered in this API will be automatically available to be announced.

<h4 align="left">API Kenzie Kars Fipe: <a href="https://kenzie-kars.herokuapp.com/">API Kenzie Kars Fipe</a></h4>
<h4 align="left">Documentation: <a href="https://kenzie-kars.herokuapp.com/api">Documentation of Kenzie Kars Fipe</a></h4>
<br/>
<h2>Requirements</h2>

Before starting, you will need to have the following tools installed:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
It's also nice to have an editor to work with the code like [VSCode](https://code.visualstudio.com/)

<br/>
<h2>Application Design</h2>

<h4 align="left">Figma: <a href="https://www.figma.com/file/KX3C3fIi8zmCRpNipxIYYF/M6---E-Commerce-Filter?type=design&node-id=45-2">Kenzie Kars Design Definition</a></h4>
<br/>
<h2>🚀 Executing</h2>

### Clone this repository

https://github.com/G8-KenzieKars/Kenzie-Kars_front.git

```bash
$ git clone <git@github.com:G8-KenzieKars/Kenzie-Kars_front.git>
```

### Access project folder in terminal/cmd

```bash
$ cd kenzie-kars-front
```

### Install all dependencies

```bash
$ npm install
```

### Run the application in development environment

```bash
$ npm run dev
```

Application will start at: <http://localhost:3000>

<br/>
<h2>🛠 Technologies</h2>

The following tools were used to build this application:

- [React](https://pt-br.reactjs.org/)
- [Vite](https://vitejs.dev/guide/)
- [Styled-Components](https://styled-components.com/)
- [Yup](https://www.npmjs.com/package/yup/)
- [Zod](https://www.npmjs.com/package/zod)
- [React Hook Form](https://react-hook-form.com/)
- [Material UI](https://mui.com/)
- [React Router](https://reactrouter.com/en/main)
- [Axios](https://axios-http.com/ptbr/docs/intro)

<br/>
<h2>Authors</h2>

<p>Douglas Fernandes Santos  </p>
<img style="border-radius: 50%" width="50" src="https://avatars.githubusercontent.com/u/33332097?v=4"/>
<a href="https://www.linkedin.com/in/douglas-santos-0525b4216/"><img src="https://img.shields.io/badge/-Douglas-%230A66C2?logo=linkedin"/></a>
<a href="mailto:dougbmth@hotmail.com"><img src="https://img.shields.io/badge/-dougbmth%40hotmail.com-blue?logo=microsoftoutlook
" alt="dougbmth@hotmail.com"/></a>

<br/>
<p>Eduardo Schwert de Freitas</p>
<img style="border-radius: 50%" width="50" src="https://avatars.githubusercontent.com/u/106620111?s=400&u=d29e7cd5bdcadc0a09721f69115d267054018be7&v=4"/>
<a href="https://www.linkedin.com/in/eduardoschwert/"><img src="https://img.shields.io/badge/-Eduardo-%230A66C2?logo=linkedin"/></a>
<a href="mailto:eduardoschwert@yahoo.com.br"><img src="https://img.shields.io/badge/-eduardoschwert%40yahoo.com.br-%236001D2?logo=yahoo" alt="eduardoschwert@yahoo.com.br"/></a>

<br/>
<p>Juliana Serrano do Carmo Ferraz</p>
<img style="border-radius: 50%" width="50" src="https://avatars.githubusercontent.com/u/110045459?s=400&u=f78f09d76322238fe1e6ba930246950c74e809c6&v=4"/>
<a href="https://www.linkedin.com/in/juliana-serrano-do-carmo-ferraz-964839111/"><img src="https://img.shields.io/badge/-Juliana-%230A66C2?logo=linkedin"/></a>
<a href="mailto:ferrazjsc@gmail.com"><img src="https://img.shields.io/badge/-ferrazjsc%40gmail.com-red?logo=google&logoColor=%23ffffff
" alt="ferrazjsc@gmail.com"/></a>

<br/>
<p>Natália Badilho de Carvalho</p>
<img style="border-radius: 50%" width="50" src="https://avatars.githubusercontent.com/u/109743554?v=4"/>
<a href="https://www.linkedin.com/in/eduardoschwert/"><img src="https://img.shields.io/badge/-Natalia-%230A66C2?logo=linkedin"/></a>
<a href="mailto:nbadilho@gmail.com"><img src="https://img.shields.io/badge/-nbadilho%40gmail.com-red?logo=google&logoColor=%23ffffff
" alt="nbadilho@gmail.com"/></a>

<br/>
<p>Wesley Ricarte</p>
<img style="border-radius: 50%" width="50" src="https://avatars.githubusercontent.com/u/110259771?v=4"/>
<a href="https://www.linkedin.com/in/wesleyricarte/"><img src="https://img.shields.io/badge/-Wesley-%230A66C2?logo=linkedin"/></a>
<a href="mailto:wesley.ricarte97@gmail.com"><img src="https://img.shields.io/badge/-wesley.ricarte97%40gmail.com-red?logo=google&logoColor=%23ffffff
" alt="wesley.ricarte97@gmail.com"/></a>

<br/>
<h2>Available Scripts</h2>

### `npm run preview`

Vite preview is a CLI utility that can be used to preview Vite projects in a production-like environment.\ It builds the project, starts a production server, and opens a browser to the server URL.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
