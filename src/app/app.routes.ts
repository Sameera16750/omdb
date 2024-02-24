import { Routes } from '@angular/router';
import {routes as commonPages} from "./module/pages/routs";

export const routes: Routes = [
  {
    path:"",
    children:commonPages
  }
];
