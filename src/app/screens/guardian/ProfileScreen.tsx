import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Separator } from '../../components/ui/separator';
import { ArrowLeft, ChevronRight, Shield, Lock, FileText, LogOut, User } from 'lucide-react';

export function ProfileScreen() {
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
              Meu perfil
            </h2>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 pb-16">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl">
                MS
              </div>
              <div className="text-white">
                <h3 className="text-xl font-bold">Maria Silva</h3>
                <div className="text-blue-100 text-sm">maria.silva@email.com</div>
              </div>
            </div>
          </div>

          <div className="px-6 -mt-10 pb-6 space-y-4">
            <Card className="p-5">
              <h4 className="font-semibold text-gray-900 mb-4">Dados pessoais</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Nome completo:</span>
                  <span className="font-medium text-gray-900">Maria Silva</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-gray-600">CPF:</span>
                  <span className="font-medium text-gray-900">***.***.456-**</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-gray-600">E-mail:</span>
                  <span className="font-medium text-gray-900">maria.silva@email.com</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-gray-600">Telefone:</span>
                  <span className="font-medium text-gray-900">(11) 98765-4321</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-gray-600">Data de nascimento:</span>
                  <span className="font-medium text-gray-900">15/03/1985</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Editar dados pessoais
              </Button>
            </Card>

            <Card
              className="p-4 cursor-pointer hover:border-blue-500 transition-colors"
              onClick={() => navigate('/student/1')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    JS
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">João Silva</div>
                    <div className="text-sm text-gray-600">Aluno vinculado</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </Card>

            <div className="space-y-2">
              <Card
                className="p-4 cursor-pointer hover:border-blue-500 transition-colors"
                onClick={() => navigate('/account-security')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-medium text-gray-900">Segurança da conta</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </Card>

              <Card
                className="p-4 cursor-pointer hover:border-blue-500 transition-colors"
                onClick={() => navigate('/privacy')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Lock className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="font-medium text-gray-900">Privacidade e LGPD</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </Card>

              <Card className="p-4 cursor-pointer hover:border-blue-500 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <FileText className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="font-medium text-gray-900">Termos de uso</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </Card>

              <Card
                className="p-4 cursor-pointer hover:border-red-500 transition-colors"
                onClick={() => navigate('/')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <LogOut className="w-5 h-5 text-red-600" />
                    </div>
                    <span className="font-medium text-red-600">Sair da conta</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}
