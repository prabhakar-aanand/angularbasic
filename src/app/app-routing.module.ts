import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirComponent } from './dir/dir.component';
import { ChildComponent } from './inheritance/child/child.component';
import { MasterComponent } from './nested/master/master.component';
import { PipeComponent } from './pipe/pipe.component';

const routes: Routes = [
  {path:'', component:DatabindingComponent},
  {path:'dir', component:DirComponent},
  {path:'pipe',component:PipeComponent},
  {path:'inheritance',component:ChildComponent},
  {path:'nested',component:MasterComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
