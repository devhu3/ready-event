import { AppRoutingModule } from "./app.routing";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";

import { InformationsComponent } from "./pages/informations/informations.component";
import { CategoriesComponent } from "./pages/categories/categories.component";
import { RegisterComponent } from "./pages/authentication/register/register.component";
import { LoginComponent } from "./pages/authentication/login/login.component";
import { MainComponent } from "./pages/main/main.component";
import { HomeComponent } from "./pages/home/home.component";

import { LoginService } from "./services/login.service";
import { TeamService } from "./services/team.service";
import { UserService } from "./services/user.service";
import { readyUtils } from "./utils/utils";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    LoginComponent,
    FooterComponent,
    NavbarComponent,
    RegisterComponent,
    CategoriesComponent,
    InformationsComponent
  ],
  imports: [FormsModule, BrowserModule, AppRoutingModule],
  providers: [readyUtils],
  bootstrap: [AppComponent]
})
export class AppModule {}
