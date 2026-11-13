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
          className="h-44 w-44 rounded-full object-cover shadow-md"
        />
      ) : (
        <div
          aria-hidden
          className="flex h-44 w-44 items-center justify-center rounded-full bg-emerald-100 text-6xl font-bold text-emerald-700 shadow-md dark:bg-emerald-900 dark:text-emerald-200"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-5 text-xl font-bold">{name}</h1>
      <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">{bio}</p>
    </header>
  );
}
