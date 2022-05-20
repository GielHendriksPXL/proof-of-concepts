import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigatorOnlineComponent } from './components/internet-status/navigator-online/navigator-online.component';
import { NavigatorConnectionComponent } from './components/internet-status/navigator-connection/navigator-connection.component';
import { NgConnectionServiceComponent } from './components/internet-status/ng-connection-service/ng-connection-service.component';
import { OfflineOnlineEventComponent } from './components/monitoring-changes/offline-online-event/offline-online-event.component';
import { ChangeEventComponent } from './components/monitoring-changes/change-event/change-event.component';
import { OnlineStatusModule } from 'ngx-online-status';
import { SpeedTestModule } from 'ng-speed-test';
import { NgSpeedTestComponent } from './components/internet-speed/ng-speed-test/ng-speed-test.component';
import { NgxNetworkComponent } from './components/internet-speed/ngx-network/ngx-network.component';
import { NgxNetworkModule } from 'ngx-network';
import { ServiceWorkersComponent } from './components/data-synchronization/service-workers/service-workers.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LocalstorageComponent } from './components/data-synchronization/localstorage/localstorage.component';
import { IndexeddbComponent } from './components/data-synchronization/indexeddb/indexeddb.component';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CacheApiComponent } from './components/data-synchronization/cache-api/cache-api.component';
import { NgxImageCompressComponent } from './components/data-synchronization/ngx-image-compress/ngx-image-compress.component';

const dbConfig: DBConfig = {
  name: 'ProofOfConceptDB',
  version: 1,
  objectStoresMeta: [{
    store: 'jokes',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'joke', keypath: 'joke', options: { unique: false } }
    ]
  }]
}

@NgModule({
  declarations: [
    AppComponent,
    NavigatorOnlineComponent,
    NavigatorConnectionComponent,
    NgConnectionServiceComponent,
    OfflineOnlineEventComponent,
    ChangeEventComponent,
    NgSpeedTestComponent,
    NgxNetworkComponent,
    ServiceWorkersComponent,
    LocalstorageComponent,
    IndexeddbComponent,
    CacheApiComponent,
    NgxImageCompressComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    OnlineStatusModule,
    SpeedTestModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    NgxNetworkModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
