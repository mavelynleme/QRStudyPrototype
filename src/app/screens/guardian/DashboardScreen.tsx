import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Logo } from '../../components/qrstudy/Logo';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { QrCode, History, Bell, User, ChevronRight } from 'lucide-react';

export function DashboardScreen() {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <div className="flex flex-col h-full bg-gray-50">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 pb-20">
          <div className="flex items-center justify-between mb-6">
            <Logo variant="white" size="sm" />
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
                onClick={() => navigate('/notifications')}
              >
                <Bell className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
                onClick={() => navigate('/profile')}
              >
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="text-white">
            <h1 className="text-2xl font-bold mb-1">Olá, Maria!</h1>
            <p className="text-blue-100">Bem-vinda de volta</p>
          </div>
        </div>

        <div className="flex-1 -mt-12 px-6 pb-6 overflow-y-auto">
          <Card
            className="p-5 mb-6 border-blue-200 bg-gradient-to-br from-blue-50 to-white cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate('/student/1')}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  JS
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-lg">João Silva</div>
                  <div className="text-sm text-gray-600">5º ano - Turma A</div>
                  <div className="text-xs text-green-600 font-medium mt-1">Autorização ativa</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <Card
              className="p-4 cursor-pointer hover:border-blue-500 transition-colors"
              onClick={() => navigate('/pickup-method', { state: { from: '/dashboard' } })}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <QrCode className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">Gerar QR Code</div>
              </div>
            </Card>

            <Card
              className="p-4 cursor-pointer hover:border-blue-500 transition-colors"
              onClick={() => navigate('/history')}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <History className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">Histórico</div>
              </div>
            </Card>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">Ações rápidas</h3>

            <Card
              className="p-4 cursor-pointer hover:border-blue-500 transition-colors"
              onClick={() => navigate('/my-students')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="font-medium text-gray-900">Meus alunos</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </Card>

            <Card
              className="p-4 cursor-pointer hover:border-blue-500 transition-colors"
              onClick={() => navigate('/request-temporary-auth')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-orange-600" />
                  </div>
                  <span className="font-medium text-gray-900">Autorização temporária</span>
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
