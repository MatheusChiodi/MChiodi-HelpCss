import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import ScrollToTopButton from "./components/layout/ScrollToTopButton";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/layout/Loader";
import PersistentBackground from "@/components/layout/PersistentBackground";

import Home from "@/page/Home";
import Study from "@/page/Study";
import ClassDetails from "./page/ClassDetails";
import NotFoundPage from "@/page/NotFoundPage";

import "@/index.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;

    if (!lastVisit || now - parseInt(lastVisit, 10) > oneHour) {
      localStorage.setItem("lastVisit", now.toString());
      const timer = setTimeout(() => setIsLoading(false), 1300);
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="mx-auto max-w-[1920px]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="font-custom mx-auto min-h-screen max-w-[1920px] bg-gradient-to-br from-zinc-900 via-zinc-800 to-black transition-colors text-white">
      <Header />
      <PersistentBackground />
      <main>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/study" element={<Study />} />
            <Route path="/class-details/:className" element={<ClassDetails />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
      <ScrollToTop />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
