import { IMAGE_LOADER } from '@angular/common';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { responsiveImageLoader } from './core/responsive-image.loader';
import {
  provideClientHydration,
  withEventReplay,
  withIncrementalHydration,
} from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    { provide: IMAGE_LOADER, useValue: responsiveImageLoader },
    provideRouter(routes),
    provideClientHydration(withEventReplay(), withIncrementalHydration()),
  ],
};
