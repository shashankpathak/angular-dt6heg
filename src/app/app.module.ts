import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 


import { AppComponent } from './app.component';


import { OrderBy } from './sort.pipe';
import{NgxPaginationModule} from 'ngx-pagination';
import { UserPipe } from './username.pipe';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule,NgxPaginationModule ],
  declarations: [ AppComponent,  OrderBy, UserPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
