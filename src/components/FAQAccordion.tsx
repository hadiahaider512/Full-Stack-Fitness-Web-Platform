"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export default function FAQAccordion({
  items,
  showCategory = false,
}: {
  items: FAQItem[];
  showCategory?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const grouped = showCategory
    ? items.reduce<Record<string, FAQItem[]>>((acc, item) => {
        const cat = item.category || "General";
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(item);
        return acc;
      }, {})
    : null;

  if (grouped) {
    return (
      <div className="space-y-10">
        {Object.entries(grouped).map(([category, catItems]) => (
          <div key={category}>
            <h3 className="text-xl font-heading font-semibold text-secondary mb-4">
              {category}
            </h3>
            <div className="space-y-3">
              {catItems.map((item) => {
                const globalIndex = items.indexOf(item);
                return (
                  <AccordionItem
                    key={globalIndex}
                    item={item}
                    isOpen={openIndex === globalIndex}
                    onToggle={() => toggle(globalIndex)}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => toggle(index)}
        />
      ))}
    </div>
  );
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={cn(
        "border rounded-xl overflow-hidden transition-all",
        isOpen ? "border-primary/30 bg-white shadow-md" : "border-slate-200 bg-white"
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 text-left"
      >
        <span className="font-heading font-semibold text-secondary pr-4">
          {item.question}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-slate-500 shrink-0 transition-transform duration-300",
            isOpen && "rotate-180 text-primary"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-slate-600 leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
