# KenzieKars Project

<h1 align="center">Kenzie Kars</h1>

<p align="center"><img width="800" alt="Kenzie Kars GIF" src="./src/assets/kenzie-kars.gif"/></p>

<p><strong>Kenzie Kars</strong> is a personal e-commerce platform focused on vehicle buying and selling, built to showcase my full-stack development skills. The platform is based on vehicle data retrieved from a mock FIPE API and allows users to register as buyers or sellers. Below are the main features and a walkthrough of the app's flow.</p>

<h2>Features</h2>
<ul>
    <li><strong>User Registration:</strong> Users can sign up as either buyers or sellers. Buyers can browse vehicle listings, contact sellers via WhatsApp, and leave comments on ads. Sellers can create, manage, and edit their vehicle ads, as well as interact with buyers and other sellers through comments and WhatsApp.</li>
    <li><strong>Password Recovery:</strong> Users can recover their accounts by requesting a password reset link, sent via email, allowing them to securely reset their password.</li>
    <li><strong>Advanced Vehicle Filtering on Home Page:</strong> Users can browse a wide selection of vehicles using filters such as:
        <ul>
            <li><strong>Brand</strong></li>
            <li><strong>Model</strong></li>
            <li><strong>Price below FIPE value</strong></li>
            <li><strong>Color</strong></li>
            <li><strong>Year</strong></li>
            <li><strong>Fuel Type</strong></li>
            <li><strong>Mileage Range</strong></li>
            <li><strong>Price Range</strong></li>
        </ul>
    </li>
    <li><strong>AutoComplete Vehicle Search:</strong> Sellers can use an AutoComplete feature (powered by Material-UI) integrated with the FIPE API when creating vehicle ads, allowing them to quickly find and list vehicles.</li>
    <li><strong>Seller Profile Page:</strong> Sellers have access to a profile page where they can:
        <ul>
            <li>Create new vehicle ads</li>
            <li>Edit existing ads</li>
            <li>Manage all their current ads</li>
        </ul>
    </li>
    <li><strong>Comments Section:</strong> Buyers and sellers can leave comments on vehicle ads to ask questions or provide feedback.</li>
</ul>

<h2>Application Workflow</h2>

<p><strong>1. User Registration & Login:</strong> New users can sign up as buyers or sellers. After logging in, buyers can explore available vehicles, and sellers can create and manage ads.</p>

<p><strong>2. Password Recovery:</strong> If a user forgets their password, they can easily reset it by requesting a reset link via email, ensuring secure access to their account.</p>

<p><strong>3. Home Page Navigation:</strong> Users can search through listed vehicles using a robust set of filters, narrowing results by brand, price, mileage, and other factors.</p>

<p><strong>4. Seller Ad Management:</strong> Sellers can add new ads using an intuitive form integrated with the FIPE API to prepopulate vehicle details. They can also edit or remove existing ads as needed.</p>

<p><strong>5. Interaction through Comments:</strong> Buyers and sellers can communicate via comments on individual vehicle ads, enhancing user interaction and providing a feedback loop for sellers.</p>

<h2>Fake FIPE API</h2>

<h4><a href="https://kenzie-kars.herokuapp.com/">Kenzie Kars FIPE API</a></h4>
<h4><a href="https://kenzie-kars.herokuapp.com/api">API Documentation</a></h4>

<h2>Requirements</h2>

<p>Before starting, ensure you have the following installed:</p>
<ul>
    <li><a href="https://git-scm.com">Git</a></li>
    <li><a href="https://nodejs.org/en/">Node.js</a></li>
</ul>
<p>We recommend using <a href="https://code.visualstudio.com/">VSCode</a> as your code editor.</p>

<h2>Application Design</h2>

<h4><a href="https://www.figma.com/design/eWe8HjOjXzLYG6IeNjQmMc/M6---E-Commerce-Filter?node-id=45-2&node-type=canvas&t=49vnOxG0iUrbZt89-0">Figma Design Mockup</a></h4>

<h2>🚀 Running the Application</h2>

<h3>1. Clone the repository:</h3>

<pre><code>git clone git@github.com:eduschwert/kenzie-kars-front.git</code></pre>

<h3>2. Access the project folder:</h3>

<pre><code>cd kenzie-kars-front</code></pre>

<h3>3. Install dependencies:</h3>

<pre><code>npm install or yarn</code></pre>

<h3>4. Start the development server:</h3>

<pre><code>npm run dev or yarn dev</code></pre>

<p>The app will run locally at: <a href="http://localhost:5173">http://localhost:5173</a></p>

<h2>🛠 Technologies Used</h2>

<p>This project leverages the following tools and technologies:</p>
<ul>
    <li><a href="https://reactjs.org/">React</a></li>
    <li><a href="https://vitejs.dev/guide/">Vite</a></li>
    <li><a href="https://styled-components.com/">Styled-Components</a></li>
    <li><a href="https://www.npmjs.com/package/zod">Zod</a></li>
    <li><a href="https://react-hook-form.com/">React Hook Form</a></li>
    <li><a href="https://mui.com/">Material UI</a></li>
    <li><a href="https://reactrouter.com/">React Router</a></li>
    <li><a href="https://axios-http.com/">Axios</a></li>
</ul>

<h2>Author</h2>

<p><strong>Eduardo Schwert de Freitas</strong></p>
<img src="https://avatars.githubusercontent.com/u/106620111?s=400&u=d29e7cd5bdcadc0a09721f69115d267054018be7&v=4" alt="Eduardo Schwert" style="border-radius:50%;width:50px"/>
<a href="https://www.linkedin.com/in/eduardoschwert/"><img src="https://img.shields.io/badge/-Eduardo-%230A66C2?logo=linkedin"/></a>
<a href="mailto:eduardoschwert@yahoo.com.br"><img src="https://img.shields.io/badge/-eduardoschwert%40yahoo.com.br-%236001D2?logo=yahoo" alt="eduardoschwert@yahoo.com.br"/></a>
