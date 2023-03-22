import { Component, OnInit } from '@angular/core';
import { FeedBack } from 'src/app/model/FeedBack.model';
import { FormControl, Validators, FormBuilder} from '@angular/forms';

import { HttpService } from 'src/app/services/sendForm.service';

@Component({
  selector: 'app-feed-back-form',
  templateUrl: './feed-back-form.component.html',
  styleUrls: ['./feed-back-form.component.css'],
  providers: [ HttpService]
})
export class FeedBackFormComponent implements OnInit {

  feedbackForm = this.formBuilder.group({
    userName: '',
    phone: 0,
    email: '',
    feedBackText: '',
  });

  receivedDate: FeedBack | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
  }

  userName = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Zа-яА-Я]*')]);

  getNameErrorMessage(){
    if( this.userName.hasError('required') || this.userName.hasError('pattern')){
      return `Please, enter your name.
              Name could include only letters`;
    }
    return this.userName.hasError('userName') ? 'Not a valid name' : '';
  }

    phone = new FormControl('', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'), Validators.min(10)]);

    getMobileErrorMessage() {
      if (this.phone.hasError('required') || this.phone.hasError('pattern')){
        return `Please, enter your mobile number.
                Sample (098)1234567`;
      }
      return this.phone.hasError('mobileNumber') ? 'Not a valid number' : '';
    }
    email = new FormControl('', [Validators.required, Validators.email]);

    getMailErrorMessage() {
      if (this.email.hasError('required')) {
        return 'Please,  enter your mail';
      }
      return this.email.hasError('email') ? 'Not a valid email' : '';
    }

    feedBackText = new FormControl('', [Validators.required, Validators.maxLength(256), Validators.min(5)]);

    getFeedBackErrorMessage() {
      if (this.feedBackText.hasError('required') || this.feedBackText.hasError('minLength') || this.feedBackText.hasError('maxLength')) {
        return 'Please,  enter your feedback';
      }
      return this.feedBackText.hasError('required') ? 'Empty space' : '';
    }

    sendFeedBack( feedback: FeedBack){
      console.warn('Your feedback has been submitted', this.feedbackForm.value);

      this.httpService.postFeedBAckForm(feedback)
      .subscribe({
          next:(data: any) => {
            this.receivedDate = data;
          },
            error: error => console.log(error)
      });
      this.feedbackForm.reset();
      window.AnimationTimeline
  }

}
