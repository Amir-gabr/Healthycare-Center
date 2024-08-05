import { memo } from "react";
import { useLocation, Link } from "react-router-dom";
import { RiHome4Line } from "react-icons/ri";
import bgBreadcrumb from "../assets/images/BgBreadcrumb.jpg";
import wavyBg from "../assets/images/wavy1.png";
import boxB from "../assets/imagesAni/boxB.png";
import DBoxB from "../assets/imagesAni/DBoxB.png";

const BgBreadcrumb = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const lastPart = pathParts[pathParts.length - 1];

  return (
    <div className="relative w-full h-[50vh] flex justify-center items-center">
      <div className="flex flex-col items-center gap-6">
        <nav className="rounded-2xl mx-auto flex justify-center items-center bg-primary p-3 md:p-4">
          <BreadcrumbLink to="/" label="Home" />
          <span className="mx-2 text-xl md:text-2xl text-light">/</span>
          <BreadcrumbLink to="#" label={lastPart} />
        </nav>
      </div>
      <BackgroundImage
        src={bgBreadcrumb}
        alt="background"
        className="absolute w-full h-full top-0 left-0 z-[-1]"
      />
      <BackgroundImage
        src={wavyBg}
        alt="background"
        className="absolute rotate-180 w-full bottom-0 left-0 z-[-1]"
      />
      <AnimatedImages />
    </div>
  );
};

const BreadcrumbLink = memo(({ to, label }) => (
  <Link
    to={to}
    className="text-light flex items-center gap-2 text-xl md:text-2xl transition duration-150 ease-in-out hover:text-slate-400 focus:text-primary-600 active:text-primary-700"
  >
    {label === "Home" && <RiHome4Line />}
    {label}
  </Link>
));
BreadcrumbLink.displayName = "BreadcrumbLink";
const BackgroundImage = memo(({ src, alt, className }) => (
  <img src={src} alt={alt} className={className} />
));
BackgroundImage.displayName = "BackgroundImage";
const AnimatedImages = memo(() => (
  <div>
    <img
      src={DBoxB}
      alt="animation"
      className="absolute z-0 w-16 md:w-24 top-[20%] lg:top-[16%] left-4 lg:left-20 md:animate-moveSp"
    />
    <img
      src={boxB}
      alt="animation"
      className="absolute z-0 w-16 md:w-24 top-[60%] lg:top-[45%] right-4 lg:right-10 md:animate-moveY1"
    />
  </div>
));
AnimatedImages.displayName = "AnimatedImages";

export default BgBreadcrumb;
