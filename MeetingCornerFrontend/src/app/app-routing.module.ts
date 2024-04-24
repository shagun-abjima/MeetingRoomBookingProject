import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackgesComponent } from './pages/packges/packges.component';
import { ClientComponent } from './pages/client/client.component';
import { UsersComponent } from './pages/users/users.component';
import { PackageActivationComponent } from './pages/package-activation/package-activation.component';

const routes: Routes = [
  {
    path:"package",
    component:PackgesComponent
  },
  {
    path:"client",
    component:ClientComponent
  },
  {
    path:"users",
    component:UsersComponent
  },
  {
    path:"packageActivation",
    component:PackageActivationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
