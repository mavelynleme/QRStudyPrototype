import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { ArrowLeft, QrCode, History, ChevronRight, UserPlus } from 'lucide-react';

export function MyStudentsScreen() {
  const navigate = useNavigate();

  const students = [
    {
      id: 1,
      name: 'João Silva',
      school: 'Colégio Dom Pedro II',
      grade: '5º ano - Turma A',
      status: 'Ativa',
      statusColor: 'green',
    },
    {
      id: 2,
      name: 'Maria Silva',
      school: 'Colégio Dom Pedro II',
      grade: '3º ano - Turma B',
      status: 'Ativa',
      statusColor: 'green',
    },
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
              Meus alunos
            </h2>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {students.map((student) => (
            <Card key={student.id} className="p-4">
              <div
                className="flex items-center justify-between mb-4 cursor-pointer"
                onClick={() => navigate(`/student/${student.id}`)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{student.name}</div>
                    <div className="text-sm text-gray-600">{student.school}</div>
                    <div className="text-sm text-gray-600">{student.grade}</div>
                    <div className={`text-xs font-medium mt-1 text-${student.statusColor}-600`}>
                      Autorização {student.status}
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/pickup-method', { state: { from: '/my-students' } })}
                >
                  <QrCode className="w-4 h-4 mr-2" />
                  QR Code
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/history')}
                >
                  <History className="w-4 h-4 mr-2" />
                  Histórico
                </Button>
              </div>
            </Card>
          ))}

          <Button
            onClick={() => navigate('/request-student-link')}
            variant="outline"
            className="w-full h-12"
          >
            <UserPlus className="w-5 h-5 mr-2" />
            Solicitar novo vínculo
          </Button>
        </div>
      </div>
    </MobileFrame>
  );
}
