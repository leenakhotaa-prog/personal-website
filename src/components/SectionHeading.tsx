type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === 'center'
          ? 'mx-auto max-w-2xl text-center'
          : 'max-w-2xl'
      }
    >
      <span className="eyebrow">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
        {eyebrow}
      </span>
      <h2 className="section-title mt-4 text-balance">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
