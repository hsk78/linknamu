"use client";

type Props = {
  title: string;
  url: string;
  description?: string;
};

export default function LinkCard({ title, url, description }: Props) {
  // 클릭 집계는 실패해도 링크 이동을 막지 않도록 keepalive로 전송
  const trackClick = () => {
    fetch("/api/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
      keepalive: true,
    }).catch(() => {});
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackClick}
      className="block rounded-2xl border border-stone-200 bg-white px-5 py-4 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-stone-700 dark:bg-stone-900"
    >
      <span className="block font-semibold">{title}</span>
      {description && (
        <span className="mt-1 block text-xs text-stone-500 dark:text-stone-400">
          {description}
        </span>
      )}
    </a>
  );
}
