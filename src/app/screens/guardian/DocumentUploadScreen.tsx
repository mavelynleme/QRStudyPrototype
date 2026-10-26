import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { ArrowLeft, Upload, FileText, Check } from 'lucide-react';

export function DocumentUploadScreen() {
  const navigate = useNavigate();

  const documents = [
    { id: 1, name: 'RG ou CNH', uploaded: true },
    { id: 2, name: 'Comprovante de residência', uploaded: false },
  ];

  return (
    <MobileFrame>
      <div className="flex flex-col h-full bg-gray-50">
        <div className="p-4 border-b bg-white">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/request-student-link')}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h2 className="text-lg font-bold text-gray-900">
              Envio de documentos
            </h2>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-900">
              Envie os documentos necessários para validação da escola
            </p>
          </div>

          <div className="space-y-3">
            {documents.map((doc) => (
              <Card key={doc.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      doc.uploaded ? 'bg-green-100' : 'bg-gray-100'
                    }`}>
                      {doc.uploaded ? (
                        <Check className="w-5 h-5 text-green-600" />
                      ) : (
                        <FileText className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{doc.name}</div>
                      {doc.uploaded && (
                        <div className="text-sm text-green-600">Enviado</div>
                      )}
                    </div>
                  </div>
                  {!doc.uploaded && (
                    <Button size="sm" variant="outline">
                      <Upload className="w-4 h-4 mr-2" />
                      Enviar
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>

          <Button variant="outline" className="w-full h-12">
            <Upload className="w-5 h-5 mr-2" />
            Adicionar outro documento
          </Button>
        </div>

        <div className="p-6 border-t bg-white">
          <Button
            onClick={() => navigate('/awaiting-approval')}
            className="w-full h-12"
          >
            Enviar para análise
          </Button>
        </div>
      </div>
    </MobileFrame>
  );
}
