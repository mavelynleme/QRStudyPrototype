import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Alert, AlertDescription } from '../../components/ui/alert';
import { ArrowLeft, Info } from 'lucide-react';

export function StudentLinkRequestScreen() {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <div className="flex flex-col h-full">
        <div className="p-4 border-b bg-white">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/select-school')}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h2 className="text-lg font-bold text-gray-900">
              Solicitar vínculo com aluno
            </h2>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 bg-gray-50">
          <Alert className="mb-6 border-blue-200 bg-blue-50">
            <Info className="w-4 h-4 text-blue-600" />
            <AlertDescription className="text-sm text-blue-900">
              A escola irá validar os dados antes de liberar a geração do QR Code.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="studentName">Nome completo do aluno</Label>
              <Input
                id="studentName"
                placeholder="Digite o nome do aluno"
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="birthDate">Data de nascimento</Label>
              <Input
                id="birthDate"
                type="date"
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="grade">Série/Turma</Label>
              <Select>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Selecione a série" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1ano">1º ano</SelectItem>
                  <SelectItem value="2ano">2º ano</SelectItem>
                  <SelectItem value="3ano">3º ano</SelectItem>
                  <SelectItem value="4ano">4º ano</SelectItem>
                  <SelectItem value="5ano">5º ano</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="registration">Matrícula (opcional)</Label>
              <Input
                id="registration"
                placeholder="Se souber, digite a matrícula"
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="school">Escola</Label>
              <Input
                id="school"
                value="Colégio Estadual Dom Pedro II"
                disabled
                className="h-12 bg-gray-100"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="relationship">Grau de parentesco</Label>
              <Select>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pai">Pai</SelectItem>
                  <SelectItem value="mae">Mãe</SelectItem>
                  <SelectItem value="avo">Avô/Avó</SelectItem>
                  <SelectItem value="tio">Tio/Tia</SelectItem>
                  <SelectItem value="responsavel">Responsável legal</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="p-6 border-t bg-white">
          <Button
            onClick={() => navigate('/upload-documents')}
            className="w-full h-12"
          >
            Enviar solicitação
          </Button>
        </div>
      </div>
    </MobileFrame>
  );
}
