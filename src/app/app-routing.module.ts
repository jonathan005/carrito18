import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo:"login", pathMatch: 'full'
  },
  {
    path: 'home2',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    //canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home-help',
    loadChildren: () => import('./pages/home-help/home-help.module').then( m => m.HomeHelpPageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./pages/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'productos/:name',
    loadChildren: () => import('./pages/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'cart-modal',
    loadChildren: () => import('./pages/cart-modal/cart-modal.module').then( m => m.CartModalPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'personalinfo',
    loadChildren: () => import('./pages/personalinfo/personalinfo.module').then( m => m.PersonalinfoPageModule)
  },
  {
    path: 'paymentinfo',
    loadChildren: () => import('./pages/paymentinfo/paymentinfo.module').then( m => m.PaymentinfoPageModule)
  },
  {
    path: 'historyinfo/:historia',
    loadChildren: () => import('./pages/productdetail/productdetail.module').then( m => m.ProductdetailPageModule)
  },
  {
    path: 'historyinfo',
    loadChildren: () => import('./pages/historyinfo/historyinfo.module').then( m => m.HistoryinfoPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./pages/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'productdetail',
    loadChildren: () => import('./pages/productdetail/productdetail.module').then( m => m.ProductdetailPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
