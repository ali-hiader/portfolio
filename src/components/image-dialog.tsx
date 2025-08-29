import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";

interface Props {
  image: StaticImageData;
  title: string;
}

function ImageDialog({ children, image, title }: PropsWithChildren & Props) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle></DialogTitle>
        <Image
          src={image}
          alt={`${title}'s certificate`}
          width={1000}
          height={1000}
          className="h-auto cursor-pointer"
        />
      </DialogContent>
    </Dialog>
  );
}

export default ImageDialog;
