import { ComponentType } from "react";
import Hello from "../features/hello/Hello";
import Login from "../features/login";

interface RouterConfig {
  title: string;
  path: string;
  component: ComponentType<any>;
}

export class RouteList {
  public static readonly Hello: RouterConfig = {
    title: "Hello Page",
    path: `/`,
    component: Hello,
  };

  public static readonly Login: RouterConfig = {
    title: "Login Page",
    path: `/login`,
    component: Login,
  };
}
