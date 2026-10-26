import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Button } from '../../components/ui/button';
import { Clock } from 'lucide-react';

export function AwaitingApprovalScreen() {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <div className="flex flex-col items-center justify-center h-full px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-6">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <Clock className="w-12 h-12 text-blue-600" />
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Aguardando aprovação
              </h2>
              <p className="text-gray-600 max-w-sm mx-auto">
                Seu cadastro está em análise pela escola. Você será notificado quando for aprovado.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left">
              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Escola:</span>
                  <span className="font-medium">Colégio Dom Pedro II</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Aluno:</span>
                  <span className="font-medium">João Silva</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tempo estimado:</span>
                  <span className="font-medium">2-3 dias úteis</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full space-y-3 pb-8">
          <Button
            onClick={() => navigate('/approval-status')}
            variant="outline"
            className="w-full h-12"
          >
            Ver status detalhado
          </Button>
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="w-full h-12"
          >
            Voltar ao início
          </Button>
        </div>
      </div>
    </MobileFrame>
  );
}
