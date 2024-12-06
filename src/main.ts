import { mount } from 'svelte';
import Doc from './doc/Document.svelte';

const app = mount(Doc, {
	target: document.getElementById('app')!
});

export default app;
