import './App.css';
import Home from './pages/Home';

/**
 * App is the root functional component of the application.
 * It renders the Home component wrapped in a div with class 'App'.
 *
 * @return {JSX.Element} The Home component wrapped in a div with class 'App'.
 */
function App() {
    return (
        <div className="App">
            <Home />
        </div>
    );
}

export default App;
