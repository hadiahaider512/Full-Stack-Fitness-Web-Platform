"use client";

import { cn } from "@/lib/utils";

interface Tab {
  label: string;
  value: string;
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
    <div
      className={cn(
        "flex gap-1 rounded-lg bg-surface-dark p-1",
        className
      )}
    >
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          className={cn(
            "flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer",
            activeTab === tab.value
              ? "bg-white text-primary shadow-sm"
              : "text-secondary hover:text-primary"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
