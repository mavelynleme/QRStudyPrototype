import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Logo } from '../../components/qrstudy/Logo';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { ArrowLeft, Building2 } from 'lucide-react';

export function StaffLoginScreen() {
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

        <div className="flex-1 px-6 pt-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="flex justify-center mb-8">
            <Logo size="md" />
          </div>

          <div className="space-y-6">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                Acesso de funcionário
              </h2>
              <p className="text-gray-600 text-center">
                Área exclusiva para funcionários da escola
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="staffId">Matrícula institucional</Label>
                <Input
                  id="staffId"
                  placeholder="Digite sua matrícula"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="staffPassword">Senha</Label>
                <Input
                  id="staffPassword"
                  type="password"
                  placeholder="••••••••"
                  className="h-12"
                />
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Button
                onClick={() => navigate('/staff/scanner')}
                className="w-full h-12"
              >
                Entrar
              </Button>

              <div className="text-center">
                <button className="text-sm text-blue-600 hover:underline">
                  Esqueci minha senha
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}
