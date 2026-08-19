import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageNumbers = (): (number | "...")[] => {
    const pages: (number | "...")[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    pages.push(1);

    if (currentPage > 3) pages.push("...");

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) pages.push(i);

    if (currentPage < totalPages - 2) pages.push("...");

    pages.push(totalPages);

    return pages;
  };

  return (
    <nav
      className={cn("flex items-center justify-center gap-1", className)}
      aria-label="Pagination"
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-lg px-3 py-2 text-sm font-medium text-secondary hover:bg-surface-dark disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer"
      >
        Prev
      </button>

      {getPageNumbers().map((page, i) =>
        page === "..." ? (
          <span
            key={`ellipsis-${i}`}
            className="px-3 py-2 text-sm text-gray-400"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={cn(
              "rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer",
              currentPage === page
                ? "bg-primary text-white"
                : "text-secondary hover:bg-surface-dark"
            )}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-lg px-3 py-2 text-sm font-medium text-secondary hover:bg-surface-dark disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer"
      >
        Next
      </button>
    </nav>
  );
}
