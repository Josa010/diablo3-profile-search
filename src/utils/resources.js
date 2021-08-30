const names = {
	BARBARIAN: 'barbarian',
	CRUSADER: 'crusader',
	MONK: 'monk',
	WIZARD: 'wizard',
	WITCHDOCTOR: 'witch-doctor',
	NECROMANCER: 'necromancer',
	DEMONHUNTER: 'demon-hunter',
};

const resourceClassNameArr = {
	[names.BARBARIAN]: 'fury',
	[names.CRUSADER]: 'wrath',
	[names.MONK]: 'spirit',
	[names.WIZARD]: 'arcane-power',
	[names.WITCHDOCTOR]: 'mana',
	[names.NECROMANCER]: 'essence',
	[names.DEMONHUNTER]: 'hatred-discipline',
};

const resourceDisplayNameArr = {
	[names.BARBARIAN]: 'Fury',
	[names.CRUSADER]: 'Wrath',
	[names.MONK]: 'Spirit',
	[names.WIZARD]: 'Arcane Power',
	[names.WITCHDOCTOR]: 'Mana',
	[names.NECROMANCER]: 'Essence',
	[names.DEMONHUNTER]: 'Hatred / Discipline',
};

export const resourceClassName = (classSlug) => {
	return resourceClassNameArr[classSlug];
};

export const resourceDisplayName = (classSlug) => {
	return resourceDisplayNameArr[classSlug];
};
