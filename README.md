# TechTime LandingPage and Dashboard Reactjs

🚀 [See it live](https://techtime-iybs.onrender.com)

This is not a template. This is a complete application, built on top of React.

Accessibility is a priority in my projects and I think it should be in yours too, so this was developed listening to real screen readers, focus traps and keyboard navigation are available everywhere.

## 📦 Features

- 🦮 Throughly accessible (developed using screen readers)
- 🧩 Multiple (custom) components
- ⚡ Code splitting
- Tailwind CSS
- React Router
- Heroicons
- Chart.js
- PWA delivering offline-first and app-like experience

Site Running
https://techtime-iybs.onrender.com

## 📚 Docs

DesKtop View 
![Screenshot (12)](https://user-images.githubusercontent.com/97501475/227932014-3c947e2e-01a7-4cc8-bad4-b47455d626c9.png)

Tablet View (Min-Width:768px) 
![Screenshot (14)](https://user-images.githubusercontent.com/97501475/227932234-041f2554-c451-4521-af1b-810379ad7eb6.png)

Mobile View (Max-WIdth:630px)
![Screenshot (13)](https://user-images.githubusercontent.com/97501475/227932364-58f1563c-da4e-4131-b90a-7ac7c8db92d9.png)

### General components

You will find the documentation for every small component there.

### Routing

Routes in TecchTime LandingPage Dashboard are separated into two categories, sidebar ([routes/sidebar.js](src/routes/sidebar.js)) and general ([routes/index.js](src/routes/index.js)).

#### Sidebar routes

These are the routes that will show in the sidebar. They expect three properties:

- `path`: the destination;
- `name`: the name to be shown;
- `icon`: an icon to illustrate the item

Item that are used as dropdowns, like the Pages option, don't need a `path`, but expect a `routes` array of objects with `path` and `name`:

```js
// sidebar.js
{
  path: '/app/tables',
  icon: 'TablesIcon',
  name: 'Tables',
},
{
  icon: 'PagesIcon', // <-- this is used as a submenu, so no path
  name: 'Pages',
  routes: [
    // submenu
    {
      path: '/login',
      name: 'Login', // <-- these don't have icons
    },
    {
      path: '/create-account',
      name: 'Create account',
    },
```

#### General (Router) routes

These are **internal** (private) routes. They will be rendered inside the app, using the default `containers/Layout`.

If you want to add a route to, let's say, a landing page, you should add it to the `App`'s router ([src/App.js](src/App.js), exactly like `Login`, `CreateAccount` and other pages are routed.

#### How to add a new page to router?

1. Create your page inside `src/pages`, say `MyPage.js`;
2. Add it to the global router (`src/routes/index.js`)

```js
const MyPage = lazy(() => import('../pages/MyPage'))
```

Then add it to the `routes` array:

```js
{
  path: '/my-page', // the url that will be added to /app/
  component: MyPage, // the page component you jsut imported
}
```

3. If you want to make this page accessible from the sidebar, you have to options:

- add it to the root `routes` array

```js
{
  path: '/app/my-page', // /app + the url you added in routes/index.js
  icon: 'HomeIcon', // the component being exported from src/icons/index.js
  name: 'My Page', // name that appear in Sidebar
},
```

- add it as an option under a dropdown

```js
{
  icon: 'PagesIcon',
  name: 'Pages',
  routes: [
    // submenu
    {
      path: '/app/my-page',
      name: 'My Page',
    },
```

If you're asking where does this `/app` come from, it is from this line inside `src/App.js`, that renders the app:

```jsx
<Route path="/app" component={Layout} />
```

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

### `npm run build`
### `npm start`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!


### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).


### Analyzing the Bundle Size

### Making a Progressive Web App

### Advanced Configuration

### Deployment

