import { Component } from 'preact';
import './Switch.css';
import {html} from 'htm/preact'
export default class Switch extends Component<any, any> {
    constructor () {
        super();

        this.state = {
            value: true
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick () {
        this.setState({
            value: !this.state.value
        });
    }

    render() {
        return html`<div class="Switch" data-active=${this.state.value} onClick=${this.onClick}>${this.state.value? 'On' : 'Off'}</div>`;

    }
}