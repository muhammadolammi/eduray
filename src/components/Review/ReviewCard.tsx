import Image, { StaticImageData } from "next/image";

export interface ReviewCardProps {
  review: string;
  reviewer: string;
  reviewerTitle: string;
  image: string | StaticImageData;
}

export const ReviewCard = ({
  review,
  reviewer,
  reviewerTitle,
  image,
}: ReviewCardProps) => {
  return (
    <div className="rounded-lg bg-[#EFECFA] border">
      <div className="mt-4 min-w-[200px] text-sm flex flex-col  py-0 md:py-6 px-3 md:px-7 justify-center h-[300px]">
        <div className="">
          <p>{review}</p>
        </div>
        <div className="flex mt-3  justify-end min-w-full">
          <div className=" text-right">
            <p className="font-medium">{reviewer}</p>

            <p className="text-xs">{reviewerTitle}</p>
          </div>
          {image && (
            <div className="ml-3">
              <Image src={image} alt="reviews" width={40} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
