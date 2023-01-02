import { CxEvent } from '@spartacus/core';

export abstract class ReferredCustomersEvent extends CxEvent {
  userId?: string;
}

export class DeleteReferredCustomerEvent extends ReferredCustomersEvent {
  email?: string;
  static readonly type = 'DeleteReferredCustomersEvent';
}

export class LoadReferredCustomersEvent extends ReferredCustomersEvent {
  static readonly type = 'LoadReferredCustomersEvent';
}

export class CreateReferredCustomerEvent extends ReferredCustomersEvent {
  email?: string;
  static readonly type = 'CreateReferredCustomerEvent';
}

export class EditReferredCustomerEvent extends ReferredCustomersEvent {
  email?: string;
  static readonly type = 'EditReferredCustomerEvent';
}
