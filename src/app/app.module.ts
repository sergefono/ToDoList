import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutModule } from './shared/modules/layout.module';
import { CoreModule } from './shared/modules/core.module';
import { FormsModule } from '@angular/forms';
import { DragDirective } from './shared/directives/drag.directive';

@NgModule({
  declarations: [AppComponent, DragDirective],
  imports: [BrowserModule, LayoutModule, CoreModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
