import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '../../components/ui/alert';
import { XCircle, AlertTriangle, RefreshCw, Flag } from 'lucide-react';

export function InvalidQRScreen() {
  const navigate = useNavigate();

  const reasons = [
    { id: 1, title: 'QR Code expirado', desc: 'O código ultrapassou o tempo de validade de 5 minutos', severity: 'warning' },
    { id: 2, title: 'Responsável não autorizado', desc: 'Esta pessoa não está cadastrada para retirar o aluno', severity: 'error' },
    { id: 3, title: 'Código já utilizado', desc: 'Este QR Code já foi usado para uma retirada', severity: 'warning' },
    { id: 4, title: 'Código não pertence ao sistema', desc: 'QR Code inválido ou não reconhecido', severity: 'error' },
  ];

  const currentReason = reasons[0];

  return (
    <MobileFrame>
      <div className="flex flex-col h-full bg-gray-50">
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="pt-8 text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <XCircle className="w-10 h-10 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              QR Code inválido
            </h2>
            <p className="text-gray-600">
              Este código não pode ser utilizado
            </p>
          </div>

          <Alert className="border-red-200 bg-red-50">
            <AlertTriangle className="w-4 h-4 text-red-600" />
            <AlertTitle className="text-red-900 mb-2">Motivo da rejeição</AlertTitle>
            <AlertDescription className="text-red-800">
              <div className="font-medium mb-1">{currentReason.title}</div>
              <div className="text-sm">{currentReason.desc}</div>
            </AlertDescription>
          </Alert>

          <Card className="p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Possíveis causas</h3>
            <div className="space-y-3">
              {reasons.map((reason) => (
                <div
                  key={reason.id}
                  className={`flex gap-3 p-3 rounded-lg ${
                    reason.id === currentReason.id
                      ? 'bg-red-50 border border-red-200'
                      : 'bg-gray-50'
                  }`}
                >
                  <AlertTriangle
                    className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      reason.severity === 'error' ? 'text-red-600' : 'text-orange-600'
                    }`}
                  />
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">{reason.title}</div>
                    <div className="text-gray-600">{reason.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-4 bg-blue-50 border-blue-200">
            <div className="text-sm text-blue-900">
              <p className="font-medium mb-2">O que fazer?</p>
              <ul className="list-disc list-inside space-y-1 text-blue-800">
                <li>Oriente o responsável a gerar um novo QR Code</li>
                <li>Verifique a identidade do responsável</li>
                <li>Em caso de dúvida, contate a coordenação</li>
              </ul>
            </div>
          </Card>

          <div className="space-y-3">
            <Button
              onClick={() => navigate('/staff/scanner')}
              className="w-full h-12"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Tentar novamente
            </Button>

            <Button
              variant="outline"
              className="w-full h-12"
            >
              <Flag className="w-5 h-5 mr-2" />
              Reportar ocorrência
            </Button>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}
