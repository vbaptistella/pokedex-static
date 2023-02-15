const pokemon = [
	{
		id: 1,
		name: 'Bulbasaur',
		image: 'https://archives.bulbagarden.net/media/upload/7/76/Spr_5b_001.png',
		type: [ 'grass', 'poison' ],
		gen: 'I',
		ev: [ 2, 3 ]
	},
	{
		id: 2,
		name: 'Ivysaur',
		image: 'https://archives.bulbagarden.net/media/upload/e/e1/Spr_5b_002.png',
		type: [ 'grass', 'poison' ],
		gen: 'I'
	},
	{
		id: 3,
		name: 'Venusaur',
		image: 'https://archives.bulbagarden.net/media/upload/6/68/Spr_5b_003_m.png',
		type: [ 'grass', 'poison' ],
		gen: 'I'
	},
	{
		id: 4,
		name: 'Charmander',
		image: 'https://archives.bulbagarden.net/media/upload/0/0a/Spr_5b_004.png',
		type: [ 'fire' ],
		gen: 'I',
		ev: [ 5, 6 ]
	},
	{
		id: 5,
		name: 'Charmeleon',
		image: 'https://archives.bulbagarden.net/media/upload/0/09/Spr_5b_005.png',
		type: [ 'fire' ],
		gen: 'I'
	},
	{
		id: 6,
		name: 'Charizard',
		image: 'https://archives.bulbagarden.net/media/upload/e/e1/Spr_5b_006.png',
		type: [ 'fire', 'flying' ],
		gen: 'I'
	},
	{
		id: 7,
		name: 'Squirtle',
		image: 'https://archives.bulbagarden.net/media/upload/5/59/Spr_5b_007.png',
		type: [ 'water' ],
		gen: 'I',
		ev: [ 8, 9 ]
	},
	{
		id: 8,
		name: 'Wartotle',
		image: 'https://archives.bulbagarden.net/media/upload/0/0b/Spr_5b_008.png',
		type: [ 'water' ],
		gen: 'I'
	},
	{
		id: 9,
		name: 'Blastoise',
		image: 'https://archives.bulbagarden.net/media/upload/3/3d/Spr_5b_009.png',
		type: [ 'water' ],
		gen: 'I'
	},
	{
		id: 10,
		name: 'Caterpie',
		image: 'https://archives.bulbagarden.net/media/upload/8/83/Spr_5b_010.png',
		type: [ 'bug' ],
		gen: 'I',
		ev: [ 11, 12 ]
	},
	{
		id: 11,
		name: 'Metapod',
		image: 'https://archives.bulbagarden.net/media/upload/2/2b/Spr_5b_011.png',
		type: [ 'bug' ],
		gen: 'I'
	},
	{
		id: 12,
		name: 'Butterfree',
		image: 'https://archives.bulbagarden.net/media/upload/7/7c/Spr_5b_012_m.png',
		type: [ 'bug', 'flying' ],
		gen: 'I'
	},
	{
		id: 13,
		name: 'Weedle',
		image: 'https://archives.bulbagarden.net/media/upload/9/96/Spr_5b_013.png',
		type: [ 'bug' ],
		gen: 'I',
		ev: [ 14, 15 ]
	},
	{
		id: 14,
		name: 'Kakuna',
		image: 'https://archives.bulbagarden.net/media/upload/0/0e/Spr_5b_014.png',
		type: [ 'bug' ],
		gen: 'I'
	},
	{
		id: 15,
		name: 'Beedrill',
		image: 'https://archives.bulbagarden.net/media/upload/a/a5/Spr_5b_015.png',
		type: [ 'bug', 'flying' ],
		gen: 'I'
	},
	{
		id: 16,
		name: 'Pidgey',
		image: 'https://archives.bulbagarden.net/media/upload/0/08/Spr_5b_016.png',
		type: [ 'normal', 'flying' ],
		gen: 'I',
		ev: [ 17, 18 ]
	},
	{
		id: 17,
		name: 'Pidgeotto',
		image: 'https://archives.bulbagarden.net/media/upload/a/aa/Spr_5b2_017.png',
		type: [ 'normal', 'flying' ],
		gen: 'I'
	},
	{
		id: 18,
		name: 'Pidgeot',
		image: 'https://archives.bulbagarden.net/media/upload/8/8a/Spr_5b_018.png',
		type: [ 'normal', 'flying' ],
		gen: 'I'
	},
	{
		id: 19,
		name: 'Rattata',
		image: 'https://archives.bulbagarden.net/media/upload/d/d5/Spr_5b_019_m.png',
		type: [ 'normal' ],
		gen: 'I',
		ev: [ 20 ]
	},
	{
		id: 20,
		name: 'Raticate',
		image: 'https://archives.bulbagarden.net/media/upload/4/47/Spr_5b_020_m.png',
		type: [ 'normal' ],
		gen: 'I'
	},
	{
		id: 21,
		name: 'Spearow',
		image: 'https://archives.bulbagarden.net/media/upload/0/05/Spr_5b_021.png',
		type: [ 'normal', 'flying' ],
		gen: 'I',
		ev: [ 22 ]
	},
	{
		id: 22,
		name: 'Fearow',
		image: 'https://archives.bulbagarden.net/media/upload/2/29/Spr_5b_022.png',
		type: [ 'normal', 'flying' ],
		gen: 'I'
	},
	{
		id: 23,
		name: 'Ekans',
		image: 'https://archives.bulbagarden.net/media/upload/1/18/Spr_5b_023.png',
		type: [ 'poison' ],
		gen: 'I',
		ev: [ 24 ]
	},
	{
		id: 24,
		name: 'Arbok',
		image: 'https://archives.bulbagarden.net/media/upload/0/00/Spr_5b2_024.png',
		type: [ 'poison' ],
		gen: 'I'
	},
	{
		id: 172,
		name: 'Pichu',
		image: 'https://archives.bulbagarden.net/media/upload/0/03/Spr_5b2_172.png',
		type: [ 'electric' ],
		gen: 'II',
		ev: [ 25, 26 ]
	},
	{
		id: 25,
		name: 'Pikachu',
		image: 'https://archives.bulbagarden.net/media/upload/2/2b/Spr_5b2_025_m.png',
		type: [ 'electric' ],
		gen: 'I'
	},
	{
		id: 26,
		name: 'Raichu',
		image: 'https://archives.bulbagarden.net/media/upload/9/98/Spr_5b2_026_m.png',
		type: [ 'electric' ],
		gen: 'I'
	},
	{
		id: 27,
		name: 'Sandshrew',
		image: 'https://archives.bulbagarden.net/media/upload/1/17/Spr_5b_027.png',
		type: [ 'ground' ],
		gen: 'I',
		ev: [ 28 ]
	},
	{
		id: 28,
		name: 'Sandslash',
		image: 'https://archives.bulbagarden.net/media/upload/b/b8/Spr_5b_028.png',
		type: [ 'ground' ],
		gen: 'I'
	},
	{
		id: 29,
		name: 'Nidoran ♀',
		image: 'https://archives.bulbagarden.net/media/upload/a/a2/Spr_5b_029.png',
		type: [ 'poison' ],
		gen: 'I',
		ev: [ 30, 31 ]
	},
	{
		id: 30,
		name: 'Nidorina',
		image: 'https://archives.bulbagarden.net/media/upload/a/a8/Spr_5b_030.png',
		type: [ 'poison' ],
		gen: 'I'
	},
	{
		id: 31,
		name: 'Nidoqueen',
		image: 'https://archives.bulbagarden.net/media/upload/5/57/Spr_5b2_031.png',
		type: [ 'poison', 'ground' ],
		gen: 'I'
	},
	{
		id: 32,
		name: 'Nidoran ♂',
		image: 'https://archives.bulbagarden.net/media/upload/5/5d/Spr_5b_032.png',
		type: [ 'poison' ],
		gen: 'I',
		ev: [ 33, 34 ]
	},
	{
		id: 33,
		name: 'Nidorino',
		image: 'https://archives.bulbagarden.net/media/upload/1/16/Spr_5b_033.png',
		type: [ 'poison' ],
		gen: 'I'
	},
	{
		id: 34,
		name: 'Nidoking',
		image: 'https://archives.bulbagarden.net/media/upload/4/46/Spr_5b_034.png',
		type: [ 'poison', 'ground' ],
		gen: 'I'
	},
	{
		id: 173,
		name: 'Cleffa',
		image: 'https://archives.bulbagarden.net/media/upload/c/c3/Spr_5b_173.png',
		type: [ 'fairy' ],
		gen: 'II',
		ev: [ 35, 36 ]
	},
	{
		id: 35,
		name: 'Clefairy',
		image: 'https://archives.bulbagarden.net/media/upload/7/76/Spr_5b_035.png',
		type: [ 'fairy' ],
		gen: 'I'
	},
	{
		id: 36,
		name: 'Clefable',
		image: 'https://archives.bulbagarden.net/media/upload/d/d4/Spr_5b_036.png',
		type: [ 'fairy' ],
		gen: 'I'
	},
	{
		id: 37,
		name: 'Vulpix',
		image: 'https://archives.bulbagarden.net/media/upload/e/ec/Spr_5b_037.png',
		type: [ 'fire' ],
		gen: 'I',
		ev: [ 38 ]
	},
	{
		id: 38,
		name: 'Ninetales',
		image: 'https://archives.bulbagarden.net/media/upload/6/6f/Spr_5b_038.png',
		type: [ 'fire' ],
		gen: 'I'
	},
	{
		id: 174,
		name: 'Igglybuff',
		image: 'https://archives.bulbagarden.net/media/upload/3/33/Spr_5b_174.png',
		type: [ 'normal', 'fairy' ],
		gen: 'II',
		ev: [ 39, 40 ]
	},
	{
		id: 39,
		name: 'Jigglypuff',
		image: 'https://archives.bulbagarden.net/media/upload/b/bd/Spr_5b_039.png',
		type: [ 'normal', 'fairy' ],
		gen: 'I'
	},
	{
		id: 40,
		name: 'Wigglytuff',
		image: 'https://archives.bulbagarden.net/media/upload/9/9c/Spr_5b_040.png',
		type: [ 'normal', 'fairy' ],
		gen: 'I'
	},
	{
		id: 41,
		name: 'Zubat',
		image: 'https://archives.bulbagarden.net/media/upload/0/01/Spr_5b_041_m.png',
		type: [ 'poison', 'flying' ],
		gen: 'I',
		ev: [ 42, 169 ]
	},
	{
		id: 42,
		name: 'Golbat',
		image: 'https://archives.bulbagarden.net/media/upload/5/5e/Spr_5b_042_m.png',
		type: [ 'poison', 'flying' ],
		gen: 'I'
	},
	{
		id: 169,
		name: 'Crobat',
		image: 'https://archives.bulbagarden.net/media/upload/5/51/Spr_5b_169.png',
		type: [ 'poison', 'flying' ],
		gen: 'II'
	},
	{
		id: 43,
		name: 'Oddish',
		image: 'https://archives.bulbagarden.net/media/upload/1/1a/Spr_5b_043.png',
		type: [ 'grass', 'poison' ],
		gen: 'I',
		ev: [ 44, 45, 182 ]
	},
	{
		id: 44,
		name: 'Gloom',
		image: 'https://archives.bulbagarden.net/media/upload/e/ea/Spr_5b_044_m.png',
		type: [ 'grass', 'poison' ],
		gen: 'I'
	},
	{
		id: 45,
		name: 'Vileplume',
		image: 'https://archives.bulbagarden.net/media/upload/1/1e/Spr_5b_045_m.png',
		type: [ 'grass', 'poison' ],
		gen: 'I'
	},
	{
		id: 182,
		name: 'Belossom',
		image: 'https://archives.bulbagarden.net/media/upload/c/c4/Spr_5b_182.png',
		type: [ 'grass' ],
		gen: 'II'
	},
	{
		id: 46,
		name: 'Paras',
		image: 'https://archives.bulbagarden.net/media/upload/c/c6/Spr_5b2_046.png',
		type: [ 'bug', 'grass' ],
		gen: 'I',
		ev: [ 47 ]
	},
	{
		id: 47,
		name: 'Parasect',
		image: 'https://archives.bulbagarden.net/media/upload/9/90/Spr_5b_047.png',
		type: [ 'bug', 'grass' ],
		gen: 'I'
	},
	{
		id: 48,
		name: 'Venonat',
		image: 'https://archives.bulbagarden.net/media/upload/3/39/Spr_5b_048.png',
		type: [ 'bug', 'poison' ],
		gen: 'I',
		ev: [ 49 ]
	},
	{
		id: 49,
		name: 'Venomoth',
		image: 'https://archives.bulbagarden.net/media/upload/3/33/Spr_5b_049.png',
		type: [ 'bug', 'poison' ],
		gen: 'I'
	},
	{
		id: 50,
		name: 'Diglett',
		image: 'https://archives.bulbagarden.net/media/upload/7/7b/Spr_5b_050.png',
		type: [ 'ground' ],
		gen: 'I',
		ev: [ 51 ]
	},
	{
		id: 51,
		name: 'Dugtrio',
		image: 'https://archives.bulbagarden.net/media/upload/6/66/Spr_5b_051.png',
		type: [ 'ground' ],
		gen: 'I'
	},
	{
		id: 52,
		name: 'Meowth',
		image: 'https://archives.bulbagarden.net/media/upload/9/93/Spr_5b_052.png',
		type: [ 'normal' ],
		gen: 'I',
		ev: [ 53, 863 ]
	},
	{
		id: 53,
		name: 'Persian',
		image: 'https://archives.bulbagarden.net/media/upload/9/9b/Spr_5b2_053.png',
		type: [ 'normal' ],
		gen: 'I'
	},
	{
		id: 863,
		name: 'Perrserker',
		image:
			'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/1/14/latest/20191201113027/Perrserker_EpEc.gif/98px-Perrserker_EpEc.gif',
		type: [ 'steel' ],
		gen: 'VIII'
	},
	{
		id: 54,
		name: 'Psyduck',
		image: 'https://archives.bulbagarden.net/media/upload/4/46/Spr_5b2_054.png',
		type: [ 'water' ],
		gen: 'I',
		ev: [ 55 ]
	},
	{
		id: 55,
		name: 'Golduck',
		image: 'https://archives.bulbagarden.net/media/upload/9/97/Spr_5b_055.png',
		type: [ 'water' ],
		gen: 'I'
	},
	{
		id: 56,
		name: 'Mankey',
		image: 'https://archives.bulbagarden.net/media/upload/9/9f/Spr_5b_056.png',
		type: [ 'fighting' ],
		gen: 'I',
		ev: [ 57 ]
	},
	{
		id: 57,
		name: 'Primeape',
		image: 'https://archives.bulbagarden.net/media/upload/0/07/Spr_5b2_057.png',
		type: [ 'fighting' ],
		gen: 'I'
	},
	{
		id: 58,
		name: 'Growlithe',
		image: 'https://archives.bulbagarden.net/media/upload/3/3f/Spr_5b_058.png',
		type: [ 'fire' ],
		gen: 'I',
		ev: [ 59 ]
	},
	{
		id: 59,
		name: 'Arcanine',
		image: 'https://archives.bulbagarden.net/media/upload/c/c5/Spr_5b2_059.png',
		type: [ 'fire' ],
		gen: 'I'
	},
	{
		id: 60,
		name: 'Poliwag',
		image: 'https://archives.bulbagarden.net/media/upload/9/94/Spr_5b_060.png',
		type: [ 'water' ],
		gen: 'I',
		ev: [ 61, 62, 186 ]
	},
	{
		id: 61,
		name: 'Poliwhirl',
		image: 'https://archives.bulbagarden.net/media/upload/6/62/Spr_5b_061.png',
		type: [ 'water' ],
		gen: 'I'
	},
	{
		id: 62,
		name: 'Poliwrath',
		image: 'https://archives.bulbagarden.net/media/upload/5/57/Spr_5b_062.png',
		type: [ 'water', 'fighting' ],
		gen: 'I'
	},
	{
		id: 186,
		name: 'Politoed',
		image: 'https://archives.bulbagarden.net/media/upload/d/db/Spr_5b_186_m.png',
		type: [ 'water' ],
		gen: 'II'
	},
	{
		id: 63,
		name: 'Abra',
		image: 'https://archives.bulbagarden.net/media/upload/1/14/Spr_5b_063.png',
		type: [ 'psychic' ],
		gen: 'I',
		ev: [ 64, 65 ]
	},
	{
		id: 64,
		name: 'Kadabra',
		image: 'https://archives.bulbagarden.net/media/upload/5/54/Spr_5b_064_m.png',
		type: [ 'psychic' ],
		gen: 'I'
	},
	{
		id: 65,
		name: 'Alakazam',
		image: 'https://archives.bulbagarden.net/media/upload/8/88/Spr_5b_065_m.png',
		type: [ 'psychic' ],
		gen: 'I'
	},
	{
		id: 66,
		name: 'Machop',
		image: 'https://archives.bulbagarden.net/media/upload/e/ef/Spr_5b_066.png',
		type: [ 'fighting' ],
		gen: 'I',
		ev: [ 67, 68 ]
	},
	{
		id: 67,
		name: 'Machoke',
		image: 'https://archives.bulbagarden.net/media/upload/7/7f/Spr_5b_067.png',
		type: [ 'fighting' ],
		gen: 'I'
	},
	{
		id: 68,
		name: 'Machamp',
		image: 'https://archives.bulbagarden.net/media/upload/4/4c/Spr_5b_068.png',
		type: [ 'fighting' ],
		gen: 'I'
	},
	{
		id: 69,
		name: 'Bellsprout',
		image: 'https://archives.bulbagarden.net/media/upload/0/03/Spr_5b_069.png',
		type: [ 'grass', 'poison' ],
		gen: 'I',
		ev: [ 70, 71 ]
	},
	{
		id: 70,
		name: 'Weepinbell',
		image: 'https://archives.bulbagarden.net/media/upload/e/ed/Spr_5b2_070.png',
		type: [ 'grass', 'poison' ],
		gen: 'I'
	},
	{
		id: 71,
		name: 'Victreebel',
		image: 'https://archives.bulbagarden.net/media/upload/5/55/Spr_5b_071.png',
		type: [ 'grass', 'poison' ],
		gen: 'I'
	},
	{
		id: 72,
		name: 'Tentacool',
		image: 'https://archives.bulbagarden.net/media/upload/0/0c/Spr_5b_072.png',
		type: [ 'water', 'poison' ],
		gen: 'I',
		ev: [ 73 ]
	},
	{
		id: 73,
		name: 'Tentacruel',
		image: 'https://archives.bulbagarden.net/media/upload/9/98/Spr_5b_073.png',
		type: [ 'water', 'poison' ],
		gen: 'I'
	},
	{
		id: 74,
		name: 'Geodude',
		image: 'https://archives.bulbagarden.net/media/upload/9/90/Spr_5b_074.png',
		type: [ 'rock', 'ground' ],
		gen: 'I',
		ev: [ 75, 76 ]
	},
	{
		id: 75,
		name: 'Graveler',
		image: 'https://archives.bulbagarden.net/media/upload/3/3a/Spr_5b_075.png',
		type: [ 'rock', 'ground' ],
		gen: 'I'
	},
	{
		id: 76,
		name: 'Golem',
		image: 'https://archives.bulbagarden.net/media/upload/3/31/Spr_5b_076.png',
		type: [ 'rock', 'ground' ],
		gen: 'I'
	},
	{
		id: 77,
		name: 'Ponyta',
		image: 'https://archives.bulbagarden.net/media/upload/b/bf/Spr_5b_077.png',
		type: [ 'fire' ],
		gen: 'I',
		ev: [ 78 ]
	},
	{
		id: 78,
		name: 'Rapidash',
		image: 'https://archives.bulbagarden.net/media/upload/5/58/Spr_5b_078.png',
		type: [ 'fire' ],
		gen: 'I'
	},
	{
		id: 79,
		name: 'Slowpoke',
		image: 'https://archives.bulbagarden.net/media/upload/1/1f/Spr_5b_079.png',
		type: [ 'water', 'psychic' ],
		gen: 'I',
		ev: [ 80, 199 ]
	},
	{
		id: 80,
		name: 'Slowbro',
		image: 'https://archives.bulbagarden.net/media/upload/e/e1/Spr_5b2_080.png',
		type: [ 'water', 'psychic' ],
		gen: 'I'
	},
	{
		id: 199,
		name: 'Slowking',
		image: 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_199.png',
		type: [ 'water', 'psychic' ],
		gen: 'II'
	},
	{
		id: 81,
		name: 'Magnemite',
		image: 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_081.png',
		type: [ 'electric', 'steel' ],
		gen: 'I',
		ev: [ 82, 462 ]
	},
	{
		id: 82,
		name: 'Magneton',
		image: 'https://archives.bulbagarden.net/media/upload/4/45/Spr_5b_082.png',
		type: [ 'electric', 'steel' ],
		gen: 'I'
	},
	{
		id: 462,
		name: 'Magnezone',
		image: 'https://archives.bulbagarden.net/media/upload/5/5c/Spr_5b_462.png',
		type: [ 'electric', 'steel' ],
		gen: 'IV'
	},
	{
		id: 83,
		name: "Farfetch'd",
		image: 'https://archives.bulbagarden.net/media/upload/a/aa/Spr_5b_083.png',
		type: [ 'normal', 'flying' ],
		gen: 'I',
		ev: [ 865 ]
	},
	{
		id: 865,
		name: "Sirfetch'd",
		image:
			'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/4/4f/latest/20191207030938/Sirfetch%27d_EpEc.gif/66px-Sirfetch%27d_EpEc.gif',
		type: [ 'fighting' ],
		gen: 'VIII'
	},
	{
		id: 84,
		name: 'Doduo',
		image: 'https://archives.bulbagarden.net/media/upload/2/2b/Spr_5b_084_m.png',
		type: [ 'normal', 'flying' ],
		gen: 'I',
		ev: [ 85 ]
	},
	{
		id: 85,
		name: 'Dodrio',
		image: 'https://archives.bulbagarden.net/media/upload/1/19/Spr_5b_085_m.png',
		type: [ 'normal', 'flying' ],
		gen: 'I'
	},
	{
		id: 86,
		name: 'Seel',
		image: 'https://archives.bulbagarden.net/media/upload/2/27/Spr_5b_086.png',
		type: [ 'water' ],
		gen: 'I',
		ev: [ 87 ]
	},
	{
		id: 87,
		name: 'Dewgong',
		image: 'https://archives.bulbagarden.net/media/upload/a/ad/Spr_5b_087.png',
		type: [ 'water', 'ice' ],
		gen: 'I'
	},
	{
		id: 88,
		name: 'Grimer',
		image: 'https://archives.bulbagarden.net/media/upload/6/6e/Spr_5b_088.png',
		type: [ 'poison' ],
		gen: 'I',
		ev: [ 89 ]
	},
	{
		id: 89,
		name: 'Muk',
		image: 'https://archives.bulbagarden.net/media/upload/8/80/Spr_5b_089.png',
		type: [ 'poison' ],
		gen: 'I'
	},
	{
		id: 90,
		name: 'Shellder',
		image: 'https://archives.bulbagarden.net/media/upload/6/66/Spr_5b_090.png',
		type: [ 'water' ],
		gen: 'I',
		ev: [ 91 ]
	},
	{
		id: 91,
		name: 'Cloyster',
		image: 'https://archives.bulbagarden.net/media/upload/f/f1/Spr_5b_091.png',
		type: [ 'water', 'ice' ],
		gen: 'I'
	},
	{
		id: 92,
		name: 'Gastly',
		image: 'https://archives.bulbagarden.net/media/upload/f/f3/Spr_5b_092.png',
		type: [ 'ghost', 'poison' ],
		gen: 'I',
		ev: [ 93, 94 ]
	},
	{
		id: 93,
		name: 'Haunter',
		image: 'https://archives.bulbagarden.net/media/upload/6/6d/Spr_5b_093.png',
		type: [ 'ghost', 'poison' ],
		gen: 'I'
	},
	{
		id: 94,
		name: 'Gengar',
		image: 'https://archives.bulbagarden.net/media/upload/2/21/Spr_5b_094.png',
		type: [ 'ghost', 'poison' ],
		gen: 'I'
	},
	{
		id: 95,
		name: 'Onix',
		image: 'https://archives.bulbagarden.net/media/upload/2/29/Spr_5b_095.png',
		type: [ 'rock', 'ground' ],
		gen: 'I',
		ev: [ 208 ]
	},
	{
		id: 208,
		name: 'Steelix',
		image: 'https://archives.bulbagarden.net/media/upload/4/49/Spr_5b_208_m.png',
		type: [ 'steel', 'ground' ],
		gen: 'II'
	},
	{
		id: 96,
		name: 'Drowzee',
		image: 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_096.png',
		type: [ 'psychic' ],
		gen: 'I',
		ev: [ 97 ]
	},
	{
		id: 97,
		name: 'Hypno',
		image: 'https://archives.bulbagarden.net/media/upload/c/cb/Spr_5b_097_m.png',
		type: [ 'psychic' ],
		gen: 'I'
	},
	{
		id: 98,
		name: 'Krabby',
		image: 'https://archives.bulbagarden.net/media/upload/6/69/Spr_5b_098.png',
		type: [ 'water' ],
		gen: 'I',
		ev: [ 99 ]
	},
	{
		id: 99,
		name: 'Kingler',
		image: 'https://archives.bulbagarden.net/media/upload/e/e7/Spr_5b_099.png',
		type: [ 'water' ],
		gen: 'I'
	},
	{
		id: 100,
		name: 'Voltorb',
		image: 'https://archives.bulbagarden.net/media/upload/8/8a/Spr_5b_100.png',
		type: [ 'electric' ],
		gen: 'I',
		ev: [ 101 ]
	},
	{
		id: 101,
		name: 'Electrode',
		image: 'https://archives.bulbagarden.net/media/upload/5/53/Spr_5b_101.png',
		type: [ 'electric' ],
		gen: 'I'
	},
	{
		id: 102,
		name: 'Exeggcute',
		image: 'https://archives.bulbagarden.net/media/upload/8/8f/Spr_5b_102.png',
		type: [ 'grass', 'psychic' ],
		gen: 'I',
		ev: [ 103 ]
	},
	{
		id: 103,
		name: 'Exeggutor',
		image: 'https://archives.bulbagarden.net/media/upload/1/19/Spr_5b_103.png',
		type: [ 'grass', 'psychic' ],
		gen: 'I'
	},
	{
		id: 104,
		name: 'Cubone',
		image: 'https://archives.bulbagarden.net/media/upload/a/a0/Spr_5b_104.png',
		type: [ 'ground' ],
		gen: 'I',
		ev: [ 105 ]
	},
	{
		id: 105,
		name: 'Marowak',
		image: 'https://archives.bulbagarden.net/media/upload/f/f4/Spr_5b_105.png',
		type: [ 'ground' ],
		gen: 'I'
	},
	{
		id: 236,
		name: 'Tyrogue',
		image: 'https://archives.bulbagarden.net/media/upload/9/94/Spr_5b_236.png',
		type: [ 'fighting' ],
		gen: 'II',
		ev: [ 106, 107, 237 ]
	},
	{
		id: 106,
		name: 'Hitmonlee',
		image: 'https://archives.bulbagarden.net/media/upload/9/99/Spr_5b_106.png',
		type: [ 'fighting' ],
		gen: 'I'
	},
	{
		id: 107,
		name: 'Hitmonchan',
		image: 'https://archives.bulbagarden.net/media/upload/4/45/Spr_5b_107.png',
		type: [ 'fighting' ],
		gen: 'I'
	},
	{
		id: 237,
		name: 'Hitmontop',
		image: 'https://archives.bulbagarden.net/media/upload/b/b3/Spr_5b_237.png',
		type: [ 'fighting' ],
		gen: 'I'
	},
	{
		id: 108,
		name: 'Lickitung',
		image: 'https://archives.bulbagarden.net/media/upload/2/22/Spr_5b2_108.png',
		type: [ 'normal' ],
		gen: 'I',
		ev: [ 463 ]
	},
	{
		id: 463,
		name: 'Lickilicky',
		image: 'https://archives.bulbagarden.net/media/upload/5/50/Spr_5b_463.png',
		type: [ 'normal' ],
		gen: 'IV'
	},
	{
		id: 109,
		name: 'Koffing',
		image: 'https://archives.bulbagarden.net/media/upload/b/ba/Spr_5b_109.png',
		type: [ 'poison' ],
		gen: 'I',
		ev: [ 110 ]
	},
	{
		id: 110,
		name: 'Weezing',
		image: 'https://archives.bulbagarden.net/media/upload/e/ec/Spr_5b_110.png',
		type: [ 'poison' ],
		gen: 'I'
	},
	{
		id: 111,
		name: 'Rhyhorn',
		image: 'https://archives.bulbagarden.net/media/upload/6/61/Spr_5b_111_m.png',
		type: [ 'ground', 'rock' ],
		gen: 'I',
		ev: [ 112, 464 ]
	},
	{
		id: 112,
		name: 'Rhydon',
		image: 'https://archives.bulbagarden.net/media/upload/d/d4/Spr_5b_112_m.png',
		type: [ 'ground', 'rock' ],
		gen: 'I'
	},
	{
		id: 464,
		name: 'Rhyperior',
		image: 'https://archives.bulbagarden.net/media/upload/5/55/Spr_5b_464_m.png',
		type: [ 'ground', 'rock' ],
		gen: 'IV'
	},
	{
		id: 440,
		name: 'Happiny',
		image: 'https://archives.bulbagarden.net/media/upload/3/37/Spr_5b_440.png',
		type: [ 'normal' ],
		gen: 'IV',
		ev: [ 113, 242 ]
	},
	{
		id: 113,
		name: 'Chansey',
		image: 'https://archives.bulbagarden.net/media/upload/d/de/Spr_5b_113.png',
		type: [ 'normal' ],
		gen: 'I'
	},
	{
		id: 242,
		name: 'Blissey',
		image: 'https://archives.bulbagarden.net/media/upload/b/b5/Spr_5b_242.png',
		type: [ 'normal' ],
		gen: 'II'
	},
	{
		id: 114,
		name: 'Tangela',
		image: 'https://archives.bulbagarden.net/media/upload/a/aa/Spr_5b_114.png',
		type: [ 'grass' ],
		gen: 'I',
		ev: [ 465 ]
	},
	{
		id: 465,
		name: 'Tangrowth',
		image: 'https://archives.bulbagarden.net/media/upload/8/88/Spr_5b_465_m.png',
		type: [ 'grass' ],
		gen: 'IV'
	},
	{
		id: 115,
		name: 'Kangaskhan',
		image: 'https://archives.bulbagarden.net/media/upload/d/d5/Spr_5b_115.png',
		type: [ 'normal' ],
		gen: 'I'
	},
	{
		id: 116,
		name: 'Horsea',
		image: 'https://archives.bulbagarden.net/media/upload/2/2d/Spr_5b_116.png',
		type: [ 'water' ],
		gen: 'I',
		ev: [ 117, 230 ]
	},
	{
		id: 117,
		name: 'Seadra',
		image: 'https://archives.bulbagarden.net/media/upload/a/ac/Spr_5b_117.png',
		type: [ 'water' ],
		gen: 'I'
	},
	{
		id: 230,
		name: 'Kingdra',
		image: 'https://archives.bulbagarden.net/media/upload/c/c1/Spr_5b_230.png',
		type: [ 'water', 'dragon' ],
		gen: 'II'
	},
	{
		id: 118,
		name: 'Goldeen',
		image: 'https://archives.bulbagarden.net/media/upload/6/65/Spr_5b2_118_m.png',
		type: [ 'water' ],
		gen: 'I',
		ev: [ 119 ]
	},
	{
		id: 119,
		name: 'Seaking',
		image: 'https://archives.bulbagarden.net/media/upload/f/f0/Spr_5b_119_m.png',
		type: [ 'water' ],
		gen: 'I'
	},
	{
		id: 120,
		name: 'Staryu',
		image: 'https://archives.bulbagarden.net/media/upload/d/db/Spr_5b_120.png',
		type: [ 'water' ],
		gen: 'I',
		ev: [ 121 ]
	},
	{
		id: 121,
		name: 'Starmie',
		image: 'https://archives.bulbagarden.net/media/upload/8/85/Spr_5b_121.png',
		type: [ 'water', 'psychic' ],
		gen: 'I'
	},
	{
		id: 439,
		name: 'Mime Jr.',
		image: 'https://archives.bulbagarden.net/media/upload/0/0c/Spr_5b_439.png',
		type: [ 'psychic', 'fairy' ],
		gen: 'I',
		ev: [ 122, 866 ]
	},
	{
		id: 122,
		name: 'Mr. Mime',
		image: 'https://archives.bulbagarden.net/media/upload/9/9c/Spr_5b_122.png',
		type: [ 'psychic', 'fairy' ],
		gen: 'I'
	},
	{
		id: 866,
		name: 'Mr. Rime',
		image:
			'https://static.wikia.nocookie.net/pokemon/images/6/66/Mr._Rime_SS.gif/revision/latest/top-crop/width/220/height/220?cb=20191218090653',
		type: [ 'ice', 'psychic' ],
		gen: 'VII'
	},
	{
		id: 123,
		name: 'Scyther',
		image: 'https://archives.bulbagarden.net/media/upload/2/2c/Spr_5b_123_m.png',
		type: [ 'bug', 'flying' ],
		gen: 'I',
		ev: [ 212 ]
	},
	{
		id: 212,
		name: 'Scizor',
		image: 'https://archives.bulbagarden.net/media/upload/e/e8/Spr_5b_212_m.png',
		type: [ 'bug', 'steel' ],
		gen: 'II'
	},
	{
		id: 238,
		name: 'Smoochum',
		image: 'https://archives.bulbagarden.net/media/upload/a/a1/Spr_5b_238.png',
		type: [ 'ice', 'psychic' ],
		gen: 'II',
		ev: [ 124 ]
	},
	{
		id: 124,
		name: 'Jynx',
		image: 'https://archives.bulbagarden.net/media/upload/0/0e/Spr_5b_124.png',
		type: [ 'ice', 'psychic' ],
		gen: 'I'
	},
	{
		id: 239,
		name: 'Elekid',
		image: 'https://archives.bulbagarden.net/media/upload/4/41/Spr_5b_239.png',
		type: [ 'electric' ],
		gen: 'II',
		ev: [ 125, 466 ]
	},
	{
		id: 125,
		name: 'Electabuzz',
		image: 'https://archives.bulbagarden.net/media/upload/7/79/Spr_5b_125.png',
		type: [ 'electric' ],
		gen: 'I'
	},
	{
		id: 466,
		name: 'Electivire',
		image: 'https://archives.bulbagarden.net/media/upload/9/95/Spr_5b_466.png',
		type: [ 'electric' ],
		gen: 'IV'
	},
	{
		id: 240,
		name: 'Magby',
		image: 'https://archives.bulbagarden.net/media/upload/8/89/Spr_5b_240.png',
		type: [ 'fire' ],
		gen: 'II',
		ev: [ 126, 467 ]
	},
	{
		id: 126,
		name: 'Magmar',
		image: 'https://archives.bulbagarden.net/media/upload/a/a9/Spr_5b_126.png',
		type: [ 'fire' ],
		gen: 'I'
	},
	{
		id: 467,
		name: 'Magmortar',
		image: 'https://archives.bulbagarden.net/media/upload/f/fe/Spr_5b_467.png',
		type: [ 'fire' ],
		gen: 'IV'
	},
	{
		id: 127,
		name: 'Pinsir',
		image: 'https://archives.bulbagarden.net/media/upload/b/b1/Spr_5b_127.png',
		type: [ 'bug' ],
		gen: 'I'
	},
	{
		id: 128,
		name: 'Tauros',
		image: 'https://archives.bulbagarden.net/media/upload/8/80/Spr_5b_128.png',
		type: [ 'normal' ],
		gen: 'I'
	},
	{
		id: 129,
		name: 'Magikarp',
		image: 'https://archives.bulbagarden.net/media/upload/2/24/Spr_5b_129_m.png',
		type: [ 'water' ],
		gen: 'I',
		ev: [ 130 ]
	},
	{
		id: 130,
		name: 'Gyarados',
		image: 'https://archives.bulbagarden.net/media/upload/e/e3/Spr_5b_130_m.png',
		type: [ 'water', 'flying' ],
		gen: 'I'
	},
	{
		id: 131,
		name: 'Lapras',
		image: 'https://archives.bulbagarden.net/media/upload/6/62/Spr_5b_131.png',
		type: [ 'water', 'ice' ],
		gen: 'I'
	},
	{
		id: 132,
		name: 'Ditto',
		image: 'https://archives.bulbagarden.net/media/upload/5/5f/Spr_5b_132.png',
		type: [ 'normal' ],
		gen: 'I'
	},
	{
		id: 133,
		name: 'Eevee',
		image: 'https://archives.bulbagarden.net/media/upload/d/d1/Spr_5b2_133.png',
		type: [ 'normal' ],
		gen: 'I',
		ev: [ 134, 135, 136, 196, 197, 470, 471, 700 ]
	},
	{
		id: 134,
		name: 'Vaporeon',
		image: 'https://archives.bulbagarden.net/media/upload/3/3b/Spr_5b_134.png',
		type: [ 'water' ],
		gen: 'I'
	},
	{
		id: 135,
		name: 'Jolteon',
		image: 'https://archives.bulbagarden.net/media/upload/c/c1/Spr_5b_135.png',
		type: [ 'electric' ],
		gen: 'I'
	},
	{
		id: 136,
		name: 'Flareon',
		image: 'https://archives.bulbagarden.net/media/upload/3/3b/Spr_5b_136.png',
		type: [ 'fire' ],
		gen: 'I'
	},
	{
		id: 196,
		name: 'Espeon',
		image: 'https://archives.bulbagarden.net/media/upload/0/07/Spr_5b_196.png',
		type: [ 'psychic' ],
		gen: 'II'
	},
	{
		id: 197,
		name: 'Umbreon',
		image: 'https://archives.bulbagarden.net/media/upload/4/45/Spr_5b_197.png',
		type: [ 'dark' ],
		gen: 'II'
	},
	{
		id: 470,
		name: 'Leafeon',
		image: 'https://archives.bulbagarden.net/media/upload/6/6d/Spr_5b_470.png',
		type: [ 'grass' ],
		gen: 'IV'
	},
	{
		id: 471,
		name: 'Glaceon',
		image: 'https://archives.bulbagarden.net/media/upload/8/89/Spr_5b_471.png',
		type: [ 'ice' ],
		gen: 'IV'
	},
	{
		id: 700,
		name: 'Sylveon',
		image:
			'https://static.wikia.nocookie.net/pokemon/images/7/71/Sylveon_SS.gif/revision/latest/scale-to-width-down/123?cb=20200107224324',
		type: [ 'fairy' ],
		gen: 'VI'
	},
	{
		id: 137,
		name: 'Porygon',
		image: 'https://archives.bulbagarden.net/media/upload/0/07/Spr_5b_137.png',
		type: [ 'normal' ],
		gen: 'I',
		ev: [ 233, 474 ]
	},
	{
		id: 233,
		name: 'Porygon2',
		image: 'https://archives.bulbagarden.net/media/upload/5/53/Spr_5b_233.png',
		type: [ 'normal' ],
		gen: 'II'
	},
	{
		id: 474,
		name: 'Porygon-Z',
		image: 'https://archives.bulbagarden.net/media/upload/4/48/Spr_5b_474.png',
		type: [ 'normal' ],
		gen: 'IV'
	},
	{
		id: 138,
		name: 'Omanyte',
		image: 'https://archives.bulbagarden.net/media/upload/1/15/Spr_5b_138.png',
		type: [ 'rock', 'water' ],
		gen: 'I',
		ev: [ 139 ]
	},
	{
		id: 139,
		name: 'Omastar',
		image: 'https://archives.bulbagarden.net/media/upload/f/fc/Spr_5b_139.png',
		type: [ 'rock', 'water' ],
		gen: 'I'
	},
	{
		id: 140,
		name: 'Kabuto',
		image: 'https://archives.bulbagarden.net/media/upload/d/db/Spr_5b_140.png',
		type: [ 'rock', 'water' ],
		gen: 'I',
		ev: [ 141 ]
	},
	{
		id: 141,
		name: 'Kabutops',
		image: 'https://archives.bulbagarden.net/media/upload/c/cf/Spr_5b_141.png',
		type: [ 'rock', 'water' ],
		gen: 'I'
	},
	{
		id: 142,
		name: 'Aerodactyl',
		image: 'https://archives.bulbagarden.net/media/upload/0/00/Spr_5b_142.png',
		type: [ 'rock', 'flying' ],
		gen: 'I'
	},
	{
		id: 446,
		name: 'Munchlax',
		image: 'https://archives.bulbagarden.net/media/upload/f/f9/Spr_5b_446.png',
		type: [ 'normal' ],
		gen: 'IV',
		ev: [ 143 ]
	},
	{
		id: 143,
		name: 'Snorlax',
		image: 'https://archives.bulbagarden.net/media/upload/4/40/Spr_5b_143.png',
		type: [ 'normal' ],
		gen: 'I'
	},
	{
		id: 144,
		name: 'Articuno',
		image: 'https://archives.bulbagarden.net/media/upload/7/7b/Spr_5b_144.png',
		type: [ 'ice', 'flying' ],
		gen: 'I'
	},
	{
		id: 145,
		name: 'Zapdos',
		image: 'https://archives.bulbagarden.net/media/upload/8/8a/Spr_5b_145.png',
		type: [ 'electric', 'flying' ],
		gen: 'I'
	},
	{
		id: 146,
		name: 'Moltres',
		image: 'https://archives.bulbagarden.net/media/upload/d/d3/Spr_5b_146.png',
		type: [ 'fire', 'flying' ],
		gen: 'I'
	},
    {
		id: 147,
		name: 'Dratini',
		image: 'https://archives.bulbagarden.net/media/upload/3/36/Spr_5b_147.png',
		type: [ 'dragon' ],
		gen: 'I',
		ev: [ 148, 149 ]
	},
	{
		id: 148,
		name: 'Dragonair',
		image: 'https://archives.bulbagarden.net/media/upload/2/2c/Spr_5b_148.png',
		type: [ 'dragon' ],
		gen: 'I'
	},
	{
		id: 149,
		name: 'Dragonite',
		image: 'https://archives.bulbagarden.net/media/upload/9/96/Spr_5b_149.png',
		type: [ 'dragon', 'flying' ],
		gen: 'I'
	},
	{
		id: 150,
		name: 'Mewtwo',
		image: 'https://archives.bulbagarden.net/media/upload/7/73/Spr_5b_150.png',
		type: [ 'psychic' ],
		gen: 'I'
	},
	{
		id: 151,
		name: 'Mew',
		image: 'https://archives.bulbagarden.net/media/upload/4/43/Spr_5b_151.png',
		type: [ 'psychic' ],
		gen: 'I'
	},
];
