import { faGrip, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Header = () => {
  const [isActiveSearch, setIsActiveSearch] = useState(false);

  const handleClickSearch = () => {
    console.log("gaaaaaa");
  };
  return (
    <div className="flex justify-around items-center">
      {isActiveSearch && (
        <>
          <div
            className="relative 
                      flex 
                      items-center 
                      w-10/12"
          >
            <FontAwesomeIcon
              onClick={handleClickSearch}
              icon={faSearch}
              size="lg"
              className="absolute left-4"
            />
            <input
              type="email"
              className="px-12 
                        py-3 
                        rounded-full
                        border-2
                        w-full
                        border-[#3b6396]"
            />
            <FontAwesomeIcon
              onClick={() => setIsActiveSearch(false)}
              icon={faXmark}
              size="lg"
              className="absolute right-4 cursor-pointer"
            />
          </div>
        </>
      )}
      {!isActiveSearch && (
        <>
          <FontAwesomeIcon
            onClick={() => setIsActiveSearch(true)}
            icon={faSearch}
            size="lg"
            className="cursor-pointer"
          />
          <p className="text-lg font-bold text-[#3b6396]">City/Country</p>
          <FontAwesomeIcon icon={faGrip} size="lg" />
        </>
      )}
    </div>
  );
};

export default Header;
