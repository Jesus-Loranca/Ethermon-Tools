import { Mon } from './types/mon';

export const mons: Array<Mon> = [
	{
		id: 1,
		name: 'Dilloom',
		types: ['leaf', 'toxin'],
		ancestors: [],
		stats: {
			hp: [82, 6],
			pa: [83, 3],
			pd: [83, 3],
			sa: [99, 3],
			sd: [102, 6],
			sp: [82, 6],
		},
		bp: 0,
	},
	{
		id: 2,
		name: 'Dynamouse',
		types: ['fire'],
		ancestors: [],
		stats: {
			hp: [76, 6],
			pa: [89, 6],
			pd: [77, 3],
			sa: [97, 6],
			sd: [94, 3],
			sp: [99, 3],
		},
		bp: 0,
	},
	{
		id: 3,
		name: 'Nageel',
		types: ['fire'],
		ancestors: [],
		stats: {
			hp: [78, 3],
			pa: [82, 3],
			pd: [102, 6],
			sa: [87, 6],
			sd: [101, 6],
			sp: [77, 3],
		},
		bp: 0,
	},
];
