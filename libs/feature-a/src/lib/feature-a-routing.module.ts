import {NgModule} from '@angular/core';
import {FeatureAModule} from './feature-a.module';
import {RouterModule, Routes} from '@angular/router';
import {AComponentComponent} from './a-component/a-component.component';

const routes: Routes = [
    {
        path: '', component: AComponentComponent
    },
];

@NgModule({
    imports: [
        FeatureAModule,
        RouterModule.forChild(routes)
    ],
})
export class FeatureARoutingModule {
}
