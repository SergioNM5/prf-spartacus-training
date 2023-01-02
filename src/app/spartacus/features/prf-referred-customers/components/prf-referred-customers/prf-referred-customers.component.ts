import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomFormValidators } from '@spartacus/storefront';
import { PrfReferredCustomerModel, PrfReferredCustomersFacade } from '../../root';

@Component({
  selector: 'prf-referred-customers',
  templateUrl: './prf-referred-customers.component.html',
  styleUrls: ['./prf-referred-customers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrfReferredCustomersComponent implements OnInit {
  @Input()
  referredCustomerData: PrfReferredCustomerModel;

  @Input()
  actionBtnLabel: string;

  @Input()
  cancelBtnLabel: string;

  @Output()
  submitReferredCustomer = new EventEmitter<any>();

  @Output()
  backToReferredCustomer = new EventEmitter<any>();

  referredCustomerForm: FormGroup = this.fb.group({
    documentTypeCode: ['', Validators.required],
    documentNumber: ['', Validators.required],
    email: ['', [Validators.required, CustomFormValidators.emailValidator]],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
  });

  documentTypes = [
    { code: 'GC', name: 'Green Card' },
    { code: 'PP', name: 'Passport' },
    { code: 'RC', name: 'Residence Card' },
  ];

  constructor(protected fb: FormBuilder, protected prfReferredCustomersService: PrfReferredCustomersFacade) {}

  ngOnInit(): void {
    if (this.referredCustomerData && Object.keys(this.referredCustomerData).length) {
      this.referredCustomerForm.patchValue(this.referredCustomerData);
    }
  }

  back(): void {
    this.backToReferredCustomer.emit();
  }

  verifyReferredCustomer(): void {
    if (this.referredCustomerForm.valid) {
      if (this.referredCustomerForm.pristine) {
        // referred customer form value not changed
        // ignore duplicate referred customer
        this.submitReferredCustomer.emit(undefined);
      } else {
        this.submitReferredCustomer.emit(this.referredCustomerForm.value);
      }
    } else {
      this.referredCustomerForm.markAllAsTouched();
    }
  }
}
