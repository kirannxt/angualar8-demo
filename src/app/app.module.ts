import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './Layouts/layouts.module';
// import { LayoutsComponent } from './layouts/layouts.component';
// import { AppHeaderComponent } from './layouts/app-header/app-header.component';
// import { AppFooterComponent } from './layouts/app-footer/app-footer.component';
// import { AppSidebarComponent } from './layouts/app-sidebar/app-sidebar.component';
// import { IndexComponent } from './index/index.component';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    // LayoutsComponent,
    // AppHeaderComponent,
    // AppFooterComponent,
    // AppSidebarComponent,
    // IndexComponent,
    // HomeComponent,
    // AboutComponent,
    // ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
