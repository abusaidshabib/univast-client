import { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-Univast`;
  }, [title]);
};

export default UseTitle;
