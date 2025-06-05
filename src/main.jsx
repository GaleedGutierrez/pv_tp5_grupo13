import { Provider } from '@components/ui/provider';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AppRouter } from './AppRouter.jsx';
import ErrorBoundary from './components/ErrorBoundary/index.jsx';
import GlobalProvider from './context/global.provider.jsx';

const ROOT = document.getElementById('root');

if (ROOT instanceof HTMLDivElement) {
	createRoot(ROOT).render(
		<StrictMode>
			<Provider>
				<ErrorBoundary>
					<GlobalProvider>
						<AppRouter />
					</GlobalProvider>
				</ErrorBoundary>
			</Provider>
		</StrictMode>,
	);
}
