import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";

// TODO: 더미 값 — 실제 내용은 나중에 교체 (추후 MongoDB 연동 시 DB에서 불러오기)
const profile = {
  name: "홍길동",
  bio: "새로운 것을 만들고 기록하는 개발자입니다.",
  imageUrl: "/avatar.svg", // 더미 사진 (public/avatar.svg)
};

const links = [
  { title: "GitHub", url: "https://github.com", description: "코드와 프로젝트" },
  { title: "LinkedIn", url: "https://linkedin.com", description: "경력과 네트워크" },
  { title: "Blog", url: "https://example.com/blog", description: "개발 이야기" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-8">
      {/* 와이어프레임: 둥근 테두리 프레임 안에 원형 사진 → 이름 → 소개 → 링크 카드 3개 */}
      <div className="relative flex min-h-[640px] w-full max-w-sm flex-col items-center rounded-3xl border-2 border-stone-800 bg-white px-8 pb-12 pt-14 dark:border-stone-300 dark:bg-stone-900">
        <ThemeToggle />
        <ProfileHeader
          name={profile.name}
          bio={profile.bio}
          imageUrl={profile.imageUrl}
        />
        <section aria-label="링크 목록" className="mt-12 flex w-full flex-col gap-7">
          {links.map((link) => (
            <LinkCard key={link.url} {...link} />
          ))}
        </section>
      </div>
    </main>
  );
}
