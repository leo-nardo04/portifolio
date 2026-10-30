import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScroll = ({ titleComponent, children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleDimensions = () => (isMobile ? [0.9, 1] : [1.05, 1]);

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [8, 0] : [20, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, -30] : [0, -100]
  );

  return (
    <div
      className="h-[52rem] sm:h-[60rem] md:h-[72rem] lg:h-[80rem] flex items-center justify-center relative p-2 sm:p-4 md:p-10 lg:p-16"
      ref={containerRef}
    >
      <div
        className="py-6 sm:py-10 md:py-20 lg:py-28 w-full relative"
        style={{ perspective: "1000px" }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

const Header = ({ translate, titleComponent }) => {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="w-[95%] max-w-[1400px] mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

const Card = ({ rotate, scale, children }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="w-full max-w-[1400px] mt-2 sm:mt-4 mx-auto min-h-[26rem] h-[28rem] sm:h-[32rem] md:h-[38rem] lg:h-[44rem] border border-slate-800 p-2 sm:p-4 md:p-6 bg-slate-900 rounded-[24px] md:rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-slate-950 md:p-4 flex items-center justify-center border border-slate-800/50">
        {children}
      </div>
    </motion.div>
  );
};
