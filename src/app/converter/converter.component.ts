import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ConversionModel } from '../conversionModel';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  public dropDownItems: String[];
  public fromDpDnSelected: string;
  public toDpDnSelected: string;
  public fromInput: Number;
  public toInput: Number;
  
  constructor(private conversionModel: ConversionModel) {
    this.dropDownItems = ['INR', 'USD', 'EUR'];
    this.toDpDnSelected = 'INR';
    this.fromDpDnSelected = 'EUR';
  }

  ngOnInit() {
  }

  dropDownListItemClick(event, type) {
    if (type === 'from') {
      this.fromDpDnSelected = event.target.innerText;
      this.onInputKeyUp('to');
    } else {
      this.toDpDnSelected = event.target.innerText;
      this.onInputKeyUp('from')
    }
  }

  onInputKeyUp(event) {
    if(this.fromInput || this.toInput) {
      let convRates: any;
      if (event === 'from') {
        convRates = this.getConversionRates(this.fromDpDnSelected);
        this.toInput = (Number(this.fromInput) * Number(convRates[this.toDpDnSelected]))
      } else {
        convRates = this.getConversionRates(this.toDpDnSelected);
        this.fromInput = (Number(this.toInput) * Number(convRates[this.fromDpDnSelected]))
      }
    }
  }

  getConversionRates(selectedDpDn) {
    let convRates: any;
    if (selectedDpDn === 'INR') {
      convRates = this.conversionModel.inrData;
    } else if (selectedDpDn === 'EUR') {
      convRates = this.conversionModel.eurData;
    } else if (selectedDpDn === 'USD') {
      convRates = this.conversionModel.usdData;
    }
    return convRates;
  }
}
