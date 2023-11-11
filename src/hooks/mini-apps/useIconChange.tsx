import { useEffect, useState } from "react";

const useIconChange = (secTOut: number) => {
  const [toggleFirstIcon, setToggleFirstIcon] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setToggleFirstIcon(true);
    }, secTOut);

    return () => clearTimeout(timeout);
  }, [toggleFirstIcon]);

  return {
    toggleFirstIcon: toggleFirstIcon,
    setToggleFirstIcon: setToggleFirstIcon,
  };
};

export default useIconChange;
