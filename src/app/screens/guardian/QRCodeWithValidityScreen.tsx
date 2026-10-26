import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Alert, AlertDescription } from '../../components/ui/alert';
import { ArrowLeft, RefreshCw, Download, Clock, CheckCircle2 } from 'lucide-react';

export function QRCodeWithValidityScreen() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(300);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <MobileFrame>
      <div className="flex flex-col h-full bg-gray-50">
        <div className="p-4 border-b bg-white">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/dashboard')}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h2 className="text-lg font-bold text-gray-900">
              QR Code de retirada
            </h2>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <Alert className="border-green-200 bg-green-50">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <AlertDescription className="text-sm text-green-900">
              QR Code gerado com sucesso! Apresente na portaria da escola.
            </AlertDescription>
          </Alert>

          <Card className="p-8">
            <div className="w-full aspect-square bg-white border-4 border-gray-200 rounded-lg flex items-center justify-center mb-4">
              <svg viewBox="0 0 256 256" className="w-full h-full">
                <rect width="256" height="256" fill="white" />
                <g fill="black">
                  <rect x="16" y="16" width="48" height="48" />
                  <rect x="192" y="16" width="48" height="48" />
                  <rect x="16" y="192" width="48" height="48" />
                  <rect x="24" y="24" width="32" height="32" fill="white" />
                  <rect x="200" y="24" width="32" height="32" fill="white" />
                  <rect x="24" y="200" width="32" height="32" fill="white" />
                  <rect x="32" y="32" width="16" height="16" />
                  <rect x="208" y="32" width="16" height="16" />
                  <rect x="32" y="208" width="16" height="16" />
                  <rect x="80" y="16" width="16" height="16" />
                  <rect x="112" y="16" width="16" height="16" />
                  <rect x="80" y="48" width="16" height="16" />
                  <rect x="160" y="16" width="16" height="16" />
                  <rect x="144" y="48" width="16" height="16" />
                  <rect x="96" y="80" width="64" height="16" />
                  <rect x="80" y="96" width="16" height="64" />
                  <rect x="160" y="96" width="16" height="64" />
                  <rect x="96" y="160" width="64" height="16" />
                  <rect x="112" y="112" width="32" height="32" />
                  <rect x="192" y="80" width="48" height="16" />
                  <rect x="16" y="80" width="48" height="16" />
                  <rect x="192" y="224" width="16" height="16" />
                  <rect x="16" y="224" width="16" height="16" />
                  <rect x="80" y="192" width="16" height="16" />
                  <rect x="160" y="192" width="16" height="16" />
                </g>
              </svg>
            </div>

            <div className="text-center space-y-1">
              <div className="font-semibold text-gray-900 text-lg">João Silva</div>
              <div className="text-sm text-gray-600">Responsável: Maria Silva</div>
              <div className="text-sm text-gray-600">Colégio Dom Pedro II</div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-600" />
                <span className="font-medium text-gray-900">Tempo restante</span>
              </div>
              <div className="text-2xl font-bold text-orange-600">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </div>
            </div>
            <div className="text-sm text-gray-600">
              QR Code válido por 5 minutos
            </div>
          </Card>

          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">1</div>
              <div>Geração: 14/05/2026 às 17:15</div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">2</div>
              <div>Expiração: 14/05/2026 às 17:20</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={() => navigate('/qrcode-validity')}
              variant="outline"
              className="h-12"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Atualizar
            </Button>
            <Button
              onClick={() => navigate('/offline')}
              variant="outline"
              className="h-12"
            >
              <Download className="w-5 h-5 mr-2" />
              Salvar offline
            </Button>
          </div>

          <Button
            onClick={() => navigate('/dashboard')}
            variant="ghost"
            className="w-full h-12"
          >
            Cancelar
          </Button>
        </div>
      </div>
    </MobileFrame>
  );
}
