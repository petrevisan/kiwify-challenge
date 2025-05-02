import Checkout from "@/components/organisms/Checkout";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="flex gap-5">
        <div className="w-2/3 mx-auto my-20 bg-white border border-gray-300 rounded p-5">
          <Checkout />
        </div>
      </div>
    </div>
  );
}
