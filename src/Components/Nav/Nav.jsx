import React, { useState } from "react";
import Description from "./../Description/Description";
import Reviewss from "./../Reviewss/Reviewss";
function Nav() {
  const [showDesc, setShowDEsc] = useState(true);
  return (
    <>
      <nav className="mt-20">
        <div className="text-center space-x-10">
          <button
            onClick={() => setShowDEsc(true)}
            className={`${showDesc && "bg-slate-900 text-white"} p-3 rounded-lg`}
          >
            Description
          </button>
          <button
            onClick={() => setShowDEsc(false)}
            className={`${!showDesc && "bg-slate-900 text-white"} p-3 rounded-lg`}
          >
            Reviews
          </button>
        </div>

        <div className="mt-20">
    
          {showDesc ? <Description></Description> : <Reviewss></Reviewss>}
        </div>
      </nav>
    </>
  );
}

export default Nav;
