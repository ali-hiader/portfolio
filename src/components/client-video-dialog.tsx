import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export function ClientVideoDialog() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="/client-video.mp4"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="/client-video.mp4"
      />
    </div>
  );
}
