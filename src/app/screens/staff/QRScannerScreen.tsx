import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { ScanLine, LogOut, History, CheckCircle2 } from 'lucide-react';

export function QRScannerScreen() {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <div className="flex flex-col h-full bg-gray-900">
        <div className="p-4 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="text-white">
              <div className="text-sm text-gray-400">Funcionário</div>
              <div className="font-semibold">Ana Costa</div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-gray-700"
                onClick={() => navigate('/staff/history')}
              >
                <History className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-gray-700"
                onClick={() => navigate('/staff/login')}
              >
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <Card className="p-3 bg-gray-700 border-gray-600">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">Retiradas hoje:</span>
              </div>
              <span className="text-2xl font-bold">24</span>
            </div>
          </Card>
        </div>

        <div className="flex-1 flex items-center justify-center p-6 relative">
          <div className="relative">
            <div className="w-80 h-80 border-4 border-blue-500 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent" />

              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500 animate-scan" />

              <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-blue-500 rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-blue-500 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-blue-500 rounded-bl-lg" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-blue-500 rounded-br-lg" />

              <div className="flex items-center justify-center h-full">
                <ScanLine className="w-20 h-20 text-blue-400 opacity-50" />
              </div>
            </div>

            <div className="text-center mt-8 space-y-2">
              <p className="text-white text-xl font-semibold">
                Aponte a câmera para o QR Code
              </p>
              <p className="text-gray-400 text-sm">
                Posicione o código dentro da área marcada
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-800 border-t border-gray-700">
          <Button
            onClick={() => navigate('/staff/confirm-pickup')}
            variant="outline"
            className="w-full h-12 bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
          >
            Simular leitura
          </Button>
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
