[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md) [![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

# Web Authentication

The **Web Authentication** project is a web application that I developed to practice using **WebAuthn** and the **Angular** framework. It allows users to register a **passkey** and authenticate securely without a password. The application features a responsive layout that adapts to different screen sizes using **relative units** and **media queries**, adjusting the design at breakpoints to maintain a consistent appearance.

The project is built with **Angular**, structured into components, and uses a custom **API** in the backend to persist user data and handle authentication with **SimpleWebAuthn**. This enables authentication with **Passkey**, improving security and enhancing the user experience.

**Check out the live project [here](https://webauth.protechadvanced.com/).**

<p align='center'><img src="./src/assets/screenshot_fullpage.png" alt="Screenshot of the web authentication project" width='45%' /></p>

## Technologies and Methodologies

- Semantic HTML5
- BEM methodology
- Flexbox
- Hover effects
- Pseudo-classes
- Relative units
- Media queries
- Angular
- JWT Token
- API
- SimpleWebAuthn

## Description of Technologies and Techniques

### Semantic HTML

Semantic HTML was used to make the code more readable and accessible, improving content structure and comprehension.

### BEM Methodology

The **BEM methodology** was applied to make class naming clearer, enhancing code maintainability and scalability.

### Flexbox

`Flexbox` combined with **relative units** was used to organize the layout and optimize responsiveness, ensuring a smooth experience across devices.

### Pseudo-classes

Pseudo-classes like `:hover` were implemented to improve interactivity by changing element styles.

### Media Queries

**Media queries** were configured to adjust the layout for different screen resolutions, with specific breakpoints.

<p align='center'><img src="./src/assets/screenshot_screensizes.png" alt="Screenshot of the web authentication project screen sizes" width='100%'/>

### Angular

The project uses **Angular** with **TypeScript**, separating the code into components for better organization and reusability.

- **auth Section** – A form was created using `FormControl` and `FormGroup`, binding submitted data to a variable to be sent to the **API** via the `onRegister()` and `onAuthenticate()` methods.

- **Preloader** – A loading animation controlled by `signal()` was implemented, displayed during registration and authentication.

  <p align="center"><img src="./src/assets/screenshot_preloader.png" alt="Screenshot of the preloader" width="100%"></p>

- **Profile Section** – It uses `provideRouter` as a provider and injects `router` to a component as dependency to navigate to the profile section after authentication. It indicates a successful authentication and includes a button to logout.

  <p align="center"><img src="./src/assets/screenshot_authenticated.png" alt="Screenshot of the profile section" width="100%"></p>

  - **Route Guards** – Functions were used to protect routes, using **guestGuard** to redirect unauthenticated users to the main page and **userGuard** to redirect authenticated users to the profile section.

### API

A service class was developed to consume a custom **API**. `provideHttpClient()` was set as a provider, and `HttpClient` was injected into components class to perform **GET** and **POST** requests. The class handles **user registration** and **authentication**.

#### SimpleWebAuthn

The **SimpleWebAuthn** module was integrated on the frontend to enable passwordless authentication using **Passkey** via **WebAuthn**. The methods `startAuthentication()` and `startRegistration()` were used to initiate **login** and **registration** flows with strong hardware-based authentication.

**For more information about the backend development, visit [here](https://github.com/Vinimello90/web_auth_backend#readme).**
