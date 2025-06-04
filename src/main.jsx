import { Provider } from '@components/ui/provider';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AppRouter } from './AppRouter.jsx';
import GlobalProvider from './context/global.provider.jsx';

const ROOT = document.getElementById('root');

if (ROOT instanceof HTMLDivElement) {
	createRoot(ROOT).render(
		<StrictMode>
			<Provider>
				<GlobalProvider>
					<AppRouter />
				</GlobalProvider>
			</Provider>
		</StrictMode>,
	);
}
