// import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from '@/components/ui/provider';

import { AppRouter } from './AppRouter.jsx';

const ROOT = document.getElementById('root');

if (ROOT instanceof HTMLDivElement) {
	createRoot(ROOT).render(
		<StrictMode>
			<Provider>
				<AppRouter />
			</Provider>
		</StrictMode>,
	);
}
