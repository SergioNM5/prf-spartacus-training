import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PrfReferredCustomerModel, PrfReferredCustomersFacade } from '../../root';
import { delay, map } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';
import { Card, CardAction } from '@spartacus/storefront';
import { TranslationService } from '@spartacus/core';

@Component({
  selector: 'prf-referred-customers-list',
  templateUrl: './prf-referred-customers-list.component.html',
  styleUrls: ['./prf-referred-customers-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrfReferredCustomersListComponent implements OnInit {
  referredCustomersState$ = this.prfReferredCustomersService.getReferredCustomersState().pipe(delay(1000));

  showEditReferredCustomerForm = false;
  showCreateReferredCustomerForm = false;
  currentReferredCustomer: PrfReferredCustomerModel;

  constructor(
    protected prfReferredCustomersService: PrfReferredCustomersFacade,
    protected translation: TranslationService
  ) {}

  ngOnInit(): void {
    this.referredCustomersState$.subscribe((state) => {
      console.log(state);
    });
  }

  getCardContent(referredCustomer: PrfReferredCustomerModel): Observable<Card> {
    return combineLatest([this.translation.translate('common.delete'), this.translation.translate('common.edit')]).pipe(
      map(([textDelete, textEdit]) => {
        const actions: CardAction[] = [];
        actions.push({ name: textDelete, event: 'delete' });
        actions.push({ name: textEdit, event: 'edit' });

        return {
          textBold: referredCustomer.documentNumber,
          text: [
            referredCustomer.documentType,
            referredCustomer.firstName,
            referredCustomer.lastName,
            referredCustomer.email,
          ],
          actions,
        } as Card;
      })
    );
  }

  deleteReferredCustomer(email?: string) {
    if (email) {
      this.prfReferredCustomersService.deleteReferredCustomer(email);
    }
  }

  handleEditReferredCustomerAction(referredCustomer: PrfReferredCustomerModel) {
    this.currentReferredCustomer = referredCustomer;
    this.showEditReferredCustomerForm = true;
  }

  handleCreateReferredCustomerAction() {
    this.showCreateReferredCustomerForm = true;
  }

  editReferredCustomerSubmit(referredCustomer: PrfReferredCustomerModel) {
    this.showEditReferredCustomerForm = false;
    this.prfReferredCustomersService.editReferredCustomer(referredCustomer);
  }

  editReferredCustomerCancel() {
    this.showEditReferredCustomerForm = false;
  }

  createReferredCustomerSubmit(referredCustomer: PrfReferredCustomerModel) {
    this.showCreateReferredCustomerForm = false;
    this.prfReferredCustomersService.createReferredCustomer(referredCustomer);
  }

  createReferredCustomerCancel() {
    this.showCreateReferredCustomerForm = false;
  }
}
