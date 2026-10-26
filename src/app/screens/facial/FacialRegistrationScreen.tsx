import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Progress } from '../../components/ui/progress';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export function FacialRegistrationScreen() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState<'instructions' | 'capturing' | 'complete'>('instructions');

  const startCapture = () => {
    setStep('capturing');
    let current = 0;
    const interval = setInterval(() => {
      current += 10;
      setProgress(current);
      if (current >= 100) {
        clearInterval(interval);
        setStep('complete');
        setTimeout(() => navigate('/dashboard'), 2000);
      }
    }, 300);
  };

  if (step === 'instructions') {
    return (
      <MobileFrame>
        <div className="flex flex-col h-full bg-gray-50">
          <div className="p-4 border-b bg-white">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/facial/consent')}
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <h2 className="text-lg font-bold text-gray-900">
                Cadastro facial
              </h2>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="pt-4 text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="8" r="4" strokeWidth="2" />
                  <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Vamos cadastrar seu rosto
              </h3>
              <p className="text-gray-600">
                Siga as instruções para um cadastro perfeito
              </p>
            </div>

            <Card className="p-5">
              <h4 className="font-semibold text-gray-900 mb-4">Instruções importantes</h4>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Ambiente iluminado</div>
                    <p className="text-sm text-gray-600">
                      Certifique-se de estar em um local bem iluminado
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Posicione seu rosto</div>
                    <p className="text-sm text-gray-600">
                      Mantenha seu rosto centralizado na moldura
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Retire acessórios</div>
                    <p className="text-sm text-gray-600">
                      Remova óculos escuros, chapéus ou máscaras
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Fique parado</div>
                    <p className="text-sm text-gray-600">
                      Mantenha-se imóvel durante a captura
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="p-6 border-t bg-white">
            <Button
              onClick={startCapture}
              className="w-full h-12"
            >
              Iniciar cadastro
            </Button>
          </div>
        </div>
      </MobileFrame>
    );
  }

  if (step === 'capturing') {
    return (
      <MobileFrame>
        <div className="flex flex-col h-full bg-gray-900">
          <div className="p-4 bg-gray-800">
            <div className="text-white text-center">
              <div className="text-sm text-gray-400 mb-2">Capturando seu rosto</div>
              <Progress value={progress} className="h-2" />
              <div className="text-xs text-gray-400 mt-2">{progress}%</div>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center p-6">
            <div className="relative">
              <div className="w-80 h-96 border-4 border-purple-500 rounded-3xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent" />

                <div className="absolute top-8 left-8 w-12 h-12 border-t-4 border-l-4 border-purple-500 rounded-tl-2xl" />
                <div className="absolute top-8 right-8 w-12 h-12 border-t-4 border-r-4 border-purple-500 rounded-tr-2xl" />
                <div className="absolute bottom-8 left-8 w-12 h-12 border-b-4 border-l-4 border-purple-500 rounded-bl-2xl" />
                <div className="absolute bottom-8 right-8 w-12 h-12 border-b-4 border-r-4 border-purple-500 rounded-br-2xl" />

                <div className="flex items-center justify-center h-full">
                  <svg className="w-32 h-32 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="8" r="4" strokeWidth="2" />
                    <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              <div className="text-center mt-6">
                <p className="text-white text-lg font-semibold">
                  Mantenha-se centralizado
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Processando...
                </p>
              </div>
            </div>
          </div>
        </div>
      </MobileFrame>
    );
  }

  return (
    <MobileFrame>
      <div className="flex flex-col items-center justify-center h-full px-6 bg-gradient-to-b from-purple-50 to-white">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900">
              Cadastro concluído!
            </h2>
            <p className="text-gray-600 max-w-sm mx-auto">
              Seu reconhecimento facial foi cadastrado com sucesso
            </p>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}
