"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600"
              style={{ fontSize: "48px" }}
            >
              Hallo,Saya
            </span>
            <br />
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600"
              style={{ fontSize: "28px", display: "block" }}
            >
              IMAM FAJAR ARISFAN
            </span>
            <TypeAnimation
              sequence={[
                1000,
                "Web Develover",
                1000,
                "Trainer",
                1000,
                "Data support",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Tidak ada batasan untuk pertumbuhan dan pengetahuan. Setiap langkah
            kecil yang Anda ambil dalam pembelajaran membawa Anda lebih dekat
            menuju kesuksesan. Teruslah bergerak maju, karena setiap pelajaran
            baru membuka pintu untuk peluang yang lebih besar. Ingatlah,
            investasi terbesar yang dapat Anda lakukan adalah investasi pada
            diri sendiri. Jadi, jangan pernah berhenti belajar dan teruslah
            mengejar impian Anda dengan tekad yang kuat!.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full overflow-hidden bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero2.jpg"
              alt="hero2.jpg"
              className="absolute inset-0 w-full h-full object-cover"
              layout="fill"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
