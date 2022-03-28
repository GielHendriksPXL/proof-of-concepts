import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigatorOnlineComponent } from './components/internet-status/navigator-online/navigator-online.component';
import { NavigatorConnectionComponent } from './components/internet-status/navigator-connection/navigator-connection.component';
import { NgConnectionServiceComponent } from './components/internet-status/ng-connection-service/ng-connection-service.component';
import { OfflineOnlineEventComponent } from './components/monitoring-changes/offline-online-event/offline-online-event.component';
import { ChangeEventComponent } from './components/monitoring-changes/change-event/change-event.component';
import { OnlineStatusModule } from 'ngx-online-status';
import { NgxOnlineStatusComponent } from './components/internet-status/ngx-online-status/ngx-online-status.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorOnlineComponent,
    NavigatorConnectionComponent,
    NgConnectionServiceComponent,
    OfflineOnlineEventComponent,
    ChangeEventComponent,
    NgxOnlineStatusComponent
  ],
  imports: [
    BrowserModule,
    OnlineStatusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
