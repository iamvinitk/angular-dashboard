import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbButtonModule,
  NbMenuModule,
  NbIconModule,
  NbActionsModule,
  NbUserModule, NbCardModule, NbInputModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { RouterModule } from '@angular/router';
import { StatusCardComponent } from './dashboard/status-card/status-card.component';
import { FormsComponent } from './dashboard/forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusCardComponent,
    FormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'default'}),
    NbLayoutModule,
    NbEvaIconsModule,
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
    NbMenuModule.forRoot(),
    NbButtonModule,
    NbIconModule,
    NbActionsModule,
    NbUserModule,
    NbCardModule,
    NbInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
