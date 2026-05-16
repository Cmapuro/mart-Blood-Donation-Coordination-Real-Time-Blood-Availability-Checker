import React from 'react'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, info: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    // Save for debugging
    console.error('Uncaught error in React tree:', error, info)
    this.setState({ error, info })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-white">
          <div className="max-w-3xl w-full bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-red-700 mb-2">Something went wrong</h2>
            <p className="text-gray-700 mb-4">An unexpected error occurred while rendering the app.</p>
            <details className="whitespace-pre-wrap text-sm text-gray-600 bg-white p-3 rounded">
              {String(this.state.error)}
              {this.state.info ? '\n\n' + this.state.info.componentStack : ''}
            </details>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
