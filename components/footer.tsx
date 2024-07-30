"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import CustomButton from "./customButton";
import { motion } from "framer-motion";

const footerContainerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
      duration: 0.5,
      ease: "linear",
    },
  },
};

const footerItem = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

const Footer = () => {
  return (
    <footer className="bg-primary-300 pt-24">
      <div className="container mx-auto pb-24">
        <motion.div
          variants={footerContainerVariant}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12"
        >
          <motion.div variants={footerItem} className="flex flex-col gap-4">
            <Link href="#">
              <Image
                src={"/assets/img/logo.png"}
                width={117}
                height={55}
                alt="logo"
              />
            </Link>
            <p className="max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde,
              reiciendis voluptatum, labore nulla.
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl text-red-500" />
                <span>Via Oeste, Canaã Dos Carajás</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-red-500" />
                <span>(94) 9999-9999 / (94) 8888 - 8888</span>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-4">
                  <FaEnvelope className="text-xl text-red-500" />
                  <span>contato@gmail.com</span>
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={footerItem}>
            <h4 className="h4 text-red-500 mb-4">Recent blog posts</h4>
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className="hover:text-red-500 transition-all">
                <h5 className="h5 leading-snug">
                  How to motivad for all exercises
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 22, 2024.
                </p>
              </Link>
            </div>

            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className="hover:text-red-500 transition-all">
                <h5 className="h5 leading-snug">
                  How to motivad for all exercises adpiter
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  July 15, 2024.
                </p>
              </Link>
            </div>

            <div className="flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className="hover:text-red-500 transition-all">
                <h5 className="h5 leading-snug">How to motivad exercises</h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  December 07, 2024.
                </p>
              </Link>
            </div>
          </motion.div>
          <motion.div variants={footerItem}>
            <h4 className="h4 text-red-500">Gallery</h4>
            <div className="flex flex-wrap gap-2">
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/david.jpg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/matt.jpg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/rosy.jpg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/sofia.jpg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/sofia.jpg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/david.jpg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/rosy.jpg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
            </div>
          </motion.div>
          <motion.div variants={footerItem}>
            <h4 className="h4 mb-4 text-red-500">Newsletter</h4>
            <div className="flex flex-col gap-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                ullam omnis quae repellat distinctio electus.
              </p>
              <form className="flex items-center">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="h-[50px] outline-none px-4 text-primary-300"
                />
                <CustomButton containerStyles="h-[50px] px-8" text="Send" />
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="text-white border-t border-white/20 py-12">
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            <span>&copy; Copyright 2024 Fitphysique</span>
            <ul className="flex gap-4 text-xl">
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-red-500 transition-all"
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-red-500 transition-all"
                >
                  <FaYoutube />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-red-500 transition-all"
                >
                  <FaTwitter />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
