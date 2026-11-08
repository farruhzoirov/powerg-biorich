import Image from "next/image";

/** Navy wordmark on light theme, white wordmark on dark theme. */
export default function Logo({ className = "h-12 w-auto", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <>
      <Image src="/images/logo-navy.png" alt="Power-G Bio Rich" width={272} height={230} priority={priority} className={`${className} dark:hidden`} />
      <Image src="/images/logo-tight.png" alt="Power-G Bio Rich" width={272} height={230} priority={priority} className={`${className} hidden dark:block`} />
    </>
  );
}
