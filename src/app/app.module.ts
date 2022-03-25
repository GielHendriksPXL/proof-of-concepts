import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigatorOnlineComponent } from './navigator-online/navigator-online.component';
import { NavigatorConnectionComponent } from './navigator-connection/navigator-connection.component';
import { NgConnectionServiceComponent } from './ng-connection-service/ng-connection-service.component';
import { OfflineOnlineEventComponent } from './offline-online-event/offline-online-event.component';
import { ChangeEventComponent } from './change-event/change-event.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorOnlineComponent,
    NavigatorConnectionComponent,
    NgConnectionServiceComponent,
    OfflineOnlineEventComponent,
    ChangeEventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
