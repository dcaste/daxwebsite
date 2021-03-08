# Dax Website

View the live website at [daxcastellon.dev](https://daxcastellon.dev/)

This is a personal website which purpose is to show my skills on Web Development. It is always improving and I make updates consistently trying new methods. You can use it as an example or to review my code.

Please, don't use it as your own. That is not cool.

The website is built with [Next.js](https://nextjs.org/)

## Installation

- Copy or clone this repository on your local environment.
- Install dependencies by running

```bash
npm run install
```

I keep the repository updated but you can always update the dependencies with

```bash
npm run update
```

- Run the development server:

```bash
npm run dev
# or
yarn dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You editing the pages by modifying files in the directory `pages/`. The page auto-updates as you edit the file.

## File Structure

The file structure is as follows:

- components: list of React components used
- data: example data in JSON format. This is going to change soon.
- libs: libraries. At this moment there is only the FontAwesome icons.
- pages: the pages of this website
- public: static files such as fonts and images
- styles: global SASS styles
- .gitignore: list of files to be ignored when uploading to this repository
- next.config.js: basic NextJs configuration
- package.json: list of node packages needed for development
- README.md: this file

## CSS Styling

- The styling process is built with SASS. You can find the basic global styles in the directory styles/global/
- There are some global styles that like variables, mixins, fonts and a CSS reset. Those styles are found in styles/settings/
- React components styles are found in the same directory of the component. I.E. components/alert/Alert.module.scss

## Sendig Email Messages

This website uses EmailJS as the Email service. To use EmailJS:

- Create an account in [EmailJS](https://emailjs.com)
- Once logged in, create a new Email Service and select your Email provider
- Create a .env file with the following variables:
  - NEXT_PUBLIC_EMAILJS_USER: is your EmailJS user ID
  - NEXT_PUBLIC_EMAILJS_TEMPLATE: is your EmailJS template ID
  - NEXT_PUBLIC_EMAILJS_SERVICE: is your EmailJS service ID

## Roadmap

I am working on the following:

- Built an API for consuming the website data
- Integrate a CMS

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
