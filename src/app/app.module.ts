import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirComponent } from './dir/dir.component';
import { PipeComponent } from './pipe/pipe.component';
import { ReversePipe } from './reverse.pipe';
import { HighlightDirective } from './highlight.directive';
import { ParentComponent } from './inheritance/parent/parent.component';
import { ChildComponent } from './inheritance/child/child.component';
import { HeaderComponent } from './shared/header/header.component';
import { MasterComponent } from './nested/master/master.component';
import { DetailsComponent } from './nested/details/details.component';
import { FormComponent } from './projection/form/form.component';
import { MainComponent } from './projection/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    DirComponent,
    PipeComponent,
    ReversePipe,
    HighlightDirective,
    ParentComponent,
    ChildComponent,
    HeaderComponent,
    MasterComponent,
    DetailsComponent,
    FormComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
