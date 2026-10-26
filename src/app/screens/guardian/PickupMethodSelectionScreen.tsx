import { useNavigate, useLocation } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { ArrowLeft, QrCode, ScanFace, CheckCircle2, ChevronRight } from 'lucide-react';

export function PickupMethodSelectionScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string })?.from ?? '/dashboard';

  return (
    <MobileFrame>
      <div className="flex flex-col h-full bg-gray-50">
        <div className="p-4 border-b bg-white">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(from)}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h2 className="text-lg font-bold text-gray-900">
              Escolha o método de retirada
            </h2>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          <p className="text-gray-600 text-sm">
            Selecione como deseja validar sua autorização para retirar o aluno.
          </p>

          {/* QR Code — método principal */}
          <Card className="p-5 border-blue-300 bg-gradient-to-br from-blue-50 to-white hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => navigate('/qrcode-validity')}
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <QrCode className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-gray-900">QR Code</h3>
                  <span className="text-xs bg-blue-600 text-white font-semibold px-2 py-0.5 rounded-full">
                    Recomendado
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Gere um código para apresentar ao funcionário da escola.
                </p>
                <ul className="space-y-1 text-xs text-gray-500">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                    Método principal e mais seguro
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                    Funciona sem internet (offline)
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                    Validade configurável
                  </li>
                </ul>
              </div>
              <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
            </div>

            <Button
              className="w-full h-11 mt-4"
              onClick={(e) => {
                e.stopPropagation();
                navigate('/qrcode-validity');
              }}
            >
              <QrCode className="w-4 h-4 mr-2" />
              Continuar com QR Code
            </Button>
          </Card>

          {/* Reconhecimento Facial — método complementar */}
          <Card className="p-5 border-purple-200 bg-gradient-to-br from-purple-50 to-white hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => navigate('/facial/consent')}
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <ScanFace className="w-7 h-7 text-purple-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-gray-900">Reconhecimento Facial</h3>
                  <span className="text-xs bg-purple-100 text-purple-700 font-semibold px-2 py-0.5 rounded-full">
                    Opcional
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Utilize o reconhecimento facial como método alternativo de identificação.
                </p>
                <span className="text-xs text-amber-600 font-medium bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                  Funcionalidade em protótipo
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
            </div>

            <Button
              className="w-full h-11 mt-4 bg-purple-600 hover:bg-purple-700 text-white"
              onClick={(e) => {
                e.stopPropagation();
                navigate('/facial/consent');
              }}
            >
              <ScanFace className="w-4 h-4 mr-2" />
              Continuar com reconhecimento facial
            </Button>
          </Card>
        </div>
      </div>
    </MobileFrame>
  );
}
