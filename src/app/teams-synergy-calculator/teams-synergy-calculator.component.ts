import { Component } from '@angular/core';
import { Team } from 'src/data/types/team';

@Component({
	selector: 'teams-synergy-calculator',
	templateUrl: './teams-synergy-calculator.component.html'
})
export class TeamsSynergyCalculatorComponent {
	synergyTeams: Array<Team> = [];
}
