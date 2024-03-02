import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { DataService, DataServiceServer } from './data.service';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    {
      provide: DataService,
      useClass: DataServiceServer
    }
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
