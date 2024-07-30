import { provideRouter } from '@angular/router';
import { ApplicationConfig } from '@angular/core';
import { provideHighlightOptions } from 'ngx-highlightjs';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(),
    provideHighlightOptions({
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      languages: {
        csharp: () => import('highlight.js/lib/languages/csharp'),
        java: () => import('highlight.js/lib/languages/java'),
        python: () => import('highlight.js/lib/languages/python'),
        javascript: () => import('highlight.js/lib/languages/javascript'),
        xml: () => import('highlight.js/lib/languages/xml'),
        json: () => import('highlight.js/lib/languages/json'),
        bash: () => import('highlight.js/lib/languages/bash')
      }
    })
  ]
};
