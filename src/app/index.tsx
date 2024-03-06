import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PagesRouting } from '../pages';
import '../share/styles/index.scss'

export const App = () => {
	return (
		<Suspense fallback='Идёт загрузка...'>
			<BrowserRouter>
				<PagesRouting/>
			</BrowserRouter>
		</Suspense>
	);
}

export default App;
