// frontend/src/api/client.ts
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// frontend/src/App.tsx
import React, { useEffect, useState } from 'react';
import { apiClient } from './api/client';

function App() {
  const [health, setHealth] = useState<string>('');

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await apiClient.get('/health');
        setHealth(response.data.status);
      } catch (error) {
        console.error('Error checking health:', error);
        setHealth('error');
      }
    };

    checkHealth();
  }, []);

  return (
    <div className="App">
      <h1>React + Go Web Application</h1>
      <p>Backend Status: {health}</p>
    </div>
  );
}

export default App;