import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component: AboutUsComponent}
]

export const routing = RouterModule.forRoot(routes);