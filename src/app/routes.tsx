import { ComponentType } from "react";
import Home from "../features/home";
import Login from "../features/login";

interface RouterConfig {
  title: string;
  path: string;
  component: ComponentType<any>;
}

export class Pages {
  public static readonly Home: RouterConfig = {
    title: "Home Page",
    path: '/',
    component: Home,
  };

  public static readonly Login: RouterConfig = {
    title: "Login Page",
    path: `/login`,
    component: Login,
  };
}
