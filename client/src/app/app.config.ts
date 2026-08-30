import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideNzDateFnsAdapter } from 'ng-zorro-antd/core/time';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideNzDateFnsAdapter(),
    {
      provide: NZ_I18N,
      useValue: en_US,
    },
  ]
};
