import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { DxSelectBoxModule } from "devextreme-angular";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DxSelectBoxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
