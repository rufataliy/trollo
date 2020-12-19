import React, { useEffect } from "react";

export const useOutsideClick = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void
): void => {
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent): void => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return (): void => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [ref, callback]);
};
