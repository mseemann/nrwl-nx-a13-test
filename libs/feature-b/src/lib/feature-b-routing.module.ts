import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FeatureBModule} from './feature-b.module';
import {BComponentComponent} from './b-component/b-component.component';


const routes: Routes = [
    {
        path: '', component: BComponentComponent
    },
];

@NgModule({
    imports: [
        FeatureBModule,
        RouterModule.forChild(routes)
    ],
})
export class FeatureBRoutingModule {
}
