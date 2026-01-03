import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  name: string;
  icon: LucideIcon;
  colorClass: string;
  onClick?: () => void;
}

const CategoryCard = ({ name, icon: Icon, colorClass, onClick }: CategoryCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group flex flex-col items-center gap-3 rounded-xl p-6 transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl hover:-translate-y-1 active:scale-100 active:translate-y-0",
        colorClass
      )}
    >
      <div className="rounded-full bg-card/80 p-4 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:scale-110">
        <Icon className="h-8 w-8 transition-transform duration-300 group-hover:rotate-12" />
      </div>
      <span className="font-medium text-sm text-foreground transition-colors duration-300">{name}</span>
    </button>
  );
}

export default CategoryCard;
