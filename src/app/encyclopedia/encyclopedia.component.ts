import { Component } from '@angular/core';
import { mons } from 'src/data/mons';

@Component({
	selector: 'encyclopedia',
	templateUrl: './encyclopedia.component.html',
})
export class EncyclopediaComponent {
	mons = mons;
}
