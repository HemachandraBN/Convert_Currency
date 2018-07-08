import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { ConverterComponent } from './converter/converter.component';
// Services
import { ConversionModel } from './conversionModel';
import { AppService } from './app.service'

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule
  ],
  providers: [AppService, ConversionModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
