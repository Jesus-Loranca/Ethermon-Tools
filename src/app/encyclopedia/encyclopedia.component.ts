import { Component, OnInit } from '@angular/core';
import { mons } from 'src/data/mons';
import { Mon } from 'src/data/types/mon';

@Component({
	selector: 'encyclopedia',
	templateUrl: './encyclopedia.component.html',
})
export class EncyclopediaComponent  implements OnInit {
	catched: Array<string> = ['Alligwamp', 'Aquary', 'Armordigoal', 'Aromerita','Batflare', 'Blankosu', 'Cavachnid', 'Cesstoid','Chambrawl','Chinchype', 'Chromothic', 'Chulember', 'Clothom', 'Cobrus', 'Coyoteez', 'Criminiac', 'Cryptise', 'Dillow', 'Dorentu', 'Dracobra', 'Fantasnut', 'Florost', 'Frosslord', 'Fuenago', 'Geckno', 'Geckelic', 'Geerex', 'Grandorent', 'Gremin', 'Hawkrey', 'Inferacoon', 'Infiluv', 'Malakel\'e', 'Krakowee', 'Kyberra','Lectrobe', 'Lemeeglar', 'Lilspri', 'Lollipunch', 'Madfyn', 'Mianari', 'Mindallion', 'Mintol', 'Monstratos', 'Moonara', 'Moranagi', 'Morinori', 'Mushmite', 'Naviumi', 'Noxibeet', 'Nuklectid','Odwig', 'Duscre', 'Ekoraft', 'Emperazor', 'Endorr', 'Expertri', 'Kahukel\'e', 'Matara','Matarama', 'Mawverize', 'Mechloo', 'Omnom', 'Polupa', 'Primasham','Pudde','Purgast','Pyrode', 'Qairrel','Raxplode', 'Redhandit', 'Reflectre', 'Resurvy','Ribibrawl', 'Samudangi', 'Sauntler','Silvyx', 'Smeltal', 'Snobbit', 'Spoxie','Spoxin','Swifty','Talisment','Thermolophus','Tipsillar', 'Tobeno', 'Tygloo','Vermillios', 'Vitisir','Vivorin', 'Vorvosip', 'Wallopop','Watadzumi', 'Wrecktile','Wrektric','Yumee','Zapillar','Fuirrel', 'Armadigoal', 'Endrowth', 'Iquander', 'Occlusk', 'Palytid', 'Dilloom', 'Candeliria', 'Kyari', 'Vibe', 'Capareef', 'Zyracier', 'Dusprite', 'Felistar', 'Sonectid', 'Piggicius', 'Lunaeire', 'Nobilegg', 'Inkami', 'Mizumi', 'Inferbat', 'Flaraton', 'Roichirp', 'Intelix', 'Devostoric', 'Cannubis', 'Krabboul', 'Tenteink', 'Coronoid', 'Hambrisk', 'Squake', 'Polynimo', 'Dynamouse', 'Geenee', 'Pricktile', 'Emperiegle', 'Foxeez', 'Surinari', 'Liscious', 'Greipawn', 'Keradon', 'Grubgas', 'Scubella', 'Spoulder', 'Cremortus', 'Dillossus', 'Pistaccoul', 'Vaudequin', 'Tundrill', 'Clawconut', 'Pangrove', 'Aphroxid', 'Dehedra', 'Eekape', 'Nageel', 'Oculid', 'Wartoink', 'Deefyn', 'Watuber', 'Berrball', 'Onchor', 'Blockid', 'Krubble', 'Moldec', 'Vexigon', 'Puremu', 'Opmarine', 'Blockall', 'Kikapole', 'Tekagon', 'Clawgigus', 'Pangrass', 'Froost', 'Fabercei', 'Galaleo', ];
	mons = mons;

	ngOnInit() {
		const filteredMons: Array<Mon> = [];

		this.mons.forEach((mon) => {
			if (!this.catched.includes(mon.name)) {
				filteredMons.push(mon);
			}
		});

		this.mons = filteredMons;
	}
}
