import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UnconciousnessComponent } from './unconciousness/unconciousness.component';
import { AboutComponent } from './about/about.component';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    UnconciousnessComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
