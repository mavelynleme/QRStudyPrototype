import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Logo } from '../../components/qrstudy/Logo';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { ArrowLeft } from 'lucide-react';

export function LoginScreen() {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <div className="flex flex-col h-full">
        <div className="p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex-1 px-6 pt-8">
          <div className="flex justify-center mb-8">
            <Logo size="md" />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Entrar na sua conta
              </h2>
              <p className="text-gray-600">
                Acesse o QRStudy para gerenciar as autorizações
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="h-12"
                />
              </div>

              <button
                onClick={() => navigate('/password-recovery')}
                className="text-sm text-blue-600 hover:underline"
              >
                Esqueci minha senha
              </button>
            </div>

            <div className="space-y-3 pt-4">
              <Button
                onClick={() => navigate('/dashboard')}
                className="w-full h-12"
              >
                Entrar
              </Button>

              <div className="text-center">
                <span className="text-sm text-gray-600">Não tem uma conta? </span>
                <button
                  onClick={() => navigate('/register')}
                  className="text-sm text-blue-600 hover:underline font-medium"
                >
                  Criar conta
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}
