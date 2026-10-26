import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Switch } from '../../components/ui/switch';
import { ArrowLeft, Lock, Fingerprint, Smartphone, Trash2, ChevronRight } from 'lucide-react';

export function AccountSecurityScreen() {
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
              Segurança da conta
            </h2>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Senha e autenticação</h3>
            <Card className="p-4 space-y-4">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => navigate('/password-recovery')}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Lock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Alterar senha</div>
                    <div className="text-sm text-gray-600">Última alteração há 30 dias</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </Card>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Biometria</h3>
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Fingerprint className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Biometria ativada</div>
                    <div className="text-sm text-gray-600">Use sua digital para entrar</div>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </Card>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Dispositivos conectados</h3>
            <Card className="p-4 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">iPhone 13 Pro</div>
                  <div className="text-sm text-gray-600">Último acesso: agora</div>
                  <div className="text-xs text-green-600 mt-1">Dispositivo atual</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Samsung Galaxy S21</div>
                  <div className="text-sm text-gray-600">Último acesso: há 2 dias</div>
                  <Button variant="link" size="sm" className="h-auto p-0 text-red-600 mt-1">
                    Remover dispositivo
                  </Button>
                </div>
              </div>
            </Card>

            <Button variant="outline" className="w-full h-12 mt-3">
              Sair de todos os dispositivos
            </Button>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3 text-red-600">Zona de perigo</h3>
            <Card className="p-4 border-red-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <Trash2 className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Excluir conta</div>
                    <div className="text-sm text-gray-600">Ação permanente e irreversível</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}
