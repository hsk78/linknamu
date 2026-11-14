type Props = {
  name: string;
  bio: string;
  imageUrl?: string;
};

export default function ProfileHeader({ name, bio, imageUrl }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      {imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          alt={`${name} 프로필 사진`}
          className="h-[150px] w-[150px] rounded-full object-cover ring-4 ring-white/70 shadow-[0_12px_32px_-8px_rgba(120,70,30,0.35)] dark:ring-white/10 dark:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6)]"
        />
      ) : (
        <div
          aria-hidden
          className="flex h-[150px] w-[150px] items-center justify-center rounded-full bg-emerald-100 text-6xl font-bold text-emerald-700 shadow-md dark:bg-emerald-900 dark:text-emerald-200"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-7 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone-600 dark:text-stone-400">
        {bio}
      </p>
    </header>
  );
}
