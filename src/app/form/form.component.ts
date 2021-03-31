import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  profileForm: FormGroup;
  constructor(private fbuiler: FormBuilder) {}

  ngOnInit(): void {
    this.profileForm = this.fbuiler.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]*$')]],
        lastName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]*$')]],
        personId: ['', [Validators.required,
          Validators.pattern('^(0[1-9]|[12]\\d|3[01])(0[1-9]|1[0-2])([5-9]\\d+|\\d\\d-|[01]\\dA)\\d{3}[\\dA-Z]$')]],
        // 120464-126J
        eMail: ['', [Validators.required, Validators.email]],
        pickerDate: ['', [Validators.required]],
        termsAndConditions: ['', [Validators.requiredTrue]]
      });
  }

  onSubmit() {
    console.log(this.profileForm);

  }

  get firstName() {
    return this.profileForm.get('firstName');
  }
  get lastName() {
    return this.profileForm.get('lastName');
  }

  get personId() {
    return this.profileForm.get('personId');
  }

  get eMail() {
    return this.profileForm.get('eMail');
  }
  get pickerDate() {
    return this.profileForm.get('date');
  }
  get termsAndConditions() {
    return this.profileForm.get('termsAndConditions');
  }
}
