import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Separator } from '../../components/ui/separator';
import { CheckCircle2, Share2, History, Home } from 'lucide-react';

export function PickupReceiptScreen() {
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
              Retirada confirmada
            </h2>
            <p className="text-gray-600">
              O aluno foi retirado com sucesso
            </p>
          </div>

          <Card className="p-6 space-y-4">
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">Comprovante de retirada</div>
              <div className="text-2xl font-bold text-gray-900">#RT-2026-001234</div>
            </div>

            <Separator />

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Aluno:</span>
                <span className="font-medium text-gray-900">João Silva</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Escola:</span>
                <span className="font-medium text-gray-900">Colégio Dom Pedro II</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Responsável:</span>
                <span className="font-medium text-gray-900">Maria Silva</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Parentesco:</span>
                <span className="font-medium text-gray-900">Mãe</span>
              </div>

              <Separator />

              <div className="flex justify-between">
                <span className="text-gray-600">Validado por:</span>
                <span className="font-medium text-gray-900">Ana Costa (Portaria)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Data:</span>
                <span className="font-medium text-gray-900">13/05/2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Horário:</span>
                <span className="font-medium text-gray-900">17:30</span>
              </div>

              <Separator />

              <div className="flex justify-between">
                <span className="text-gray-600">Método usado:</span>
                <span className="font-medium text-gray-900">QR Code</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="flex items-center gap-1 text-green-600 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  Confirmada
                </span>
              </div>
            </div>
          </Card>

          <div className="space-y-3">
            <Button variant="outline" className="w-full h-12">
              <Share2 className="w-5 h-5 mr-2" />
              Compartilhar comprovante
            </Button>

            <Button
              onClick={() => navigate('/history')}
              variant="outline"
              className="w-full h-12"
            >
              <History className="w-5 h-5 mr-2" />
              Ver histórico
            </Button>

            <Button
              onClick={() => navigate('/dashboard')}
              className="w-full h-12"
            >
              <Home className="w-5 h-5 mr-2" />
              Voltar ao início
            </Button>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}
