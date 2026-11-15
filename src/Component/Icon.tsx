import type { LucideIcon } from "lucide-react";
type Button = {
  title?: string;
  icon: LucideIcon;
};
export function Icon({ icon: Icon }: Button) {
  return <Icon size={18} className="mx-3 mt-4" color="gray" />;
}
