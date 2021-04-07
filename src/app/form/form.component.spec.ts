import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { FormComponent } from './form.component';
import {FormBuilder, FormGroup, ReactiveFormsModule, FormControl} from '@angular/forms';



describe('FormComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [FormComponent]
    })
      .compileComponents();
  });

  let component: FormComponent;

  beforeEach(() => {
    const fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });


  describe('firstName', () => {
  it('should be valid with more than 2 characters', async(() => {
    component.firstName.setValue('aaaaaaa');

    expect(component.firstName.valid).toBeTruthy();
  }));

  it('should be required', async(() => {
    expect(component.firstName.errors.required).toBeDefined();

    component.firstName.setValue('a');
    expect(component.firstName.errors.required).toBeUndefined();
  }));
  it('should have an error with fewer than 2 characters', async(() => {
    component.firstName.setValue('a');
    expect(component.firstName.errors.minlength).toBeDefined();
  }));
  it('should have an error with more than 10 characters', async(() => {
    component.firstName.setValue('aaaaaaaaaaa');
    expect(component.firstName.errors.maxlength).toBeDefined();
  }));
});
  describe('personId', () => {
    it('should be real ID', async(() => {
      component.personId.setValue('120464-126J');

      expect(component.personId.valid).toBeTruthy();
    }));

    it('should be required', async(() => {
      expect(component.personId.errors.required).toBeDefined();

      component.personId.setValue('123456-1234');
      expect(component.personId.errors.required).toBeUndefined();
    }));
  });
});
