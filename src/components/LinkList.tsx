"use client";

import { useEffect, useState } from "react";
import LinkCard from "./LinkCard";

type LinkItem = { title: string; url: string; description?: string };

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 데이터를 받기 전에는 빈 객체 → 모든 카드가 0회로 표시됨
  const [counts, setCounts] = useState<Record<string, number>>({});

  // 페이지가 열릴 때 모든 링크의 클릭 수를 한 번에 가져옴
  useEffect(() => {
    let cancelled = false;
    fetch("/api/click")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data: { counts: Record<string, number> }) => {
        if (!cancelled) setCounts(data.counts);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  // 클릭 즉시 화면의 숫자를 1 올림 (서버 저장은 LinkCard에서 전송)
  const handleClick = (url: string) =>
    setCounts((prev) => ({ ...prev, [url]: (prev[url] ?? 0) + 1 }));

  return (
    <>
      {links.map((link) => (
        <LinkCard
          key={link.url}
          {...link}
          count={counts[link.url] ?? 0}
          onClick={() => handleClick(link.url)}
        />
      ))}
    </>
  );
}
