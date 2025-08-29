import { cn, testimonials } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image, { StaticImageData } from "next/image";
import { Quote } from "@/icons/qoutes";

const TestimonialCard = ({
  name,
  message,
  location,
  clientImage,
}: {
  name: string;
  location: string;
  message: string;
  clientImage: StaticImageData;
}) => {
  function truncateText(text: string, charLimit: number = 150) {
    if (text.length <= charLimit) return text;
    return text.slice(0, charLimit) + " ...";
  }

  return (
    <figure
      className={cn(
        "relative h-full w-96 max-h-60 cursor-pointer overflow-hidden border p-5",
        "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]"
      )}
    >
      <Quote className="size-5" />
      <p className="text-[15px] mt-2"> {truncateText(message, 180)}</p>
      <div className="flex gap-4 justify-start mt-5">
        <Image
          className="size-11 object-center object-cover"
          src={clientImage}
          alt={name}
        />
        <hgroup>
          <h2 className="">{name}</h2>
          <p className="text-sm text-white/80">{location}</p>
        </hgroup>
      </div>
    </figure>
  );
};

export function Testimonials() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee className="[--duration:25s]">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </Marquee>
    </div>
  );
}
