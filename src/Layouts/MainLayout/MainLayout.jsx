import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useLocation, useOutlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { Container } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

export default function MainLayout() {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <>
      <Navbar />

      <Container>
        <AnimatePresence mode="wait">
          {outlet && (
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ y:0,opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {outlet}
            </motion.div>
          )}
        </AnimatePresence>
      </Container>

      <Footer />
    </>
  );
}