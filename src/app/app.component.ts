import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service'
import { ConversionModel } from './conversionModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private appService: AppService,
    private conversionModel: ConversionModel) {
  }

  ngOnInit() {
    this.appService.getConversionRate()
      .subscribe(res => this.handleGetConversionRateServiceSuccess(res),
        err => this.handleGetConversionRateServiceFailure(err));
  }

  handleGetConversionRateServiceSuccess(response) {
    if (response.success) {
      this.conversionModel.setEurData(response.rates);
      const usdData = {
        INR: 0,
        EUR: 0,
        USD: 1
      };

      usdData.EUR = Number((response.rates.EUR / response.rates.USD).toFixed(6));
      usdData.INR = Number((response.rates.INR / response.rates.USD).toFixed(6));
      this.conversionModel.setUsdData(usdData);

      const inrData = {
        INR: 1,
        EUR: 0,
        USD: 0
      };

      inrData.EUR = Number((response.rates.EUR / response.rates.INR).toFixed(6));
      inrData.USD = Number((response.rates.USD / response.rates.INR).toFixed(6));
      this.conversionModel.setInrData(inrData);
      this.conversionModel.setInValidResponse(false);
      console.log(this.conversionModel.inrData, this.conversionModel.eurData, this.conversionModel.usdData);
    } else {
      this.handleGetConversionRateServiceFailure(response);
    }
  }

  handleGetConversionRateServiceFailure(error) {
    console.log(error);
  }

  firstDropDownEvent(event) {
    console.log(event);
  }

  secondDropDownEvent(event) {
    console.log(event);
  }
}
