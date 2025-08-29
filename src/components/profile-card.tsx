import { assets } from "@/assets/assets";
import EmailIcon from "@/icons/email";
import InstaGramIcon from "@/icons/insta-gram";
import TwitterIcon from "@/icons/twitter";
import Image from "next/image";
import Link from "next/link";

export default function ProfileCard() {
  return (
    <div className="bg-neutral-900 w-full rounded-2xl overflow-hidden max-w-sm mx-auto shadow-lg h-fit">
      {/* Image */}
      <div className="relative w-full h-60 px-4">
        <Image
          src={assets.profilePic}
          alt="Profile picture of Ali Haider"
          fill
          className="object-cover h-auto w-fit p-8 rounded-2xl"
          priority
        />
      </div>

      {/* Bio */}
      <div className="flex flex-col items-center text-center p-6 space-y-2">
        <h2 className="text-white text-3xl font-bold font-body">Ali Haider</h2>
        <p className="text-gray-300 text-lg">Full stack web Developer</p>
        <p className="text-gray-400">Lahore, Pakistan</p>
      </div>

      {/* Social Media */}
      <div className="flex justify-center gap-4 pb-6">
        <Link href="https://instagram.com/" target="_blank">
          <InstaGramIcon />
        </Link>
        <Link href="https://twitter.com/" target="_blank">
          <TwitterIcon />
        </Link>

        <Link href="mailto:your@email.com" target="_blank">
          <EmailIcon />
        </Link>
      </div>

      {/* CTA */}
      <div className="px-6 pb-6">
        <Link
          href="/contact"
          className="block w-full bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium py-2 rounded-lg text-center transition"
        >
          Let’s Talk
        </Link>
      </div>
    </div>
  );
}
