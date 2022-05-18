import { Component, OnInit } from '@angular/core';
import { mons } from 'src/data/mons';
import { Mon } from 'src/data/types/mon';

@Component({
	selector: 'encyclopedia',
	templateUrl: './encyclopedia.component.html',
})
export class EncyclopediaComponent implements OnInit {
	encyclopedia: Array<Mon> = [];

	ngOnInit() {
		this.encyclopedia = mons.slice(0);
	}
}
