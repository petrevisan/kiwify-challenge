import { CheckCircle2 } from "lucide-react";

export default function Success() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg text-center">
        <div className="mb-6">
          <CheckCircle2 className="w-16 h-16 mx-auto text-[#28b463]" />
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Pagamento Realizado com Sucesso!
        </h1>

        <p className="text-gray-600 mb-6">
          Obrigado pela sua compra! Em breve você receberá um e-mail com todos
          os detalhes da sua transação.
        </p>

        <div className="space-y-3 text-sm text-gray-500">
          <p>• Você receberá uma confirmação no seu e-mail</p>
          <p>• O acesso ao produto será liberado em instantes</p>
          <p>• Acompanhe o status do pedido no seu e-mail</p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Dúvidas? Entre em contato com nosso suporte
          </p>
        </div>
      </div>
    </div>
  );
}
