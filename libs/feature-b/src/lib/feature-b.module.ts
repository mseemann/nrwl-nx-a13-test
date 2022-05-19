import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BComponentComponent } from './b-component/b-component.component';
import {SharedModule} from '@nrwl-nx-a13-test/shared';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [BComponentComponent],
})
export class FeatureBModule {}
