import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { DataService, DataServiceBrowser } from './data.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    {
      provide: DataService,
      useClass: DataServiceBrowser
    },
    {
      provide: APP_INITIALIZER,
      deps: [DataService],
      useFactory: (ds: DataService) => async () => await ds.load(),
      multi: true
    }
  ]
};
