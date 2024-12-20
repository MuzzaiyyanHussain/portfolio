// import React from "react";
// import { RiReactjsLine, RiTailwindCssLine } from "react-icons/ri";
// import { TbBrandNextjs } from "react-icons/tb";
// import { SiMongodb, SiPostgresql, SiWeb3Dotjs } from "react-icons/si";
// import {} from "react-icons/ri";
// import { FaNodeJs } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { SiSolidity } from "react-icons/si";
// import { FaHardHat } from "react-icons/fa";
// import { SiTypescript } from "react-icons/si";
// import { FaRust } from "react-icons/fa";
// import { SiExpress } from "react-icons/si";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { SiPostman } from "react-icons/si";
// import { VscVscode } from "react-icons/vsc";

// const iconVariants = (duration) => ({
//   initial: { y: -10 },
//   animate: {
//     y: [10, -10],
//     transition: {
//       duration: duration,
//       ease: "linear",
//       repeat: Infinity,
//       repeatType: "reverse",
//     },
//   },
// });

// const Technologies = () => {
//   return (
//     <div className="border-b border-neutral-800 pb-24 ">
//       <motion.h1
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 1.5 }}
//         className="my-20 text-center text-4xl"
//       >
//         Technologies
//       </motion.h1>

//       <div>
//         <motion.div
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: -100 }}
//           transition={{ duration: 1.5 }}
//           className="justify-center grid grid-cols-5 items-center justify-items-center gap-6"
//         >
//           <motion.div
//             variants={iconVariants(2.5)}
//             initial="initial"
//             animate="animate"
//             className="rounded-2xl border-4 border-neutral-400 p-4"
//           >
//             <RiReactjsLine className="text-7xl text-cyan-400" />
//           </motion.div>
//           <motion.div
//             variants={iconVariants(3)}
//             initial="initial"
//             animate="animate"
//             className="rounded-2xl border-4 border-neutral-400 p-4"
//           >
//             <TbBrandNextjs className="text-7xl" />
//           </motion.div>
//           <motion.div
//             variants={iconVariants(5)}
//             initial="initial"
//             animate="animate"
//             className="rounded-2xl border-4 border-neutral-400 p-4"
//           >
//             <SiMongodb className="text-7xl text-green-500" />
//           </motion.div>
//           <motion.div
//             variants={iconVariants(2)}
//             initial="initial"
//             animate="animate"
//             className="rounded-2xl border-4 border-neutral-400 p-4"
//           >
//             <SiPostgresql className="text-7xl text-sky-700" />
//           </motion.div>
//           <motion.div
//             variants={iconVariants(6)}
//             initial="initial"
//             animate="animate"
//             className="rounded-2xl border-4 border-neutral-400 p-4"
//           >
//             <FaNodeJs className="text-7xl text-green-400" />
//           </motion.div>
//           <motion.div
//             variants={iconVariants(4)}
//             initial="initial"
//             animate="animate"
//             className="rounded-2xl border-4 border-neutral-400 p-4"
//           >
//             <SiSolidity className="text-7xl text-blue-400" />
//           </motion.div>
//           <motion.div
//             variants={iconVariants(5)}
//             initial="initial"
//             animate="animate"
//             className="rounded-2xl border-4 border-neutral-400 p-4"
//           >
//             <FaHardHat className="text-7xl text-red-400" />
//           </motion.div>
//           <motion.div
//             variants={iconVariants(4)}
//             initial="initial"
//             animate="animate"
//             className="rounded-2xl border-4 border-neutral-400 p-4"
//           >
//             <SiTypescript className="text-7xl text-blue-300" />
//           </motion.div>
//           <motion.div
//             variants={iconVariants(3)}
//             initial="initial"
//             animate="animate"
//             className="rounded-2xl border-4 border-neutral-400 p-4"
//           >
//             <FaRust className="text-7xl text-orange-400" />
//           </motion.div>
//           <motion.div
//             variants={iconVariants(3)}
//             initial="initial"
//             animate="animate"
//             className="rounded-2xl border-4 border-neutral-400 p-4"
//           >
//             <SiExpress className="text-7xl text-white" />
//           </motion.div>
//           <motion.div
//             variants={iconVariants(3)}
//             initial="initial"
//             animate="animate"
//             className="rounded-2xl border-4 border-neutral-400 p-4"
//           >
//             <RiTailwindCssFill className="text-7xl text-blue-500" />
//           </motion.div>
//           <motion.div
//             variants={iconVariants(3)}
//             initial="initial"
//             animate="animate"
//             className="rounded-2xl border-4 border-neutral-400 p-4"
//           >
//             <SiPostman className="text-7xl text-orange-500" />
//           </motion.div>
//           <motion.div
//             variants={iconVariants(3)}
//             initial="initial"
//             animate="animate"
//             className="rounded-2xl border-4 border-neutral-400 p-4"
//           >
//             <VscVscode className="text-7xl text-blue-800" />
//           </motion.div>
//           <motion.div
//             variants={iconVariants(3)}
//             initial="initial"
//             animate="animate"
//             className="rounded-2xl border-4 border-neutral-400 p-4"
//           >
//             <SiWeb3Dotjs className="text-7xl text-amber-800" />
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Technologies;
import React from "react";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiWeb3Dotjs } from "react-icons/si";
import { FaNodeJs, FaRust, FaHardHat } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiSolidity, SiTypescript, SiExpress, SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b justify-items-center border-neutral-800 pb-16 md:pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-12 text-center text-3xl md:text-4xl lg:text-5xl"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4 md:px-10 lg:px-16"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4"
        >
          <RiReactjsLine className="text-6xl md:text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4"
        >
          <TbBrandNextjs className="text-6xl md:text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4"
        >
          <SiMongodb className="text-6xl md:text-7xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4"
        >
          <FaNodeJs className="text-6xl md:text-7xl text-green-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4"
        >
          <SiSolidity className="text-6xl md:text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4"
        >
          <FaHardHat className="text-6xl md:text-7xl text-red-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4"
        >
          <SiTypescript className="text-6xl md:text-7xl text-blue-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4"
        >
          <FaRust className="text-6xl md:text-7xl text-orange-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4"
        >
          <SiExpress className="text-6xl md:text-7xl text-white" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4"
        >
          <RiTailwindCssFill className="text-6xl md:text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4"
        >
          <SiPostman className="text-6xl md:text-7xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4"
        >
          <VscVscode className="text-6xl md:text-7xl text-blue-800" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4"
        >
          <SiWeb3Dotjs className="text-6xl md:text-7xl text-amber-800" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
