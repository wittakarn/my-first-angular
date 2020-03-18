import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';

const routers = [
  { path: '', component: ProductListComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routers),
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
