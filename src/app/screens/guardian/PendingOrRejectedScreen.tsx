import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Button } from '../../components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '../../components/ui/alert';
import { AlertCircle, Upload, FileEdit, MessageCircle } from 'lucide-react';

export function PendingOrRejectedScreen() {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <div className="flex flex-col h-full bg-gray-50">
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="pt-4">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-orange-600" />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
              Seu cadastro precisa de correção
            </h2>
            <p className="text-gray-600 text-center">
              A escola identificou pendências que precisam ser resolvidas
            </p>
          </div>

          <Alert className="border-orange-200 bg-orange-50">
            <AlertCircle className="w-4 h-4 text-orange-600" />
            <AlertTitle className="text-orange-900">Motivo da pendência</AlertTitle>
            <AlertDescription className="text-orange-800">
              O documento de identificação está ilegível. Por favor, envie uma foto mais nítida do documento.
            </AlertDescription>
          </Alert>

          <div className="space-y-3">
            <Button
              onClick={() => navigate('/request-student-link')}
              className="w-full h-12"
            >
              <FileEdit className="w-5 h-5 mr-2" />
              Corrigir cadastro
            </Button>

            <Button
              onClick={() => navigate('/upload-documents')}
              variant="outline"
              className="w-full h-12"
            >
              <Upload className="w-5 h-5 mr-2" />
              Reenviar documento
            </Button>

            <Button
              variant="outline"
              className="w-full h-12"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar com a escola
            </Button>
          </div>
        </div>

        <div className="p-6 border-t bg-white">
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="w-full h-12"
          >
            Voltar ao início
          </Button>
        </div>
      </div>
    </MobileFrame>
  );
}
