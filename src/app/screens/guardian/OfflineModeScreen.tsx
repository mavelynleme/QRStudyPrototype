import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '../../components/ui/alert';
import { WifiOff, QrCode, RefreshCw } from 'lucide-react';

export function OfflineModeScreen() {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <div className="flex flex-col h-full bg-gray-50">
        <div className="flex-1 p-6 space-y-6">
          <div className="pt-8 text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <WifiOff className="w-10 h-10 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Modo offline
            </h2>
            <p className="text-gray-600">
              Você está sem conexão com a internet
            </p>
          </div>

          <Alert className="border-blue-200 bg-blue-50">
            <AlertTitle className="text-blue-900 mb-2">QR Code salvo disponível</AlertTitle>
            <AlertDescription className="text-sm text-blue-800">
              O QR Code salvo continua disponível para apresentação na portaria. A validação será feita pelo sistema da escola no momento da leitura.
            </AlertDescription>
          </Alert>

          <Card className="p-6">
            <div className="w-48 h-48 bg-white border-4 border-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
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
                </g>
              </svg>
            </div>
            <div className="text-center space-y-1">
              <div className="font-semibold text-gray-900">João Silva</div>
              <div className="text-sm text-gray-600">Salvo em: 14/05/2026 17:15</div>
            </div>
          </Card>

          <div className="space-y-3">
            <Button
              onClick={() => navigate('/qrcode')}
              className="w-full h-12"
            >
              <QrCode className="w-5 h-5 mr-2" />
              Exibir QR Code salvo
            </Button>

            <Button
              onClick={() => navigate('/dashboard')}
              variant="outline"
              className="w-full h-12"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Tentar reconectar
            </Button>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}
