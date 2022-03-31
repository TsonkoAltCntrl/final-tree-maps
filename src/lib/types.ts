export enum Panel {
	none = 'none',
	opts = 'opts',
	more = 'more',
	add  =  'add',
	prof = 'prof',
}

export enum Color {
	g = 'green',
	o = 'orange',
	r = 'red',
	b = 'blue',
}

export enum Theme {
	dark = 'darkmode',
	light = 'lightmode',
}

export enum Lang {
	english = 'en',
	spanish = 'es',
}

export interface Options {
	theme: Theme;
	animation: boolean;
	lang: Lang;
	color: Color;
}
