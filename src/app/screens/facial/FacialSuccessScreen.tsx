import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { CheckCircle2, Home, History } from 'lucide-react';

export function FacialSuccessScreen() {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <div className="flex flex-col h-full bg-gray-50">
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="pt-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Identidade validada!
            </h2>
            <p className="text-gray-600">
              Reconhecimento facial realizado com sucesso
            </p>
          </div>

          <Card className="p-6">
            <div className="text-center space-y-3">
              <div className="font-semibold text-gray-900 text-lg">João Silva</div>
              <div className="text-sm text-gray-600">5º ano - Turma A</div>
              <div className="text-sm text-gray-600">Responsável: Maria Silva</div>
            </div>

            <div className="mt-4 pt-4 border-t">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Método:</span>
                  <span className="font-medium text-gray-900">Reconhecimento Facial</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Data:</span>
                  <span className="font-medium text-gray-900">14/05/2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Horário:</span>
                  <span className="font-medium text-gray-900">17:30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="flex items-center gap-1 text-green-600 font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    Validado
                  </span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-green-50 border-green-200">
            <div className="text-sm text-green-900 text-center">
              <p className="font-medium mb-1">Retirada autorizada</p>
              <p>Dirija-se à portaria da escola para retirar o aluno</p>
            </div>
          </Card>

          <div className="space-y-3">
            <Button
              onClick={() => navigate('/dashboard')}
              className="w-full h-12"
            >
              <Home className="w-5 h-5 mr-2" />
              Voltar ao início
            </Button>

            <Button
              onClick={() => navigate('/history')}
              variant="outline"
              className="w-full h-12"
            >
              <History className="w-5 h-5 mr-2" />
              Ver histórico
            </Button>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}
