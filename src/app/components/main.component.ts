import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { mons } from '../data/mons';
import { Mon } from '../data/types/mon';

@Component({
	selector: 'main',
	templateUrl: '../views/main.html',
})

export class AppComponent {
	/**
	 * Calculates the Mon BP based on the lvl received.
	 * @param mon Mon
	 * @param lvl number
	 */
	calculateStatsByLvl(mon: Mon, lvl: number) {
		Object.entries(mon.stats).forEach(
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			([stat, values]) => {
				mon.bp += values[0] + values[1] * lvl;
			}
		);
	}

	/**
	 * Order the received array of Mons by BP.
	 * @param form ngForm
	 */
	orderMonsByBP(form: NgForm) {
		const lvl: number = Number(form.value.lvl) || 100;

		mons.forEach((mon: Mon) => {
			this.calculateStatsByLvl(mon, lvl);
		});

		mons.sort((a, b) => a.bp - b.bp);
	}
}
