"use client";

import { cn } from "@/lib/utils";

interface Tab {
  label: string;
  value: string;
  icon?: React.ElementType;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (value: string) => void;
  className?: string;
}

export default function Tabs({
  tabs,
  activeTab,
  onTabChange,
  className,
}: TabsProps) {
  return (
    <div className="w-full overflow-hidden">
      <div
        className={cn(
          "flex gap-1.5 overflow-x-auto no-scrollbar scroll-smooth rounded-xl bg-surface-dark p-1.5 sm:justify-center",
          className
        )}
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.value;
          return (
            <button
              key={tab.value}
              onClick={() => onTabChange(tab.value)}
              className={cn(
                "flex items-center justify-center gap-2 whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer shrink-0 sm:flex-1",
                isActive
                  ? "bg-white text-primary shadow-sm ring-1 ring-black/5"
                  : "text-slate-600 hover:text-primary hover:bg-white/50"
              )}
            >
              {Icon && <Icon className={cn("h-4 w-4", isActive ? "text-primary" : "text-slate-400")} />}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
