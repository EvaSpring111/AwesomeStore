import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from 'src/app/model/Form.model';
import { FeedBack } from 'src/app/model/FeedBack.model';


@Injectable()
export class HttpService{

    constructor(private http: HttpClient){ }

    postData(form: Form){
        const body = {
          userName: form.userName,
          selectCity: form.selectCity,
          address: form.address,
          deliveryBy: form.deliveryBy,
          email: form.email,
          mobileNumber: form.mobileNumber,
          dateOfDeliveryFrom: form.dateOfDeliveryFrom,
          dateOfDeliveryTo: form.dateOfDeliveryTo,
        };

        return this.http.post('https://63444a5ddcae733e8fdc290a.mockapi.io/Store', body);
    }

    postFeedBAckForm( feedback: FeedBack){
      const body =  {
        userName: feedback.userName,
        phone: feedback.phone,
        email: feedback.email,
        feedBackText: feedback.feedBackText,
      };

      return this.http.post('https://63444a5ddcae733e8fdc290a.mockapi.io/FeedBack', body);
    }




}
