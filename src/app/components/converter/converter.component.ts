import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  public dropDownItems: String[];
  @Output() dropDownEvent: EventEmitter<any> = new EventEmitter();
  public fromDpDnSelected: String;
  public toDpDnSelected: String;
  public fromInput: Number;
  public toInput: Number;
  constructor() {
    this.dropDownItems = ['INR', 'USD', 'EUR'];
    this.toDpDnSelected = "INR";
    this.fromDpDnSelected = "EUR";
  }

  ngOnInit() {
  }

  dropDownListItemClick(event, type) {
    if (type === 'from') {
      this.fromDpDnSelected = event.target.innerText;
    } else {
      this.toDpDnSelected = event.target.innerText;
    }
    this.onInputKeyUp(type)
  }

  onInputKeyUp(event) {
    if(event === 'from') {
      
    }
    console.log(this.fromInput, this.toInput);
  }


}
