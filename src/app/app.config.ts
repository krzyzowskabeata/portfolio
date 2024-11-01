import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppData } from './app-data';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {

  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideHttpClient(withFetch()),
    importProvidersFrom(
      InMemoryWebApiModule.forRoot(AppData, { delay: 1000 })
    ),
    provideRouter(routes), 
    provideClientHydration(), 
    provideAnimationsAsync()
  ]
  
};
