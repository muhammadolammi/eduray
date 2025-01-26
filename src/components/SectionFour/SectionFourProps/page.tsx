import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  header: string;
  body: string;
  buttonText: string;
}

const SectionFourProps = ({ header, body, buttonText }: Props) => {
  return (
    <div className="bg-[#3A3354] rounded-[30px] text-white px-8 lg:px-[12px] py-6 text-center">
      <h1 className="text-[30px] md:text-[22px] lg:text-[20px] font-bold">
        {header}
      </h1>
      <p className="text-[#EFECFA]  my-6 text-sm">{body}</p>
      <Link href={"https://forms.gle/7okLn9kexp3pqrKy5"} target="_blank">
        <Button
          className="bg-[#FF7340] text-white hover:text-[#FF7340] hover:bg-white py-8 md:py-6 font-bold border-none rounded-full w-full"
          variant={"primary"}
          size={"lg"}
        >
          {buttonText}
        </Button>
      </Link>
    </div>
  );
};

export default SectionFourProps;
