import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {ClipsProvider} from './contexts/ClipsContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ClipsProvider>
			<App />
		</ClipsProvider>
	</React.StrictMode>
);
