import Image from "next/image";

export function Logo({
  showWordmark = true,
  size = 36,
}: {
  showWordmark?: boolean;
  size?: number;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <Image
        src="/logo.png"
        alt="RepoRadar logo"
        width={size}
        height={size}
        priority
        className="h-9 w-9 object-contain"
      />
      {showWordmark ? (
        <span className="text-lg font-semibold tracking-tight text-navy-800">
          RepoRadar
        </span>
      ) : null}
    </div>
  );
}
