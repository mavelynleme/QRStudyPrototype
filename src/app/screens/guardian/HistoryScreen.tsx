import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { ArrowLeft, Filter, CheckCircle2, Calendar } from 'lucide-react';

export function HistoryScreen() {
  const navigate = useNavigate();

  const history = [
    { id: 1, date: '13/05/2026', time: '17:30', student: 'João Silva', responsible: 'Maria Silva', status: 'Confirmada' },
    { id: 2, date: '12/05/2026', time: '17:25', student: 'João Silva', responsible: 'Maria Silva', status: 'Confirmada' },
    { id: 3, date: '10/05/2026', time: '17:35', student: 'João Silva', responsible: 'João Silva (Pai)', status: 'Confirmada' },
    { id: 4, date: '09/05/2026', time: '17:20', student: 'João Silva', responsible: 'Maria Silva', status: 'Confirmada' },
    { id: 5, date: '08/05/2026', time: '17:30', student: 'João Silva', responsible: 'Maria Silva', status: 'Confirmada' },
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
                onClick={() => navigate('/dashboard')}
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <h2 className="text-lg font-bold text-gray-900">
                Histórico de retiradas
              </h2>
            </div>

            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="date"
                  className="pl-10 h-11"
                />
              </div>
              <Button variant="outline" size="icon" className="h-11">
                <Filter className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {history.map((item) => (
            <Card
              key={item.id}
              className="p-4 cursor-pointer hover:border-blue-500 transition-colors"
              onClick={() => navigate('/pickup-receipt')}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="font-semibold text-gray-900">{item.student}</div>
                  <div className="text-sm text-gray-600">{item.responsible}</div>
                </div>
                <div className="flex items-center gap-1 text-green-600">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.status}</span>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                {item.date} às {item.time}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </MobileFrame>
  );
}
