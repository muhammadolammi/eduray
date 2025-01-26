import Logo from "../../../assets/images/logo.png";
import Facebook from "../../../assets/images/facebook.png";
import Linkedin from "../../../assets/images/Linkedin.png";
import Mail from "../../../assets/images/mail.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="my-16 md:my-40 flex flex-col md:flex-row justify-between"
      id="contact"
    >
      <div className="flex-1">
        <Link href={"/"}>
          <Image src={Logo} width={116} alt="Eduray Logo"></Image>
        </Link>

        <p className="text-primary_dark text-sm pr-0 md:pr-20 lg:pr-32 xl:pr-40 my-5">
          EduRay ensures every students has access to top-quality learning
          materials, expert mentorships and a supportive community to excel in
          WAEC, NECO and UTME exams.
        </p>
        <div className="flex gap-5 mt-20 md:mt-0">
          <Link
            href={"https://www.facebook.com/profile.php?id=61553555443148"}
            target="_blank"
          >
            <Image src={Facebook} width={28} alt="Facebook"></Image>
          </Link>
          {/* <Link
            href={
              "https://www.linkedin.com/company/EduRay/about/?viewAsMember=true"
            }
            target="_blank"
          >
            <Image src={Linkedin} width={28} alt="LinkedIn"></Image>
          </Link> */}
          <Link href="mailto:contact@eduray.com">
            <Image src={Mail} width={35} alt="Email"></Image>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 flex-1 mt-20 md:mt-0 gap-16 md:gap-6 lg:gap-16">
        <div>
          <h1 className="text-primary_dark font-bold mb-3">General</h1>
          <div className="flex text-base md:text-sm flex-col gap-3">
            <p>Information</p>
            <p>Community</p>
            <p>Leaderboard</p>
            <p>Our contributors</p>
          </div>
        </div>
        <div>
          <h1 className="text-primary_dark font-bold mb-3">Contact</h1>
          <div className="flex text-sm flex-col gap-3">
            <Link href="mailto:contact@eduray.com">
              <p>Help Center</p>
            </Link>
            <Link href="mailto:contact@eduray.com">
              <p>Support EduRay</p>
            </Link>
            <Link href="mailto:contact@eduray.com">
              <p>Share your story</p>
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-primary_dark font-bold mb-3">Socials</h1>
          <div className="flex text-sm flex-col gap-3 ">
            <Link
              href={"#"}
              target="_blank"
              className="transition hover:scale-110"
            >
              Facebook
            </Link>

            <Link
              href={
                "#"
              }
              target="_blank"
              className="transition hover:scale-110"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
