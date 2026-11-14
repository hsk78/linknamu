import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";

// TODO: 더미 값 — 실제 내용은 나중에 교체 (추후 MongoDB 연동 시 DB에서 불러오기)
const profile = {
  name: "허슨가이",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  imageUrl: "/profile.jpg",
};

const links = [
  { title: "🐙 깃허브", url: "https://github.com/hsk78" },
  { title: "✍️ 블로그", url: "https://blog.naver.com/dhrmadl" },
  { title: "📬 이메일", url: "mailto:hsk78@outlook.kr" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="flex w-full max-w-sm flex-col items-center">
        <ThemeToggle />
        <ProfileHeader
          name={profile.name}
          bio={profile.bio}
          imageUrl={profile.imageUrl}
        />
        <section aria-label="링크 목록" className="mt-12 flex w-full flex-col gap-4">
          {links.map((link) => (
            <LinkCard key={link.url} {...link} />
          ))}
        </section>
      </div>
    </main>
  );
}
