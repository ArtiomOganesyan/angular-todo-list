import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';
import { BodyElementOneComponent } from './body/body-element-one/body-element-one.component';
import { BodyElementTwoComponent } from './body/body-element-two/body-element-two.component';
import { BodyElementThreeComponent } from './body/body-element-three/body-element-three.component';
import { BodyElementFourComponent } from './body/body-element-four/body-element-four.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    FooterComponent,
    BodyComponent,
    SidebarComponent,
    NavbarComponent,
    LogoComponent,
    BodyElementOneComponent,
    BodyElementTwoComponent,
    BodyElementThreeComponent,
    BodyElementFourComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
