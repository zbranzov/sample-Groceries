import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { groceriesRouting } from "./groceries.routing";
import { GroceriesComponent } from "./groceries.component";
import { GroceryListComponent } from "./grocery-list/grocery-list.component";
import { ItemStatusPipe } from "./grocery-list/item-status.pipe";

@NgModule({
  schemas: [ NO_ERRORS_SCHEMA ],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    groceriesRouting
  ],
  declarations: [
    GroceriesComponent,
    GroceryListComponent,
    ItemStatusPipe
  ]
})
export class GroceriesModule {}
