import { createRoot } from 'react-dom/client';
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';
import { Provider as ProviderTheme } from 'components/Theme';
import { Provider as ProviderStore } from 'components/Store';
import { Provider as ProviderLanguage } from 'components/Language';
import { Provider as ProviderAuth } from 'components/Auth';
import PageHome from 'pages/Home';
import PageSignIn from 'pages/SignIn';
import GlobalStyles from './globalStyles.js';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<ProviderStore>
		<ProviderTheme>
			<ProviderLanguage>
				<BrowserRouter>
					<ProviderAuth>
						<Routes>
							<Route 
								index
								path={process.env.PAGE_URL_HOME}
								element={<PageHome />} />
							<Route 
								path={process.env.PAGE_URL_SIGN_IN}
								element={<PageSignIn />} />
						</Routes>
					</ProviderAuth>
				</BrowserRouter>
			</ProviderLanguage>
		</ProviderTheme>
		<GlobalStyles />
	</ProviderStore>
);
