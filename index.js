import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App';

const container = document.getElementById('root');
const root = createRoot(container);

///
const sampleName = 'The Cathedral Church of St. John the Divine';
const sampleAddress = '1047 Amsterdam Ave, New York, NY 10025';
///

root.render(<App name={sampleName} address={sampleAddress} />);
