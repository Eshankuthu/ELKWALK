import Image from "next/image";

interface ClientLogosProps {
  className?: string;
}

// Placeholder client logos - replace with actual client logos
const clients = [
  "Airtable",
  "stackoverflow",
  "supabase",
];

export function ClientLogos({ className }: ClientLogosProps) {
  return (
    <div className={`${className || ""}`}>
      <div className="flex items-center gap-8 md:gap-12 overflow-x-auto scrollbar-hide pb-4">
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-8 md:h-10 opacity-80 hover:opacity-100 transition-all duration-300 flex items-center justify-center"
          >
            <div className="text-white text-xs md:text-sm font-medium whitespace-nowrap">
              {client}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
