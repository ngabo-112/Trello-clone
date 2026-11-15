import type { LucideIcon } from "lucide-react";

type SideProp = {
  text: string;
  icon: LucideIcon;
};

export default function Side({ text, icon: ICon }: SideProp) {
  return (
    <div className="flex items-center gap-3 justify-start mt-4 ml-4 hover:bg-gray-600 rounded-2xl p-2 transition-300">
      <div className="w-6 flex justify-center">
        <ICon size={18} />
      </div>

      <p>{text}</p>
    </div>
  );
}
