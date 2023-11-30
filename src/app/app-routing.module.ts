import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InventoryComponent} from 'src/app/inventory/inventory.component';

const routes: Routes = [
  {
    path: "",
    component: InventoryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
