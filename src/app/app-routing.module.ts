import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BpCalculatorComponent } from './bp-calculator/bp-calculator.component';
import { EncyclopediaComponent } from './encyclopedia/encyclopedia.component';
import { TeamsSynergyCalculatorComponent } from './teams-synergy-calculator/teams-synergy-calculator.component';

const routes: Routes = [
	{ path: 'encyclopedia', component: EncyclopediaComponent },
	{ path: 'bp-calculator', component: BpCalculatorComponent },
	{ path: 'teams-synergy-calculator', component: TeamsSynergyCalculatorComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
