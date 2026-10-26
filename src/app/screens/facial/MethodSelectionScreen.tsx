import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { ArrowLeft, QrCode, Scan } from 'lucide-react';

export function MethodSelectionScreen() {
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
              Escolher método
            </h2>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="pt-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
              Como você quer validar a retirada?
            </h3>
            <p className="text-gray-600 text-center">
              Escolha o método de sua preferência
            </p>
          </div>

          <Card
            className="p-6 cursor-pointer hover:border-blue-500 hover:shadow-lg transition-all"
            onClick={() => navigate('/qrcode-validity')}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <QrCode className="w-10 h-10 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">QR Code</h4>
                <p className="text-sm text-gray-600">
                  Gere um código válido por 5 minutos e apresente na portaria
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-green-600 font-medium">
                <div className="w-2 h-2 bg-green-600 rounded-full" />
                Recomendado
              </div>
            </div>
          </Card>

          <Card
            className="p-6 cursor-pointer hover:border-purple-500 hover:shadow-lg transition-all"
            onClick={() => navigate('/facial/consent')}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                <Scan className="w-10 h-10 text-purple-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Reconhecimento Facial
                </h4>
                <p className="text-sm text-gray-600">
                  Use sua biometria facial para validação rápida e segura
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-purple-600 font-medium">
                <div className="w-2 h-2 bg-purple-600 rounded-full" />
                Opcional
              </div>
            </div>
          </Card>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900">
            <p className="font-medium mb-1">Dica de segurança</p>
            <p>
              Ambos os métodos são seguros e validados pela escola. Escolha o que for mais conveniente para você.
            </p>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}
