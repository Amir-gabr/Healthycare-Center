//
//
//

import BgBreadcrumb from "../components/BgBreadcrumb";

import doc1 from "../../public/image/doc1.jpeg";
import mask from "../../public/image/mask.png";

export default function About() {
  return (
    <>
      <BgBreadcrumb />
      <div className="h-screen flex justify-center items-center">
        <div className="relative w-40 h-40  cube-container">
          <img src={mask} alt="mask image" className="absolute w-full h-full mask" />
          <img src={doc1} alt="mask image" className="absolute w-full h-full image" />
        </div>
      </div>
    </>
  );
}
