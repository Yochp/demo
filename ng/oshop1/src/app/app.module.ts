import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {environment} from '../environments/environment';

import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabase, AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';
import {BsNavbarComponent} from './bs-navbar/bs-navbar.component';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {CheckOutComponent} from './check-out/check-out.component';
import {OrderSucsessComponent} from './order-sucsess/order-sucsess.component';
import {MyOrderComponent} from './my-order/my-order.component';
import {AdminProductsComponent} from './admin/admin-products/admin-products.component';
import {AdminOrdersComponent} from './admin/admin-orders/admin-orders.component';
import {LoginComponent} from './login/login.component';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from './auth.service';
import {AuthGuardService} from './auth-guard.service';
import {CanActivate} from '@angular/router';
import {AdminAuthGuardService} from './admin-auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSucsessComponent,
    MyOrderComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([

      {path: '', component: HomeComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'login', component: LoginComponent},

      {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
      {path: 'order-sucsess', component: OrderSucsessComponent, canActivate: [AuthGuardService]},
      {path: 'my/order', component: MyOrderComponent, canActivate: [AuthGuardService]},

      {path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
      {path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService, AdminAuthGuardService]}
    ])
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AdminAuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
