import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Checkbox } from '../../components/ui/checkbox';
import { Separator } from '../../components/ui/separator';
import { ArrowLeft, Shield, FileText, Trash2, Download, Eye } from 'lucide-react';

export function PrivacyLGPDScreen() {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <div className="flex flex-col h-full bg-gray-50">
        <div className="p-4 border-b bg-white">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/profile')}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h2 className="text-lg font-bold text-gray-900">
              Privacidade e LGPD
            </h2>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex gap-3">
              <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-900">
                <p className="font-medium mb-1">Seus dados estão protegidos</p>
                <p>
                  O QRStudy segue as diretrizes da Lei Geral de Proteção de Dados (LGPD) para garantir a segurança e privacidade das suas informações.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Como usamos seus dados</h3>
            <Card className="p-4">
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-gray-900 mb-1">Dados pessoais</div>
                  <p className="text-gray-600">Nome, CPF, e-mail e telefone são usados para identificação e comunicação.</p>
                </div>
                <Separator />
                <div>
                  <div className="font-medium text-gray-900 mb-1">Documentos enviados</div>
                  <p className="text-gray-600">RG, comprovantes e outros documentos são armazenados de forma criptografada para validação pela escola.</p>
                </div>
                <Separator />
                <div>
                  <div className="font-medium text-gray-900 mb-1">Histórico de retiradas</div>
                  <p className="text-gray-600">Registros de data, hora e responsável são mantidos para segurança e auditoria.</p>
                </div>
                <Separator />
                <div>
                  <div className="font-medium text-gray-900 mb-1">Reconhecimento facial (opcional)</div>
                  <p className="text-gray-600">Dados biométricos são processados localmente e armazenados apenas com seu consentimento explícito.</p>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Seus direitos</h3>
            <Card className="p-4 space-y-3">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => {}}
              >
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-900">Acessar meus dados</span>
                </div>
                <Button variant="ghost" size="sm">Ver</Button>
              </div>
              <Separator />
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => {}}
              >
                <div className="flex items-center gap-3">
                  <Download className="w-5 h-5 text-green-600" />
                  <span className="text-gray-900">Baixar meus dados</span>
                </div>
                <Button variant="ghost" size="sm">Baixar</Button>
              </div>
              <Separator />
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => {}}
              >
                <div className="flex items-center gap-3">
                  <Trash2 className="w-5 h-5 text-red-600" />
                  <span className="text-gray-900">Solicitar exclusão de dados</span>
                </div>
                <Button variant="ghost" size="sm">Solicitar</Button>
              </div>
            </Card>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Política de privacidade</h3>
            <Card className="p-4">
              <div className="flex items-start gap-3 mb-4">
                <FileText className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-600">
                  Leia nossa política de privacidade completa para entender como coletamos, usamos e protegemos suas informações.
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Ler política completa
              </Button>
            </Card>
          </div>

          <Card className="p-4">
            <div className="flex items-start gap-3">
              <Checkbox id="privacy-consent" defaultChecked />
              <label htmlFor="privacy-consent" className="text-sm text-gray-700 cursor-pointer">
                Li e aceito a política de privacidade do QRStudy e concordo com o tratamento dos meus dados pessoais conforme descrito.
              </label>
            </div>
          </Card>
        </div>

        <div className="p-6 border-t bg-white">
          <Button
            onClick={() => navigate('/profile')}
            className="w-full h-12"
          >
            Continuar
          </Button>
        </div>
      </div>
    </MobileFrame>
  );
}
