import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

test('"Click This" button should disappears on /encrypt route', async () => {
    render(
      <Router initialEntries={['/']}>
        <App />
      </Router>
    );
  
    // Wait for the button to be initially present
    await waitFor(() => {
      expect(screen.queryByTestId('encryption-button')).toBeInTheDocument;
    });
  
    // Click the button to navigate to /encrypt
    fireEvent.click(screen.getByTestId('encryption-button'));
  
    // Wait for the button to be removed from the document
    await waitFor(() => {
      expect(screen.queryByTestId('encryption-button')).toBeNull();
    });
  });