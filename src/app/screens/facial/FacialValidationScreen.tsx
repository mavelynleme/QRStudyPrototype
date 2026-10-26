import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';

export function FacialValidationScreen() {
  const navigate = useNavigate();
  const [isValidating, setIsValidating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsValidating(false);
      navigate('/facial/success');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <MobileFrame>
      <div className="flex flex-col h-full bg-gray-900">
        <div className="p-4 bg-gray-800">
          <div className="text-white text-center">
            <div className="text-sm text-gray-400">Validando identidade</div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center p-6">
          <div className="relative">
            <div className="w-80 h-96 border-4 border-purple-500 rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent" />

              <div className="absolute top-0 left-0 right-0 h-1 bg-purple-500 animate-scan" />

              <div className="absolute top-8 left-8 w-12 h-12 border-t-4 border-l-4 border-purple-500 rounded-tl-2xl" />
              <div className="absolute top-8 right-8 w-12 h-12 border-t-4 border-r-4 border-purple-500 rounded-tr-2xl" />
              <div className="absolute bottom-8 left-8 w-12 h-12 border-b-4 border-l-4 border-purple-500 rounded-bl-2xl" />
              <div className="absolute bottom-8 right-8 w-12 h-12 border-b-4 border-r-4 border-purple-500 rounded-br-2xl" />

              <div className="flex items-center justify-center h-full">
                <svg className="w-32 h-32 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="8" r="4" strokeWidth="2" />
                  <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" strokeWidth="2" />
                </svg>
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="text-white text-lg font-semibold">
                Analisando rosto...
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Aguarde enquanto validamos sua identidade
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes scan {
            0% { top: 0; }
            50% { top: 100%; }
            100% { top: 0; }
          }
          .animate-scan {
            animation: scan 2s ease-in-out infinite;
          }
        `}</style>
      </div>
    </MobileFrame>
  );
}
