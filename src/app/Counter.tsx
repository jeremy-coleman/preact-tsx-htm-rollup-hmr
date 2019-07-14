import { Component } from 'preact';
import './Counter.css';
import {html} from 'htm/preact'
export default class Counter extends Component<any, any> {
    interval: any
    constructor () {
        super();

        this.state = {
            count: 0 
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 200);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return html`<div class="Counter">Counter: ${this.state.count}</div>`;
    }
}