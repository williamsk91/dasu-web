import Link from "next/link";

export const Logo = () => {
  return (
    <div className="relative bg-slate-200 w-min p-3 rounded-lg drop-shadow-md">
      <div className="text-xl">
        <Link href="/">DASU</Link>
      </div>
      <div className="absolute top-0 left-full translate-x-[-50%] translate-y-[-50%] right-3/4 text-xs p-1 rounded-full bg-slate-600 w-min h-min text-white">
        BETA
      </div>
    </div>
  );
};
