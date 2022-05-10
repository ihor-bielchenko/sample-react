import { createRoot } from 'react-dom/client';
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { Provider as ProviderTheme } from 'components/Theme';
import { Provider as ProviderStore } from 'components/Store';
import { Provider as ProviderLanguage } from 'components/Language';
import { Provider as ProviderLoader } from 'components/Loader';
import { Provider as ProviderAuth } from 'components/Auth';
import LayoutAuth from 'components/Layout/Auth';
import LayoutApp from 'components/Layout/App';
import PageHome from 'pages/Home';
import PageAuthSignIn from 'pages/Auth/SignIn';
import PageAuthSignUp from 'pages/Auth/SignUp';
import PageAuthRecovery from 'pages/Auth/Recovery';
import PageAuthReset from 'pages/Auth/Reset';
import PageAppAccount from 'pages/App/Account';
import PageNotFound from 'pages/NotFound';
import GlobalStyles from './globalStyles.js';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<ProviderStore>
		<ProviderTheme>
			<ProviderLanguage>
				<ProviderLoader>
					<SnackbarProvider>
						<ProviderAuth>
							<BrowserRouter>
								<Routes>
									<Route 
										index
										path={process.env.PAGE_URL_HOME}
										element={<PageHome />} />
									<Route 
										path={process.env.PAGE_URL_AUTH}
										element={<LayoutAuth />}>
										<Route 
											index
											element={<PageAuthSignIn />} />
										<Route 
											path={process.env.PAGE_URL_AUTH_SIGN_IN}
											element={<PageAuthSignIn />} />
										<Route 
											path={process.env.PAGE_URL_AUTH_SIGN_UP}
											element={<PageAuthSignUp />} />
										<Route 
											path={process.env.PAGE_URL_AUTH_RECOVERY}
											element={<PageAuthRecovery />} />
										<Route 
											path={process.env.PAGE_URL_AUTH_RESET}
											element={<PageAuthReset />} />
									</Route>
									<Route 
										path={process.env.PAGE_URL_APP}
										element={<LayoutApp />}>
										<Route 
											index
											element={<PageAppAccount />} />
										<Route 
											path={process.env.PAGE_URL_APP_ACCOUNT}
											element={<PageAppAccount />} />
									</Route>
									<Route
										path="*"
										element={<PageNotFound />} />
								</Routes>
							</BrowserRouter>
						</ProviderAuth>
					</SnackbarProvider>
				</ProviderLoader>
			</ProviderLanguage>
		</ProviderTheme>
		<GlobalStyles />
	</ProviderStore>
);
