import { useNavigate } from 'react-router';
import { useState } from 'react';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Separator } from '../../components/ui/separator';
import { Avatar, AvatarFallback } from '../../components/ui/avatar';
import { CheckCircle2, X, AlertCircle, Loader2 } from 'lucide-react';

export function ConfirmPickupScreen() {
  const navigate = useNavigate();
  const [confirming, setConfirming] = useState(false);

  function handleConfirm() {
    if (confirming) return;
    setConfirming(true);
    setTimeout(() => navigate('/staff/pickup-success'), 800);
  }

  return (
    <MobileFrame>
      <div className="flex flex-col h-full bg-gray-50">
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="pt-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              QR Code válido
            </h2>
            <p className="text-gray-600">
              Confirme os dados antes de autorizar a retirada
            </p>
          </div>

          <Card className="p-6">
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                <Avatar className="w-20 h-20">
                  <AvatarFallback className="bg-blue-600 text-white text-2xl">
                    JS
                  </AvatarFallback>
                </Avatar>
              </div>
              <h3 className="text-xl font-bold text-gray-900">João Silva</h3>
              <div className="text-sm text-gray-600 mt-1">5º ano - Turma A</div>
            </div>

            <Separator className="my-4" />

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Responsável:</span>
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

              <Separator />

              <div className="flex justify-between">
                <span className="text-gray-600">Horário:</span>
                <span className="font-medium text-gray-900">14/05/2026 17:30</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">QR Code:</span>
                <span className="flex items-center gap-1 text-green-600 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  Válido
                </span>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-blue-50 border-blue-200">
            <div className="flex gap-2 text-sm text-blue-900">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium mb-1">Verificação adicional</p>
                <p>Solicite um documento com foto do responsável para confirmação de identidade.</p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={() => navigate('/staff/scanner')}
              variant="outline"
              className="h-14"
            >
              <X className="w-5 h-5 mr-2" />
              Cancelar
            </Button>
            <Button
              onClick={handleConfirm}
              disabled={confirming}
              className="h-14 bg-green-600 hover:bg-green-700"
            >
              {confirming
                ? <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                : <CheckCircle2 className="w-5 h-5 mr-2" />}
              {confirming ? 'Confirmando...' : 'Confirmar retirada'}
            </Button>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}
