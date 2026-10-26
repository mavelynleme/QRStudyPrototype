import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card } from '../../components/ui/card';
import { ArrowLeft, Search, MapPin } from 'lucide-react';

export function SchoolSelectionScreen() {
  const navigate = useNavigate();

  const schools = [
    { id: 1, name: 'Colégio Estadual Dom Pedro II', city: 'São Paulo', address: 'Rua das Flores, 123' },
    { id: 2, name: 'Escola Municipal Monteiro Lobato', city: 'São Paulo', address: 'Av. Paulista, 456' },
    { id: 3, name: 'Instituto Educacional Objetivo', city: 'São Paulo', address: 'Rua Santos, 789' },
  ];

  return (
    <MobileFrame>
      <div className="flex flex-col h-full bg-gray-50">
        <div className="bg-white p-4 border-b">
          <div className="flex items-center gap-3 mb-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/register')}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Selecionar escola
              </h2>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Buscar escola..."
              className="pl-10 h-12"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {schools.map((school) => (
            <Card
              key={school.id}
              className="p-4 hover:border-blue-500 cursor-pointer transition-colors"
              onClick={() => navigate('/request-student-link')}
            >
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">
                  {school.name}
                </h3>
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <div>{school.city}</div>
                    <div>{school.address}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </MobileFrame>
  );
}
