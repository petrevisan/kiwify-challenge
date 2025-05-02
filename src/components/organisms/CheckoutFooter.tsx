import Image from "next/image";

export default function CheckoutFooter() {
  return (
    <div className="flex flex-col p-5">
      <Image
        src={"/kiwify-gray.webp"}
        width={100}
        height={50}
        alt="Kiwify-logo"
        className="mx-auto"
      />
      <p className="text-[12px] text-gray-500 text-center mt-5">
        Ao clicar em Pagar Agora, eu declaro que (i) estou ciente que a Kiwify
        está processando essa compra em nome de DARK CHANNELS NEGOCIOS DIGITAIS
        LTDA e que não possui responsabilidade pelo conteúdo, oferta, e nem faz
        controle prévio do infoproduto; (ii) que li e concordo com os Termos de
        Compra, Termos de Uso, e Política de Privacidade.{" "}
      </p>
    </div>
  );
}
