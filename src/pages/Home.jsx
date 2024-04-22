import React, { lazy } from 'react';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const TodoList = lazy(() => import('../components/TodoList'));

const Home = () => {
	return (
		<>
			<Header />
			<main className='content'>
				<TodoList />
			</main>
			<Footer />
		</>
	);
}

export default Home;
