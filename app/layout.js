'use client'

import { Inter } from "next/font/google";
// import "@/styles/globals.css";
import "@/styles/main.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

// Helper for smooth scroll using state and react
function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (e) => {
      // Only handle anchor links
      let anchor = e.target;
      // Traverse up if inside a child (e.g. <span> inside <a>)
      while (anchor && anchor.tagName !== "A") {
        anchor = anchor.parentElement;
      }
      if (
        anchor &&
        anchor.tagName === "A" &&
        anchor.getAttribute("href")?.startsWith("#")
      ) {
        const href = anchor.getAttribute("href");
        if (href && href !== "#") {
          const el = document.querySelector(href);
          if (el) {
            e.preventDefault();
            // Offset for fixed nav
            const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }
      }
    };
    document.body.addEventListener("click", handleClick);
    return () => document.body.removeEventListener("click", handleClick);
  }, []);
}

export default function RootLayout({ children }) {
  const [showTop, setShowTop] = useState(false);

  // Show back to top button based on scroll position
  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Use smooth scroll for anchor links
  useSmoothScroll();

  // Back to top handler
  const handleBackToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <html lang="en">
      <body>
        <div className="w-full">
          <Nav />
          <main>{children}</main>
          <Footer />
          <AnimatePresence>
            {showTop && (
              <motion.button
                id="back-to-top"
                className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg opacity-100 visible transition-all hover:bg-blue-700"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.3 }}
                onClick={handleBackToTop}
                aria-label="Back to top"
              >
                <Icon icon="mdi:arrow-up" className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </body>
    </html>
  );
}
