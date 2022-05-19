import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NxWelcomeComponent} from './nx-welcome.component';
import {SharedModule} from '@nrwl-nx-a13-test/shared';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'feature-a',
        loadChildren: () => import('@nrwl-nx-a13-test/feature-a').then(m => m.FeatureARoutingModule)
    },
    {
        path: 'feature-b',
        loadChildren: () => import('@nrwl-nx-a13-test/feature-b').then(m => m.FeatureBRoutingModule)
    },
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        SharedModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
