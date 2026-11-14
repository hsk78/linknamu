"use client";

type Props = {
  title: string;
  url: string;
  description?: string;
  count?: number;
  onClick?: () => void;
};

export default function LinkCard({ title, url, description, count = 0, onClick }: Props) {
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
      onClick={() => {
        trackClick();
        onClick?.();
      }}
      className="relative block rounded-3xl border border-white/60 bg-white/40 px-6 py-4 text-center shadow-[0_8px_24px_-12px_rgba(120,70,30,0.25)] backdrop-blur-xl transition duration-200 hover:bg-white/60 hover:shadow-[0_10px_28px_-12px_rgba(120,70,30,0.3)] dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:bg-white/10"
    >
      <span className="block px-8 font-semibold">{title}</span>
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs tabular-nums text-stone-500 dark:text-stone-400">
        {count}회
      </span>
      {description && (
        <span className="mt-1 block text-xs text-stone-500 dark:text-stone-400">
          {description}
        </span>
      )}
    </a>
  );
}
