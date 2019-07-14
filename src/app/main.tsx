import { render, h } from 'preact';
import App from './App';
import HotManager from './HotManager';
import {html} from 'htm/preact'
//@ts-ignore
window.h = h;

let root = document.createElement('div');
document.body.appendChild(root);

let el = render(html`<${App}/>`, root);

//#if _DEBUG
(module as any).hot.accept(() => {
    let App = require(HotManager.getRegistered()).default;
    el = render(html`<${App}/>`, root, el as any);
});
//#endif



