import { Injectable } from '@angular/core';

@Injectable()
export class ConversionModel {
    public inValidResponse = true;
    public eurData: any = null;
    public usdData: any = null;
    public inrData: any = null;

    constructor() {
    }

    setInValidResponse(inValidResponse: any) {
        if (inValidResponse) {
            this.inValidResponse = inValidResponse;
        } else {
            this.inValidResponse = null;
        }
    }

    setEurData(eurData: any) {
        if (eurData) {
            this.eurData = eurData;
        } else {
            this.eurData = null;
        }
    }

    setUsdData(usdData: any) {
        if (usdData) {
            this.usdData = usdData;
        } else {
            this.usdData = null;
        }
    }

    setInrData(inrData: any) {
        if (inrData) {
            this.inrData = inrData;
        } else {
            this.inrData = null;
        }
    }
}
