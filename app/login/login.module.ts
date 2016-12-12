import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { loginRouting } from "./login.routing";
import { LoginComponent } from "./login.component";

@NgModule({
  schemas: [ NO_ERRORS_SCHEMA ],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    loginRouting
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
