import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MasterModule } from './todo-list-app/master/master.module';

platformBrowserDynamic().bootstrapModule(MasterModule).catch(err => console.error(err));