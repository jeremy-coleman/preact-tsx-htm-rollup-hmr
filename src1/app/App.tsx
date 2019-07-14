import Counter from './Counter';
import { Internal } from './Internal';
import Switch from 'app/Switch';
import './App.css';

//#if _DEBUG
import {HotManager} from './HotManager';
//#endif

var App = () => (
    <div class="App">
        <h1>Hello World</h1>
        <Internal />
        <Counter />
        <Switch />
    </div>
);

//#if _DEBUG
HotManager.register(module.id);
//#endif

export default App;