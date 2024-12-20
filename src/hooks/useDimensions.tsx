import React, { useEffect, useState } from "react";

const useDimensions = (containerRef: React.RefObject<HTMLElement>) => {
  const [dimensions, SetDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const currentRef = containerRef.current;

    function getDimensions() {
      return {
        width: currentRef?.offsetWidth || 0,
        height: currentRef?.offsetHeight || 0,
      };
    }
    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        SetDimensions(getDimensions());
      }
    });

    if (currentRef) {
      resizeObserver.observe(currentRef);
      SetDimensions(getDimensions());
    }

    return () => {
      if (currentRef) {
        resizeObserver.unobserve(currentRef);
      }
      resizeObserver.disconnect();
    };
  }, [containerRef]);
  return dimensions;
};

export default useDimensions;
