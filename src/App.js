import './App.css';
import Home from './pages/Home';

import { setupCursorMovement } from './assets/scripts/cursor';

function App() {
    setupCursorMovement();

    return (
        <div className='App'>
            <Home />
        </div>
    );
}

export default App;
