interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={className}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 dark:text-white/90 px-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-400 px-4">
          {subtitle}
        </p>
      )}
    </div>
  );
}
