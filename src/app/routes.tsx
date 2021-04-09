import {ComponentType} from "react";
import BookCourt from "../features/book-court";
import Login from "../features/login";
import OrderConfirmation from "../features/order-confirmation";
import OrderResult from "../features/order-result";

interface RouterConfig {
  title: string;
  path: string;
  component: ComponentType<any>;
}

export class Pages {
  public static readonly Login: RouterConfig = {
    title: "Login Page",
    path: '/login',
    component: Login,
  };

  public static readonly BookCourt: RouterConfig = {
    title: "Book Court Page",
    path: '/book-court',
    component: BookCourt,
  };

  public static readonly OrderConfirmation: RouterConfig = {
    title: "Order Confirmation Page",
    path: '/order-confirmation',
    component: OrderConfirmation,
  }

  public static readonly OrderResult: RouterConfig = {
    title: "Order Result Page",
    path: '/order-result',
    component: OrderResult,
  }
}
