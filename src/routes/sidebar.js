/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: '/app/dashboard', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: '/app/investment',
    icon: 'ChartsIcon',
    name: 'Investment',
  },
  {
    path: '/app/payments',
    icon: 'TablesIcon',
    name: 'Payment',
  },
    {
    icon: 'PagesIcon',
    name: 'Guide',
    path: '/app/guide',
  },
  {
    path: '/app/settings',
    icon: 'FormsIcon',
    name: 'Settings',
  },
]

export default routes
