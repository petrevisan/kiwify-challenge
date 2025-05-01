import Image from "next/image";

interface PaymentMethodProps {
  text: string;
  iconPath: string;
}

export default function PaymentMethod({ text, iconPath }: PaymentMethodProps) {
  return (
    <div className="flex px-5 gap-2">
      <Image src={iconPath} height={20} width={20} alt="icon" />
      <p>{text}</p>
    </div>
  );
}
