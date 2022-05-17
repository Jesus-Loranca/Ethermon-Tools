import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { mons } from '../data/mons';
import { Mon } from '../data/types/mon';

@Component({
	selector: 'app-bp-calculator',
	templateUrl: './bp-calculator.component.html',
})
export class BpCalculatorComponent {
	lvl = 100;
	types = [''];
	stats = [''];
	rarities = [''];
	forms = [''];
	isSubmited = false;
	orderedMons: Array<Array<string>> = [];

	/**
	 * Calculates the Mon BP based on the lvl received.
	 * @param mon Mon
	 */
	calculateBPByLvl(mon: Mon) {
		mon.bp = 0;
		const allStats: boolean = (this.stats.length === 1 && this.stats.includes(''));
		const statsCount: number = allStats ? 6 : this.stats.length;

		Object.entries(mon.stats).forEach(([stat, values]) => {
			if (allStats || this.stats.includes(stat)) {
				mon.bp += (values[0] + values[1] * this.lvl) / statsCount;
			}
		});
	}

	/**
	 * Displays the ordered mons in the view.
	 * @param form NgForm
	 */
	displayOrderedMons(form: NgForm) {
		this.orderedMons = [];
		this.lvl = Number(form.value.lvl) || this.lvl;
		this.types = form.value.types || [''];
		this.stats = form.value.stats || [''];
		this.rarities = form.value.rarities || [''];
		this.forms = form.value.forms || [''];

		this.orderMonsByBP();

		mons.forEach((mon) => {
			this.filterMons(mon);
		});
	}

	/**
	 * Filters the mons to be displayed based on the form data.
	 * @param mon Mon
	 */
	filterMons(mon: Mon) {
		const isAcceptedType: boolean =
			(this.types.length === 1 && this.types.includes('')) ||
			this.types.some((type) => mon.types.indexOf(type) >= 0);
		const isAcceptedRarty: boolean =
			(this.rarities.length === 1 && this.rarities.includes('')) || this.rarities.includes(mon.rarity);
		const isAcceptedForm: boolean =
			(this.forms.length === 1 && this.forms.includes('')) || this.forms.includes(String(mon.form));

		if (isAcceptedType && isAcceptedRarty && isAcceptedForm) {
			this.orderedMons.push([mon.name, mon.bp.toFixed(2), mon.image]);
		}
	}

	/**
	 * Order the received array of Mons by BP.
	 */
	orderMonsByBP() {
		mons.forEach((mon: Mon) => {
			this.calculateBPByLvl(mon);
		});

		mons.sort((a, b) => (a.bp > b.bp ? -1 : a.bp < b.bp ? 1 : 0));
	}
}
