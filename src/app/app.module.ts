import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { GeneratorService } from './pages/generator/generator.service';
import { GeneratorComponent } from './pages/generator/generator.component';
import { ScrollVisibleDirective } from './generator-scroll.derective';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneratorComponent,
    HomeComponent,
    ScrollVisibleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuardService, AuthService, GeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
