import { Injectable } from '@angular/core';
import { PrfReferredCustomerModel, PrfReferredCustomersFacade } from '../../root';
import { Observable } from 'rxjs';
import { PrfReferredCustomersConnector } from '../connectors/prf-referred-customers.connector';
import { Command, CommandService, EventService, Query, QueryService, QueryState, UserIdService } from '@spartacus/core';
import { map, switchMap, take, tap } from 'rxjs/operators';
import {
  CreateReferredCustomerEvent,
  DeleteReferredCustomerEvent,
  EditReferredCustomerEvent,
  LoadReferredCustomersEvent,
} from '../../root/events/prf-referred-customers.events';

@Injectable({
  providedIn: 'root',
})
export class PrfReferredCustomersService implements PrfReferredCustomersFacade {
  constructor(
    protected prfReferredCustomersConnector: PrfReferredCustomersConnector,
    protected queryService: QueryService,
    protected userIdService: UserIdService,
    protected commandService: CommandService,
    protected eventService: EventService
  ) {}

  getReferredCustomersState(): Observable<QueryState<PrfReferredCustomerModel[]>> {
    return this.referredCustomersQuery$.getState();
  }

  getReferredCustomers(): Observable<PrfReferredCustomerModel[]> {
    return this.getReferredCustomersState().pipe(map((state) => state.data ?? []));
  }

  deleteReferredCustomer(email: string) {
    this.deleteReferredCustomerCommand.execute(email);
  }

  createReferredCustomer(referredCustomer: PrfReferredCustomerModel): void {
    this.createReferredCustomerCommand.execute(referredCustomer);
  }

  editReferredCustomer(referredCustomer: PrfReferredCustomerModel): void {
    this.editReferredCustomerCommand.execute(referredCustomer);
  }

  protected referredCustomersQuery$: Query<PrfReferredCustomerModel[]> = this.queryService.create(
    () => {
      return this.userIdService
        .getUserId()
        .pipe(switchMap((userId) => this.prfReferredCustomersConnector.getReferredCustomers(userId)));
    },
    {
      reloadOn: [LoadReferredCustomersEvent],
    }
  );

  deleteReferredCustomerCommand: Command<string> = this.commandService.create<string>((email) => {
    return this.userIdService.getUserId().pipe(
      take(1),
      switchMap((userId) => this.prfReferredCustomersConnector.deleteReferredCustomer(userId, email)),
      tap(() => {
        this.eventService.dispatch({ email }, DeleteReferredCustomerEvent);
      })
    );
  });

  createReferredCustomerCommand: Command<PrfReferredCustomerModel> =
    this.commandService.create<PrfReferredCustomerModel>((referredCustomer) => {
      const { email } = referredCustomer;
      return this.userIdService.getUserId().pipe(
        take(1),
        switchMap((userId) => this.prfReferredCustomersConnector.createReferredCustomer(userId, referredCustomer)),
        tap(() => {
          this.eventService.dispatch({ email }, CreateReferredCustomerEvent);
        })
      );
    });

  editReferredCustomerCommand: Command<PrfReferredCustomerModel> = this.commandService.create<PrfReferredCustomerModel>(
    (referredCustomer) => {
      const { email } = referredCustomer;
      return this.userIdService.getUserId().pipe(
        take(1),
        switchMap((userId) => this.prfReferredCustomersConnector.editReferredCustomer(userId, referredCustomer)),
        tap(() => {
          this.eventService.dispatch({ email }, EditReferredCustomerEvent);
        })
      );
    }
  );
}
