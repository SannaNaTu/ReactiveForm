import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  public profileForm: FormGroup;
  public firstName: FormControl;
  public lastName: FormControl;
  public personId: FormControl;
  public eMail: FormControl;
  public pickerDate: FormControl;
  public termsAndConditions;

  public ngOnInit(): void {
    this.firstName = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern('^[a-zA-Z ]*$')]);
    this.lastName = new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]*$')]);
    this.personId = new FormControl('', [Validators.required, Validators.pattern('^(0[1-9]|[12]\\d|3[01])(0[1-9]|1[0-2])([5-9]\\d+|\\d\\d-|[01]\\dA)\\d{3}[\\dA-Z]$')]);
    // 120464-126J
    this.eMail = new FormControl('', [Validators.required, Validators.email]);
    this.pickerDate = new FormControl('', [Validators.required]);
    this.termsAndConditions = new FormControl('', [Validators.requiredTrue]);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName : this.lastName,
      personId : this.personId,
      eMail : this.eMail,
      pickerDate: this.pickerDate,
      termsAndConditions : this.termsAndConditions
    });
  }


  public onSubmit(): void {
    if (this.profileForm.valid) {console.log('valid');
    }else
  {
  console.log('not valid');
  }
  }
}
