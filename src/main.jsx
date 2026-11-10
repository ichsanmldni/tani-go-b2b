import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Render error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          fontFamily: 'system-ui, sans-serif',
          backgroundColor: '#f8fafc',
          color: '#334155'
        }}>
          <div style={{
            maxWidth: '520px',
            backgroundColor: '#ffffff',
            padding: '1.5rem',
            borderRadius: '12px',
            border: '1px solid #fecaca',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
          }}>
            <h3 style={{ margin: '0 0 0.5rem', color: '#b91c1c', fontSize: '1rem' }}>
              Terjadi Gangguan Tampilan
            </h3>
            <p style={{ margin: '0 0 1rem', fontSize: '0.85rem', color: '#64748b' }}>
              Silakan segarkan peramban (browser refresh). Detail teknis:
            </p>
            <pre style={{
              backgroundColor: '#fef2f2',
              padding: '0.75rem',
              borderRadius: '6px',
              fontSize: '0.75rem',
              color: '#991b1b',
              overflowX: 'auto',
              margin: 0
            }}>
              {this.state.error?.message || String(this.state.error)}
            </pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)

