import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { ArrowLeft, RefreshCw } from 'lucide-react';

export function QRCodeScreen() {
  const navigate = useNavigate();

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
              QR Code
            </h2>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center p-6">
          <div className="text-center space-y-6">
            <Card className="p-8 mx-auto">
              <div className="w-64 h-64 bg-white border-4 border-gray-200 rounded-lg flex items-center justify-center">
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
            </Card>

            <div className="space-y-2">
              <div className="font-semibold text-gray-900 text-lg">João Silva</div>
              <div className="text-gray-600">Responsável: Maria Silva</div>
            </div>

            <Button
              onClick={() => navigate('/qrcode-validity')}
              variant="outline"
              className="w-full h-12"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Atualizar código
            </Button>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}
