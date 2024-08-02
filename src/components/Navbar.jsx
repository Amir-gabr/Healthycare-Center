//
//
//

import LargeNav from "./LargeNav";
import SmallNav from "./SmallNav";

export default function Navbar() {
  return (
    <>
      {/* // mobile screen */}
      <SmallNav />
      {/* // desktop screen */}
      <LargeNav />
    </>
  );
}
