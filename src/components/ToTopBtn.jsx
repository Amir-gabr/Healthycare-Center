//
//

import { IoIosArrowForward } from "react-icons/io";



export default function ToTopBtn() {
    window.addEventListener("scroll", function () {
        const ToTopBtn = document.querySelector(".ToTopBtn");
        if (this.window.scrollY >= 360) {
            ToTopBtn.classList.add("active");
        } else {
            ToTopBtn.classList.remove("active",);
        }
    })
  return (
    <>
      <a href="#" className="ToTopBtn bg-darkText rounded-md p-2">
        <IoIosArrowForward className="-rotate-90 text-[22px] text-light" />
      </a>
    </>
  );
}
