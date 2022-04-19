import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import App from "./components/app";

const container = document.getElementById("root");
ReactDOMClient.hydrateRoot(container, <App />);