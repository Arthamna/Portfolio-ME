"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

// export const Navigation: React.FC = () => {
// 	const ref = useRef<HTMLElement>(null);
// 	const [isIntersecting, setIntersecting] = useState(true);

// 	useEffect(() => {
// 		if (!ref.current) return;
// 		const observer = new IntersectionObserver(([entry]) =>
// 			setIntersecting(entry.isIntersecting),
// 		);

// 		observer.observe(ref.current);
// 		return () => observer.disconnect();
// 	}, []);

// 	return (
// 		<header ref={ref}>
// 			<div
// 				className={`fixed inset-x-0 top-0 z-50 backdrop-blur-xl  duration-200 border-b  ${
// 					isIntersecting
// 						? "bg-zinc-900/0 border-transparent"
// 						: "bg-zinc-900/100  "
// 				}`}
// 				style={{ backdropFilter: "blur(10px)" }}
// 			>
// 				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
// 					<div className="flex justify-between gap-8">
// 						<Link
// 							href="/projects"
// 							className={`duration-200 text-zinc-400 ${
// 								isIntersecting
// 									? "hover:text-black"
// 									: "hover:text-white"
// 							}`}
// 						>
// 							Projects
// 						</Link>
// 						<Link
// 							href="/contact"
// 							className={`duration-200 text-zinc-400 ${
// 								isIntersecting
// 									? "hover:text-black"
// 									: "hover:text-white"
// 							}`}
// 						>
// 							Contact
// 						</Link>
// 					</div>

// 					<Link
// 						href="/"
// 						className={`duration-200 text-zinc-300 ${
// 								isIntersecting
// 									? "hover:text-black"
// 									: "hover:text-white"
// 							}`}
// 					>
// 						<ArrowLeft className="w-6 h-6 " />
// 					</Link>
// 				</div>
// 			</div>
// 		</header>
// 	);
// };
// import Link from "next/link";
// import { useEffect, useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
  { name: "Shorts", href: "/shorts" },
  { name: "About", href: "/about" },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <nav className="fixed top-0 w-full backdrop-blur-lg">
      {/* Desktop Navigation */}
      <div className="container mx-auto px-6 py-10">
        <div className="hidden md:flex items-center justify-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-zinc-400 hover:text-emerald-400 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
          <button className="text-zinc-400 hover:text-emerald-400">More</button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center py-5">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-zinc-400"
          >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900/95 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-zinc-400 hover:text-emerald-400"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};