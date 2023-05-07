import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaskComponent } from './mask/mask.component';
import { MotwComponent } from './motw/motw.component';

const routes: Routes = [
    { path: 'motw', component: MotwComponent },
    { path: 'mask', component: MaskComponent },
    { path: '**', redirectTo: "/motw" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
