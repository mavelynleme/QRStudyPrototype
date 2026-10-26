import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { ArrowLeft, CheckCircle2, Clock, FileText } from 'lucide-react';

export function ApprovalStatusScreen() {
  const navigate = useNavigate();

  const timeline = [
    { id: 1, title: 'Cadastro enviado', completed: true, date: '10/05/2026 14:30' },
    { id: 2, title: 'Documentos recebidos', completed: true, date: '10/05/2026 14:35' },
    { id: 3, title: 'Em análise pela escola', completed: true, date: '11/05/2026 09:00' },
    { id: 4, title: 'Aguardando aprovação', completed: false, date: null },
    { id: 5, title: 'Cadastro aprovado', completed: false, date: null },
  ];

  return (
    <MobileFrame>
      <div className="flex flex-col h-full bg-gray-50">
        <div className="p-4 border-b bg-white">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/awaiting-approval')}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h2 className="text-lg font-bold text-gray-900">
              Status da aprovação
            </h2>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <Card className="p-4 bg-blue-50 border-blue-200">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700">Escola responsável:</span>
                <span className="font-medium text-gray-900">Colégio Dom Pedro II</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Tempo estimado:</span>
                <span className="font-medium text-gray-900">2-3 dias úteis</span>
              </div>
            </div>
          </Card>

          <div className="space-y-4">
            {timeline.map((item, index) => (
              <div key={item.id} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    item.completed ? 'bg-green-100' : 'bg-gray-100'
                  }`}>
                    {item.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    ) : (
                      <Clock className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className={`w-0.5 h-12 ${
                      item.completed ? 'bg-green-200' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <div className={`font-medium ${
                    item.completed ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {item.title}
                  </div>
                  {item.date && (
                    <div className="text-sm text-gray-500 mt-1">{item.date}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            className="w-full h-12"
            onClick={() => navigate('/upload-documents')}
          >
            <FileText className="w-5 h-5 mr-2" />
            Ver documentos enviados
          </Button>
        </div>
      </div>
    </MobileFrame>
  );
}
