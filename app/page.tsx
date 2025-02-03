import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

// const navigation = [
//   { name: "Projects", href: "/projects" },
//   { name: "Contact", href: "/contact" },
// ];

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
//       <nav className="my-16 animate-fade-in">
//         <ul className="flex items-center justify-center gap-4">
//           {navigation.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className="text-sm duration-500 text-zinc-500 hover:text-zinc-300 md:text-lg"
//             >
//               {item.name}
//             </Link>
//           ))}
//         </ul>
//       </nav>
//       <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
//       <Particles
//         className="absolute inset-0 -z-10 animate-fade-in"
//         quantity={100}
//       />
//       <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-zinc-600 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-7xl lg:text-9xl whitespace-nowrap bg-clip-text ">
//         Hartmann
//       </h1>

//       <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
//       <div className="my-16 text-center animate-fade-in">
//         <h2 className="text-sm text-zinc-600 md:text-lg lg:text-xl ">
//           I'm a Software Engineer and Machine Learning Enthusiast, currently also
//           into backend.
//           {/* <Link
//           {" "}
//             target="_blank"
//             href="https://www.its.ac.id/id/beranda/"
//             className="underline duration-500 hover:text-zinc-300"
//           >
//             ITS
//           </Link> */}
//         </h2>
//       </div>
//     </div>
//   );
// }

// import React from "react";
import { Navigation } from "./components/nav";
// import Particles from "../components/particles";

export default function Home() {
  return (
    <div className="flex-col items-center justify-center w-screen h-screen overflow-hidden">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-40">
        <div className="max-w-3xl">
          {/* Status Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2" />
            <span className="text-zinc-300">
              Crafting Experiences at{" "}
              <Link href="#" className="underline">
                Dimension
              </Link>
            </span>
          </div>

          {/* Hero Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            I'm Hartmann
          </h1>
          
          <p className="text-lg text-zinc-400 mb-12">
            I'm a Software Engineer and Machine Learning Enthusiast, currently also
            into backend.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition-colors duration-200">
              Learn How
            </button>
            <button className="px-6 py-3 rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition-colors duration-200">
              More about me
            </button>
          </div>
        </div>

        {/* Particles Background */}
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
      </main>
    </div>
  );
}
