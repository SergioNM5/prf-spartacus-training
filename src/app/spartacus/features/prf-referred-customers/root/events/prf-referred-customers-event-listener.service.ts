import { Injectable, OnDestroy } from '@angular/core';
import { EventService, GlobalMessageService, GlobalMessageType } from '@spartacus/core';
import { Subscription } from 'rxjs';
import {
  CreateReferredCustomerEvent,
  DeleteReferredCustomerEvent,
  EditReferredCustomerEvent,
  LoadReferredCustomersEvent,
} from './prf-referred-customers.events';

/**
 * Referred customer event listener.
 */
@Injectable({
  providedIn: 'root',
})
export class PrfReferredCustomersEventListener implements OnDestroy {
  protected subscriptions = new Subscription();

  constructor(protected eventService: EventService, protected globalMessageService: GlobalMessageService) {
    this.onReferredCustomerDeleted();
    this.onCreateReferredCustomer();
    this.onEditReferredCustomer();
  }

  protected onReferredCustomerDeleted(): void {
    this.subscriptions.add(
      this.eventService.get(DeleteReferredCustomerEvent).subscribe(({ email }) => {
        this.eventService.dispatch({}, LoadReferredCustomersEvent);

        this.globalMessageService.add('Referred Customer Deleted', GlobalMessageType.MSG_TYPE_WARNING);
      })
    );
  }

  protected onCreateReferredCustomer(): void {
    this.subscriptions.add(
      this.eventService.get(CreateReferredCustomerEvent).subscribe(({ email }) => {
        this.eventService.dispatch({}, LoadReferredCustomersEvent);

        this.globalMessageService.add('Referred Customer Created', GlobalMessageType.MSG_TYPE_CONFIRMATION);
      })
    );
  }

  protected onEditReferredCustomer(): void {
    this.subscriptions.add(
      this.eventService.get(EditReferredCustomerEvent).subscribe(({ email }) => {
        this.eventService.dispatch({}, LoadReferredCustomersEvent);

        this.globalMessageService.add('Referred Customer Edited', GlobalMessageType.MSG_TYPE_INFO);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
