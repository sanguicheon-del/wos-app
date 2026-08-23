type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-medium tracking-[-0.02em] text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
