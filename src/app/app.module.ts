import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { EyeTestComponent } from './eye-test/eye-test.component';
import { DaltonismTestComponent } from './daltonism-test/daltonism-test.component';
import { ProductItemComponent } from './product-item/product-item.component';

import { FormsModule } from '@angular/forms';

// dodane
import { ProductItemService } from './product-item/product-item.service';
import { Http } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { RecordRtcComponent } from './record-rtc/record-rtc.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: 'product', component: ShopListComponent },
  { path: 'product/:id', component: ProductItemComponent },
  { path: 'daltonism-test', component: DaltonismTestComponent },
  { path: 'eye-test', component: EyeTestComponent },
  { path: 'login', component: LoginComponent},
  { path: 'record-rtc', component: RecordRtcComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ShopListComponent,
    EyeTestComponent,
    DaltonismTestComponent,
    ProductItemComponent,
    LoginComponent,
    RecordRtcComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    HttpModule,
    FormsModule
  ],
  providers: [
    HttpClientModule,
    ProductItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
