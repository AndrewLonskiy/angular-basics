import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PostComponent} from "./post/post.component";
import { Post2Component } from './post2/post2.component';
import {Post4Component} from "./post4/post4.component";
import {FormsModule} from "@angular/forms";
import { PostFormComponent } from './post-form/post-form.component';
import { PostMainComponent } from './post-main/post-main.component';
import {StyleDirectives} from "./directives/style.directives";
import { IfnotDirective } from './directives/ifnot.directive';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    Post2Component,
    Post4Component,
    PostFormComponent,
    PostMainComponent,
    StyleDirectives,
    IfnotDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
