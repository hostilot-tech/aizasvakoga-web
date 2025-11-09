interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  id?: string;
}

export default function SectionHeading({ 
  title, 
  subtitle, 
  centered = false,
  className = "",
  id
}: SectionHeadingProps) {
  const alignClass = centered ? "text-center mx-auto" : "";
  
  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      <h2 id={id} className="text-heading-xl md:text-display-sm font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-body-lg text-neutral-300 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
