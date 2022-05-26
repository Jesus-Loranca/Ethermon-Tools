import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsSynergyCalculatorComponent } from './teams-synergy-calculator.component';

describe('TeamsSynergyCalculatorComponent', () => {
	let component: TeamsSynergyCalculatorComponent;
	let fixture: ComponentFixture<TeamsSynergyCalculatorComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ TeamsSynergyCalculatorComponent ]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TeamsSynergyCalculatorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
