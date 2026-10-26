import { useNavigate } from 'react-router';
import { MobileFrame } from '../../components/qrstudy/MobileFrame';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/tabs';
import { ArrowLeft, CheckCircle2, FileX, QrCode, UserCheck, AlertTriangle } from 'lucide-react';

export function NotificationsScreen() {
  const navigate = useNavigate();

  const notifications = [
    { id: 1, type: 'approval', icon: CheckCircle2, iconColor: 'green', title: 'Cadastro aprovado', message: 'Seu cadastro foi aprovado pela escola', time: '2 horas atrás', unread: true },
    { id: 2, type: 'pickup', icon: QrCode, iconColor: 'blue', title: 'Retirada confirmada', message: 'João Silva foi retirado com sucesso', time: '1 dia atrás', unread: false },
    { id: 3, type: 'approval', icon: UserCheck, iconColor: 'green', title: 'Autorização temporária aprovada', message: 'A autorização para Ana Santos foi aprovada', time: '2 dias atrás', unread: false },
    { id: 4, type: 'alert', icon: AlertTriangle, iconColor: 'orange', title: 'Tentativa de retirada recusada', message: 'QR Code expirado detectado', time: '3 dias atrás', unread: false },
    { id: 5, type: 'approval', icon: FileX, iconColor: 'red', title: 'Documento recusado', message: 'O documento enviado precisa ser corrigido', time: '5 dias atrás', unread: false },
  ];

  const getIconComponent = (Icon: any, color: string) => {
    const colorClasses = {
      green: 'bg-green-100 text-green-600',
      blue: 'bg-blue-100 text-blue-600',
      orange: 'bg-orange-100 text-orange-600',
      red: 'bg-red-100 text-red-600',
    };
    return (
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${colorClasses[color as keyof typeof colorClasses]}`}>
        <Icon className="w-5 h-5" />
      </div>
    );
  };

  return (
    <MobileFrame>
      <div className="flex flex-col h-full bg-gray-50">
        <div className="p-4 border-b bg-white">
          <div className="flex items-center gap-3 mb-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/dashboard')}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h2 className="text-lg font-bold text-gray-900">
              Notificações
            </h2>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full grid grid-cols-4">
              <TabsTrigger value="all">Todas</TabsTrigger>
              <TabsTrigger value="approvals">Aprovações</TabsTrigger>
              <TabsTrigger value="pickups">Retiradas</TabsTrigger>
              <TabsTrigger value="alerts">Alertas</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {notifications.map((notif) => (
            <Card
              key={notif.id}
              className={`p-4 cursor-pointer hover:border-blue-500 transition-colors ${
                notif.unread ? 'bg-blue-50 border-blue-200' : ''
              }`}
            >
              <div className="flex gap-3">
                {getIconComponent(notif.icon, notif.iconColor)}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <div className="font-semibold text-gray-900">{notif.title}</div>
                    {notif.unread && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    )}
                  </div>
                  <div className="text-sm text-gray-600 mb-1">{notif.message}</div>
                  <div className="text-xs text-gray-500">{notif.time}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </MobileFrame>
  );
}
