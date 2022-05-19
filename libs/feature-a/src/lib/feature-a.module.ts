import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponentComponent } from './a-component/a-component.component';
import {SharedModule} from '@nrwl-nx-a13-test/shared';

@NgModule({
    imports: [CommonModule, SharedModule],
  declarations: [AComponentComponent],
})
export class FeatureAModule {}
