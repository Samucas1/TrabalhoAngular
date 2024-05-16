import { NgModule } from @angular/core;
import { BrowserModule } from @angular/platform-browser;
import { ReactiveFormsModule } from @angular/forms;
import { HttpClientModule } from @angular/common/http;
import { BrowserAnimationsModule } from @angular/platform-browser/animations;
import { MatFormFieldModule } from @angular/material/form-field;
import { MatInputModule } from @angular/material/input;
import { MatButtonModule } from @angular/material/button;
import { MatDatepickerModule } from @angular/material/datepicker;
import { MatNativeDateModule } from @angular/material/core;

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
