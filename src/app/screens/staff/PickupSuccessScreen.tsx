import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Logo } from '../../components/qrstudy/Logo';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Separator } from '../../components/ui/separator';
import { CheckCircle2, ScanLine } from 'lucide-react';

export function PickupSuccessScreen() {
  const navigate = useNavigate();

  const today = new Date();
  const date = today.toLocaleDateString('pt-BR');
  const time = today.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

  return (
    <MobileFrame>
      <div className="flex flex-col h-full bg-gray-50">
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Logo */}
          <div className="pt-4 flex justify-center">
            <Logo variant="color" size="sm" />
          </div>

          {/* Confirmation icon + title */}
          <div className="text-center space-y-3">
            <div
              className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto"
              style={{ animation: 'pop-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) both' }}
            >
              <CheckCircle2 className="w-14 h-14 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Retirada confirmada!</h2>
            <p className="text-gray-600 text-sm">
              A retirada do aluno foi registrada com sucesso.
            </p>
          </div>

          {/* Details card */}
          <Card className="p-5 border-green-200 bg-green-50">
            <h3 className="font-semibold text-gray-900 mb-4">Detalhes da retirada</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Aluno:</span>
                <span className="font-medium text-gray-900">João Silva</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-gray-600">Responsável:</span>
                <span className="font-medium text-gray-900">Maria Silva</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-gray-600">Funcionário:</span>
                <span className="font-medium text-gray-900">Ana Costa</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-gray-600">Data:</span>
                <span className="font-medium text-gray-900">{date}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-gray-600">Horário:</span>
                <span className="font-medium text-gray-900">{time}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-gray-600">Método:</span>
                <span className="font-medium text-gray-900">QR Code</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Status:</span>
                <span className="flex items-center gap-1 text-green-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  Confirmada
                </span>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="p-6 border-t bg-white">
          <Button
            onClick={() => navigate('/staff/scanner')}
            className="w-full h-14 text-base font-semibold"
          >
            <ScanLine className="w-5 h-5 mr-2" />
            Realizar nova leitura
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes pop-in {
          0%   { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1);   opacity: 1; }
        }
      `}</style>
    </MobileFrame>
  );
}
