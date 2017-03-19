import { NgModule } from '@angular/core';

import { CanActivateViaAuthGuard } from './auth-guard.provider';

@NgModule({
    providers: [
        CanActivateViaAuthGuard
    ]
})

export class ProvidersModule { }
