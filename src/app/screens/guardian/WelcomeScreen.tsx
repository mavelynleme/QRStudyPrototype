import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Logo } from '../../components/qrstudy/Logo';
import { Button } from '../../components/ui/button';

export function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <div className="flex flex-col items-center justify-center h-full px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-6">
            <Logo size="lg" />
            <div className="space-y-3">
              <h1 className="text-3xl font-bold text-gray-900">
                Bem-vindo ao QRStudy
              </h1>
              <p className="text-gray-600 max-w-sm mx-auto">
                Sistema seguro de validação de retirada escolar por QR Code
              </p>
            </div>
          </div>
        </div>

        <div className="w-full space-y-3 pb-8">
          <Button
            onClick={() => navigate('/login')}
            className="w-full h-14 text-lg"
          >
            Entrar
          </Button>
          <Button
            onClick={() => navigate('/register')}
            variant="outline"
            className="w-full h-14 text-lg"
          >
            Criar conta
          </Button>
          <Button
            onClick={() => navigate('/staff/login')}
            variant="ghost"
            className="w-full h-14 text-lg text-blue-600"
          >
            Sou funcionário da escola
          </Button>
        </div>
      </div>
    </MobileFrame>
  );
}
