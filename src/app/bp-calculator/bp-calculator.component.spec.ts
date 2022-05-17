import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BpCalculatorComponent } from './bp-calculator.component';

describe('BpCalculatorComponent', () => {
	let component: BpCalculatorComponent;
	let fixture: ComponentFixture<BpCalculatorComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [BpCalculatorComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(BpCalculatorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
