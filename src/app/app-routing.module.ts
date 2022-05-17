import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BpCalculatorComponent } from './bp-calculator/bp-calculator.component';

const routes: Routes = [
	{ path: 'bp-calculator', component: BpCalculatorComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
