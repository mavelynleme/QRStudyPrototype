import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Alert, AlertDescription } from '../../components/ui/alert';
import { ArrowLeft, Mail, CheckCircle2 } from 'lucide-react';

export function PasswordRecoveryScreen() {
  const navigate = useNavigate();
  const [step, setStep] = useState<'email' | 'sent' | 'reset'>('email');

  if (step === 'sent') {
    return (
      <MobileFrame>
        <div className="flex flex-col items-center justify-center h-full px-6 bg-gradient-to-b from-blue-50 to-white">
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">
                  E-mail enviado
                </h2>
                <p className="text-gray-600 max-w-sm mx-auto">
                  Enviamos um link de recuperação para seu e-mail. Verifique sua caixa de entrada.
                </p>
              </div>

              <Alert className="border-blue-200 bg-blue-50 text-left">
                <Mail className="w-4 h-4 text-blue-600" />
                <AlertDescription className="text-sm text-blue-900">
                  O link expira em 1 hora. Não esqueça de verificar a pasta de spam.
                </AlertDescription>
              </Alert>
            </div>
          </div>

          <div className="w-full space-y-3 pb-8">
            <Button
              onClick={() => setStep('reset')}
              className="w-full h-12"
            >
              Já recebi o código
            </Button>
            <Button
              onClick={() => navigate('/login')}
              variant="ghost"
              className="w-full h-12"
            >
              Voltar ao login
            </Button>
          </div>
        </div>
      </MobileFrame>
    );
  }

  if (step === 'reset') {
    return (
      <MobileFrame>
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setStep('email')}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex-1 px-6 pt-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Nova senha
                </h2>
                <p className="text-gray-600">
                  Digite o código recebido e crie uma nova senha
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="code">Código de verificação</Label>
                  <Input
                    id="code"
                    placeholder="000000"
                    className="h-12 text-center text-2xl tracking-widest"
                    maxLength={6}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newPassword">Nova senha</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    placeholder="Mínimo 8 caracteres"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmNewPassword">Confirmar nova senha</Label>
                  <Input
                    id="confirmNewPassword"
                    type="password"
                    placeholder="Digite a senha novamente"
                    className="h-12"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 border-t bg-white">
            <Button
              onClick={() => navigate('/login')}
              className="w-full h-12"
            >
              Redefinir senha
            </Button>
          </div>
        </div>
      </MobileFrame>
    );
  }

  return (
    <MobileFrame>
      <div className="flex flex-col h-full">
        <div className="p-4 border-b">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/login')}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex-1 px-6 pt-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Recuperar senha
              </h2>
              <p className="text-gray-600">
                Digite seu e-mail para receber o link de recuperação
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="recoveryEmail">E-mail</Label>
                <Input
                  id="recoveryEmail"
                  type="email"
                  placeholder="seu@email.com"
                  className="h-12"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t bg-white">
          <Button
            onClick={() => setStep('sent')}
            className="w-full h-12"
          >
            Enviar link de recuperação
          </Button>
        </div>
      </div>
    </MobileFrame>
  );
}
