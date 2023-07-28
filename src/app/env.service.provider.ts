// ? To provide the Angular dependency injector with a recipe to create 
// ? an instance of the EnvService class, we create an EnvServiceProvider.

import { Provider } from "@angular/core";
import { EnvService } from "./env.service"

export const EnvServiceFactory = () => {

  //Create an instance of the env service
  const env = new EnvService();

  // Read environment variables from browser window
  const browserWindow = window || {};
  const browserWindowEnv = browserWindow['__env'] || {};

  // Assign environment variables from browser window to env

  // In the current implementation, properties from env.js 
  // overwrites the defaults from the EnvService.
  for (const key in browserWindowEnv) {
    if (browserWindowEnv.hasOwnProperty(key)) {
      env[key] = window['__env'][key];
    }
  }

  return env;
};

export const EnvServiceProvider : Provider = {
  provide : EnvService,
  useFactory : EnvServiceFactory,
  deps: []
}