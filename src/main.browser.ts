/*
 * Angular bootstraping
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { decorateModuleRef } from './app/environment';
import { bootloader } from '@angularclass/hmr';
/*
 * App Module
 * our top level module that holds all of our components
 */
import { AppModule } from './app';

/*
 * Bootstrap our Angular app with a top level NgModule
 */
export function main(): Promise<any> {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .then(decorateModuleRef)
      .then((v) => resolve(v))
      .catch((err) => {
        console.error(err);
        reject(err);
      });
    }, 2000);
  });
}

// needed for hmr
// in prod this is replace for document ready
bootloader(main);
