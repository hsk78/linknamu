type Props = {
  title?: string;
  url: string;
  description?: string;
};

export default function LinkCard({ title, url, description }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block min-h-24 rounded-2xl border border-stone-800 bg-white px-5 py-4 text-center transition hover:-translate-y-0.5 hover:shadow-md dark:border-stone-300 dark:bg-stone-900"
    >
      {title && <span className="block font-semibold">{title}</span>}
      {description && (
        <span className="mt-1 block text-xs text-stone-500 dark:text-stone-400">
          {description}
        </span>
      )}
    </a>
  );
}
