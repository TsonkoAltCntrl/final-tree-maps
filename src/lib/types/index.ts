import type { Writable } from 'svelte/store';

export enum Panel {
	none = 'none',
	opts = 'opts',
	more = 'more',
	add  =  'add',
	prof = 'prof',
}

export interface SessionInterface {
    opts: string;
}

export type SessionStore = Writable<SessionInterface>;

export type TimeoutID = ReturnType<typeof setTimeout>;