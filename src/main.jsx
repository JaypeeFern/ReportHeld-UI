import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './index.css';

const activeLabelStyles = {
	transform: 'scale(0.85) translateY(-24px)'
};

export const theme = extendTheme({
	components: {
		Form: {
			variants: {
				floating: {
					container: {
						_focusWithin: {
							label: {
								...activeLabelStyles
							}
						},
						'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label': {
							...activeLabelStyles
						},
						label: {
							top: 0,
							left: 0,
							zIndex: 2,
							position: 'absolute',
							backgroundColor: 'transparent',
							color: '#fff',
							pointerEvents: 'none',
							mx: 3,
							px: 1,
							my: 2,
							transformOrigin: 'left top'
						}
					}
				}
			}
		}
	}
});

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ChakraProvider>
			<App />
		</ChakraProvider>
	</React.StrictMode>
);