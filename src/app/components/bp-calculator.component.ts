import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { mons } from '../data/mons';
import { Mon } from '../data/types/mon';

@Component({
	selector: 'bp-calculator',
	templateUrl: '../views/bp-calculator.html',
})

export class BpCalculatorComponent {
	lvl = 100;
	justForm1  = false;
	isLastForm = false;
	isSubmited = false;
	orderedMons: Array<Array<string>> = [];

	/**
	 * Calculates the Mon BP based on the lvl received.
	 * @param mon Mon
	 */
	calculateBPByLvl(mon: Mon) {
		mon.bp = 0;

		Object.entries(mon.stats).forEach(
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			([stat, values]) => {
				mon.bp += ((values[0]) + (values[1] * this.lvl)) / 6;
			}
		);
	}

	/**
	 * Displays the ordered mons in the view.
	 * @param form NgForm
	 */
	displayOrderedMons(form: NgForm) {
		this.orderedMons = [];
		this.lvl = Number(form.value.lvl) || this.lvl;
		this.justForm1  = Boolean(form.value.justForm1);
		this.isLastForm = Boolean(form.value.isLastForm);
		this.orderMonsByBP();

		mons.forEach((mon) => {
			if (((this.isLastForm && mon.isLastForm) || !this.isLastForm) && ((this.justForm1 && mon.form === 1) || !this.justForm1)) {
				this.orderedMons.push([mon.name, mon.bp.toFixed(2), mon.image]);
			}
		});
	}

	/**
	 * Order the received array of Mons by BP.
	 */
	orderMonsByBP() {
		mons.forEach((mon: Mon) => {
			this.calculateBPByLvl(mon);
		});

		mons.sort((a, b) => a.bp > b.bp ? -1 : a.bp < b.bp ? 1 : 0);
	}
}
