import { useNavigate, useParams } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Separator } from '../../components/ui/separator';
import { ArrowLeft, QrCode, History, Edit, UserPlus, CheckCircle2, Calendar, School } from 'lucide-react';

export function StudentDetailsScreen() {
  const navigate = useNavigate();
  const { id } = useParams();

  const recentHistory = [
    { id: 1, date: '13/05/2026', time: '17:30', responsible: 'Maria Silva', status: 'Confirmada' },
    { id: 2, date: '12/05/2026', time: '17:25', responsible: 'Maria Silva', status: 'Confirmada' },
    { id: 3, date: '10/05/2026', time: '17:35', responsible: 'João Silva (Pai)', status: 'Confirmada' },
  ];

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
              Detalhes do aluno
            </h2>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 pb-16">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl">
                JS
              </div>
              <div className="text-white">
                <h3 className="text-2xl font-bold">João Silva</h3>
                <div className="text-blue-100 text-sm mt-1">5º ano - Turma A</div>
              </div>
            </div>
          </div>

          <div className="px-6 -mt-10 pb-6 space-y-4">
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <School className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-gray-900">Informações do aluno</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Escola:</span>
                  <span className="font-medium text-gray-900">Colégio Dom Pedro II</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Série/Turma:</span>
                  <span className="font-medium text-gray-900">5º ano - Turma A</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Status da autorização:</span>
                  <span className="flex items-center gap-1 text-green-600 font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    Ativa
                  </span>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Responsável vinculado</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Nome:</span>
                  <span className="font-medium text-gray-900">Maria Silva</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Parentesco:</span>
                  <span className="font-medium text-gray-900">Mãe</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Documento:</span>
                  <span className="font-medium text-gray-900">***.***.456-**</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Status do vínculo:</span>
                  <span className="text-green-600 font-medium">Ativo</span>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-green-50 border-green-200">
              <h4 className="font-semibold text-gray-900 mb-3">Autorização de retirada</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">Status atual:</span>
                  <span className="font-medium text-green-700">Autorizado</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Data de aprovação:</span>
                  <span className="font-medium text-gray-900">05/05/2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Validado por:</span>
                  <span className="font-medium text-gray-900">Colégio Dom Pedro II</span>
                </div>
                <p className="text-xs text-gray-700 mt-2">
                  Você está autorizado a retirar este aluno da escola mediante apresentação do QR Code válido.
                </p>
              </div>
            </Card>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Ações rápidas</h4>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  onClick={() => navigate('/pickup-method', { state: { from: `/student/${id}` } })}
                  className="h-12"
                >
                  <QrCode className="w-5 h-5 mr-2" />
                  Gerar QR
                </Button>
                <Button
                  onClick={() => navigate('/history')}
                  variant="outline"
                  className="h-12"
                >
                  <History className="w-5 h-5 mr-2" />
                  Histórico
                </Button>
                <Button
                  variant="outline"
                  className="h-12"
                >
                  <Edit className="w-5 h-5 mr-2" />
                  Solicitar alteração
                </Button>
                <Button
                  onClick={() => navigate('/request-temporary-auth')}
                  variant="outline"
                  className="h-12"
                >
                  <UserPlus className="w-5 h-5 mr-2" />
                  Autorização temp.
                </Button>
              </div>
            </div>

            <Card className="p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Histórico recente</h4>
              <div className="space-y-3">
                {recentHistory.map((item) => (
                  <div key={item.id}>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-medium text-gray-900">{item.responsible}</div>
                        <div className="text-sm text-gray-600">
                          {item.date} às {item.time}
                        </div>
                      </div>
                      <div className="text-sm text-green-600 font-medium">
                        {item.status}
                      </div>
                    </div>
                    {item.id < recentHistory.length && <Separator className="mt-3" />}
                  </div>
                ))}
              </div>
              <Button
                onClick={() => navigate('/history')}
                variant="link"
                className="w-full mt-3"
              >
                Ver histórico completo
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}
