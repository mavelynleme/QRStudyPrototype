import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { ArrowLeft, Filter, CheckCircle2, XCircle, Calendar, ScanLine } from 'lucide-react';

export function StaffHistoryScreen() {
  const navigate = useNavigate();

  const history = [
    { id: 1, time: '17:30', student: 'João Silva', responsible: 'Maria Silva', status: 'confirmed' },
    { id: 2, time: '17:25', student: 'Ana Santos', responsible: 'Pedro Santos', status: 'confirmed' },
    { id: 3, time: '17:20', student: 'Carlos Oliveira', responsible: 'Julia Oliveira', status: 'confirmed' },
    { id: 4, time: '17:15', student: 'Beatriz Costa', responsible: 'Marcos Costa', status: 'rejected' },
    { id: 5, time: '17:10', student: 'Lucas Ferreira', responsible: 'Amanda Ferreira', status: 'confirmed' },
  ];

  return (
    <MobileFrame>
      <div className="flex flex-col h-full bg-gray-50">
        <div className="bg-white border-b">
          <div className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/staff/scanner')}
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Histórico de validações
                </h2>
                <div className="text-sm text-gray-600">
                  Funcionário: Ana Costa
                </div>
              </div>
            </div>

            <div className="flex gap-2 mb-4">
              <div className="flex-1 relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="date"
                  defaultValue="2026-05-14"
                  className="pl-10 h-11"
                />
              </div>
              <Button variant="outline" size="icon" className="h-11">
                <Filter className="w-5 h-5" />
              </Button>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="w-full grid grid-cols-3">
                <TabsTrigger value="all">Todas</TabsTrigger>
                <TabsTrigger value="confirmed">Confirmadas</TabsTrigger>
                <TabsTrigger value="rejected">Recusadas</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {history.map((item) => (
            <Card key={item.id} className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{item.student}</div>
                  <div className="text-sm text-gray-600">{item.responsible}</div>
                </div>
                <div className="flex items-center gap-1">
                  {item.status === 'confirmed' ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-600">Confirmada</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-red-600" />
                      <span className="text-sm font-medium text-red-600">Recusada</span>
                    </>
                  )}
                </div>
              </div>
              <div className="text-sm text-gray-500">
                Hoje às {item.time}
              </div>
            </Card>
          ))}
        </div>

        <div className="p-4 bg-white border-t">
          <Button
            onClick={() => navigate('/staff/scanner')}
            className="w-full h-12"
          >
            <ScanLine className="w-5 h-5 mr-2" />
            Nova validação
          </Button>
        </div>
      </div>
    </MobileFrame>
  );
}
