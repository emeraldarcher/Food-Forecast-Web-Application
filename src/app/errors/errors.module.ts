import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsRoutingModule } from './errors-routing.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    imports: [
        CommonModule,

        ErrorsRoutingModule
    ],
    declarations: [
        PageNotFoundComponent
    ],
    exports: [
        PageNotFoundComponent
    ]
})

export class ErrorsModule { }
