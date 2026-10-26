import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Checkbox } from '../../components/ui/checkbox';
import { Separator } from '../../components/ui/separator';
import { ArrowLeft, Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

export function FacialConsentScreen() {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <div className="flex flex-col h-full bg-gray-50">
        <div className="p-4 border-b bg-white">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/facial/method-selection')}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h2 className="text-lg font-bold text-gray-900">
              Consentimento de uso
            </h2>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="pt-4">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
              Reconhecimento facial é opcional
            </h3>
            <p className="text-gray-600 text-center">
              Leia as informações sobre o tratamento dos dados biométricos
            </p>
          </div>

          <Card className="p-4 bg-yellow-50 border-yellow-200">
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-yellow-900">
                <p className="font-medium mb-1">Uso totalmente opcional</p>
                <p>
                  Você pode continuar usando o QR Code normalmente. O reconhecimento facial é apenas uma alternativa.
                </p>
              </div>
            </div>
          </Card>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Como funciona</h4>
            <Card className="p-4 space-y-3">
              <div className="flex gap-3">
                <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <div className="font-medium text-gray-900 mb-1">Dados criptografados</div>
                  <p className="text-gray-600">
                    Sua biometria facial é convertida em dados criptografados e armazenada de forma segura.
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex gap-3">
                <Eye className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <div className="font-medium text-gray-900 mb-1">Processamento local</div>
                  <p className="text-gray-600">
                    A captura facial é processada localmente no seu dispositivo antes de ser enviada.
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex gap-3">
                <Shield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <div className="font-medium text-gray-900 mb-1">Uso exclusivo</div>
                  <p className="text-gray-600">
                    Os dados biométricos são usados apenas para validação de retirada escolar.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Seus direitos</h4>
            <Card className="p-4 text-sm text-gray-700">
              <ul className="space-y-2">
                <li>• Você pode cancelar o uso a qualquer momento</li>
                <li>• Seus dados podem ser excluídos mediante solicitação</li>
                <li>• O QR Code continuará funcionando normalmente</li>
                <li>• Nenhuma informação facial será compartilhada</li>
              </ul>
            </Card>
          </div>

          <Card className="p-4 bg-white">
            <div className="flex items-start gap-3">
              <Checkbox id="facial-consent" />
              <label htmlFor="facial-consent" className="text-sm text-gray-700 cursor-pointer">
                Li e concordo com o uso do reconhecimento facial. Entendo que é opcional e que posso cancelar a qualquer momento.
              </label>
            </div>
          </Card>
        </div>

        <div className="p-6 border-t bg-white space-y-2">
          <Button
            onClick={() => navigate('/facial/registration')}
            className="w-full h-12"
          >
            Aceitar e continuar
          </Button>
          <Button
            onClick={() => navigate('/qrcode-validity')}
            variant="outline"
            className="w-full h-12"
          >
            Não usar reconhecimento facial
          </Button>
        </div>
      </div>
    </MobileFrame>
  );
}
