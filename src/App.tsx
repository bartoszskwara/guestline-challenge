import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from 'app/store';
import ThemeProvider from 'app/ThemeProvider';
import ErrorBoundary from 'components/ErrorBoundary';
import Layout from 'components/Layout';
import NotFound from 'components/NotFound';
import Home from 'pages/Home';
import Room from 'pages/Room';

const App = () => (
    <ErrorBoundary>
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProvider>
                    <Routes>
                        <Route element={<Layout />}>
                            <Route path="/" element={<Home />} />
                            <Route path=":hotelId/:roomId" element={<Room />} />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
    </ErrorBoundary>
);

export default App;
