import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Alert, AlertDescription } from '../../components/ui/alert';
import { ArrowLeft, Info, Upload } from 'lucide-react';

export function TemporaryAuthRequestScreen() {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <div className="flex flex-col h-full">
        <div className="p-4 border-b bg-white">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/dashboard')}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h2 className="text-lg font-bold text-gray-900">
              Autorização temporária
            </h2>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 bg-gray-50">
          <Alert className="mb-6 border-blue-200 bg-blue-50">
            <Info className="w-4 h-4 text-blue-600" />
            <AlertDescription className="text-sm text-blue-900">
              A autorização só será válida após aprovação da escola.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="authName">Nome da pessoa autorizada</Label>
              <Input
                id="authName"
                placeholder="Digite o nome completo"
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="authDoc">Documento (CPF/RG)</Label>
              <Input
                id="authDoc"
                placeholder="000.000.000-00"
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="authPhone">Telefone</Label>
              <Input
                id="authPhone"
                type="tel"
                placeholder="(00) 00000-0000"
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="authRelation">Grau de vínculo</Label>
              <Select>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="familiar">Familiar</SelectItem>
                  <SelectItem value="amigo">Amigo da família</SelectItem>
                  <SelectItem value="vizinho">Vizinho</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="student">Aluno</Label>
              <Select>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Selecione o aluno" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">João Silva</SelectItem>
                  <SelectItem value="2">Maria Silva</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="authDate">Data da autorização</Label>
              <Input
                id="authDate"
                type="date"
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="authTime">Horário permitido</Label>
              <Input
                id="authTime"
                type="time"
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label>Documento de identificação</Label>
              <Button variant="outline" className="w-full h-12">
                <Upload className="w-5 h-5 mr-2" />
                Enviar documento
              </Button>
            </div>
          </div>
        </div>

        <div className="p-6 border-t bg-white">
          <Button
            onClick={() => navigate('/awaiting-approval')}
            className="w-full h-12"
          >
            Enviar solicitação
          </Button>
        </div>
      </div>
    </MobileFrame>
  );
}
