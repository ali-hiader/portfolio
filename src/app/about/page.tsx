import AboutMe from "@/components/about-me";
import ImageDialog from "@/components/image-dialog";
import { certificatesData } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

function AboutMePage() {
  return (
    <main className="px-4 sm:px-[10%]">
      <AboutMe isAboutPage />
      <section className="my-16">
        <h2 className="text-3xl font-semibold" id="#certificates">
          Certifications
        </h2>
        <p className="max-w-3xl mt-2 mb-8">
          {" "}
          Along my journey as a self-taught developer, I’ve completed structured
          learning to strengthen my foundation. Here are a few certifications
          I’ve earned:
        </p>
        <div className=" flex flex-col max-w-3xl gap-6">
          {certificatesData.map((certificate) => (
            <Certificate
              key={certificate.title}
              image={certificate.image}
              instructor={certificate.instructor}
              title={certificate.title}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

interface CertificateProps {
  image?: StaticImageData;
  title: string;
  instructor: string;
}

function Certificate({ image, instructor, title }: CertificateProps) {
  return (
    <div className="border shadow-sm hover:shadow-md transition flex gap-2">
      {image && (
        <ImageDialog title={title} image={image}>
          <Image
            src={image}
            alt={title}
            width={200}
            height={200}
            className="h-auto w-36 cursor-pointer"
          />
        </ImageDialog>
      )}
      <div className="px-4 py-2 w-full">
        <h3 className="text-lg font-semibold mb-2">{title} (Udemy)</h3>
        <p className="text-gray-600 text-sm text-end w-full">
          _ By {instructor}
        </p>
      </div>
    </div>
  );
}

export default AboutMePage;
