import { lazy } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const TodoList = lazy(() => import('../components/TodoList'));

/**
 * Home is a functional component that renders the main page of the application.
 * It includes the Header, TodoList, and Footer components.
 *
 * @return {JSX.Element} The main page of the application, including the Header, TodoList,
 * and Footer components.
 */
const Home = () => {
    return (
        <>
            <Header />
            <main className="content">
                <TodoList />
            </main>
            <Footer />
        </>
    );
};

export default Home;
