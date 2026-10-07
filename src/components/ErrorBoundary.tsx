import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in Udyam Saarthi app:', error, errorInfo);
  }

  private handleReset = () => {
    try {
      localStorage.removeItem('udyam_active_profile');
      localStorage.removeItem('udyam_checked_docs');
      localStorage.removeItem('udyam_diagnostic_answers');
      localStorage.removeItem('udyam_saved_schemes');
      localStorage.removeItem('udyam_saved_tools');
      localStorage.removeItem('udyam_completed_lesson_steps');
    } catch {}
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAF8F5] text-slate-900 flex items-center justify-center p-6 font-sans">
          <div className="max-w-md w-full bg-white border border-amber-200 rounded-xl p-8 shadow-sm text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-amber-800 font-bold text-xl">
              !
            </div>
            <h1 className="text-xl font-bold text-slate-900">Udyam Saarthi</h1>
            <p className="text-sm text-slate-600">
              Something went wrong while loading this page. You can reload the application or reset stored preferences to restore standard functionality.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="px-4 py-2 text-xs font-semibold bg-[#0F172A] text-white rounded hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Reload Page
              </button>
              <button
                type="button"
                onClick={this.handleReset}
                className="px-4 py-2 text-xs font-semibold bg-[#C25E00] text-white rounded hover:bg-[#9A3412] transition-colors cursor-pointer"
              >
                Reset & Reload
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
