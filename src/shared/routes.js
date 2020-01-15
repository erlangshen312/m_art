import Dashboard from "../app/screens/dashboard";
import About from "../app/screens/about";
import Portfolio from "../app/screens/portfolio";
import Cost from "../app/screens/cost";
import Contact from "../app/screens/contacts";

export const routes = [
    {path: "/", component:Dashboard,  exact: true, params: {}},
    // {path: "/detail/:id", component:Detail, params:{}},
    {path: "/about", component:About,  exact: true, params: {}},
    {path: "/portfolio", component:Portfolio,  exact: true, params: {}},
    {path: "/cost", component:Cost,  exact: true, params: {}},
    {path: "/contact", component:Contact,  exact: true, params: {}},
];

