import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
// import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';

import { LayoutsComponent } from './Layouts/layouts.component';


const routes: Routes = [
 { path: '', redirectTo: 'index', pathMatch: 'full'},
  {
  "path":"",
        "component":LayoutsComponent,
        "children":[
           {
    path:'index',
    component:IndexComponent,

  },{
  path:'home',
  component:HomeComponent
},
{
  path:'about',
  component:AboutComponent
},
{
  path:'contact',
  component:ContactComponent
}
]
}
];

@NgModule({
  declarations:[
    HomeComponent,
    AboutComponent,
    ContactComponent,
    IndexComponent
  ],
   imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
