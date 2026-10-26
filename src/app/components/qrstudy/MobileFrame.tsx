import { ReactNode } from 'react';

interface MobileFrameProps {
  children: ReactNode;
  showStatusBar?: boolean;
}

export function MobileFrame({ children, showStatusBar = true }: MobileFrameProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[430px] h-[932px] bg-white rounded-[3rem] shadow-2xl overflow-hidden relative border-8 border-gray-800">
        {/* Status bar */}
        {showStatusBar && (
          <div className="h-11 bg-white flex items-center justify-between px-8 pt-2">
            <div className="text-sm font-semibold">9:41</div>
            <div className="w-24 h-6 bg-gray-800 rounded-full" />
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                <path d="M11.5 1a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h7z"/>
                <path d="M13 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-.5v-10H13z"/>
                <path d="M2.5 3h1v10h-1a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5z"/>
              </svg>
              <span className="text-xs">100%</span>
            </div>
          </div>
        )}

        {/* Content area */}
        <div className="h-[calc(100%-44px)] overflow-y-auto bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}
