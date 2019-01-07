import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { BrokerUpdateComponent } from '../brokers/broker-update/broker-update.component';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<BrokerUpdateComponent> {
  canDeactivate(component: BrokerUpdateComponent) {
    if (component.editForm.dirty) {
      return confirm('Are you sure you want to continue?  Any unsaved changes will be lost');
    }
    return true;
  }
}
