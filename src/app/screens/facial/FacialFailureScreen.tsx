import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '../../components/ui/alert';
import { XCircle, RefreshCw, RotateCcw, QrCode } from 'lucide-react';

export function FacialFailureScreen() {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <div className="flex flex-col h-full bg-gray-50">
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="pt-8 text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <XCircle className="w-10 h-10 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Falha na validação
            </h2>
            <p className="text-gray-600">
              Não foi possível validar seu rosto
            </p>
          </div>

          <Alert className="border-red-200 bg-red-50">
            <XCircle className="w-4 h-4 text-red-600" />
            <AlertTitle className="text-red-900 mb-2">Possíveis causas</AlertTitle>
            <AlertDescription className="text-red-800">
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Iluminação inadequada</li>
                <li>Rosto não centralizado</li>
                <li>Uso de acessórios (óculos escuros, chapéu)</li>
                <li>Movimento durante a captura</li>
              </ul>
            </AlertDescription>
          </Alert>

          <Card className="p-4">
            <h3 className="font-semibold text-gray-900 mb-3">O que fazer?</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  1
                </div>
                <p className="text-gray-700">
                  Encontre um local bem iluminado
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  2
                </div>
                <p className="text-gray-700">
                  Remova óculos escuros, chapéus ou máscaras
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  3
                </div>
                <p className="text-gray-700">
                  Mantenha o rosto centralizado e imóvel
                </p>
              </div>
            </div>
          </Card>

          <div className="space-y-3">
            <Button
              onClick={() => navigate('/facial/validation')}
              className="w-full h-12"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Tentar novamente
            </Button>

            <Button
              onClick={() => navigate('/facial/registration')}
              variant="outline"
              className="w-full h-12"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Refazer cadastro facial
            </Button>

            <Button
              onClick={() => navigate('/qrcode-validity')}
              variant="outline"
              className="w-full h-12"
            >
              <QrCode className="w-5 h-5 mr-2" />
              Usar QR Code
            </Button>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}
