"use client";

import Image from "next/image";
import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

import CustomButton from "./customButton";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

import "swiper/css";

const membershipData = [
  {
    title: "Standard",
    price: "30",
    benefits: [
      {
        icon: FaCheck,
        text: "Includes Membership",
      },
      {
        icon: FaCheck,
        text: "Access to all gym facilities",
      },
      {
        icon: MdClose,
        text: "Dist plan included",
      },
      {
        icon: MdClose,
        text: "Monday-Friday gym access",
      },
      {
        icon: FaCheck,
        text: "Full access to everything",
      },
      {
        icon: MdClose,
        text: "No additional amenities",
      },
    ],
  },
  {
    title: "Ultimate",
    price: "45",
    benefits: [
      {
        icon: FaCheck,
        text: "Includes Membership",
      },
      {
        icon: FaCheck,
        text: "Access to all gym facilities",
      },
      {
        icon: FaCheck,
        text: "Dist plan included",
      },
      {
        icon: FaCheck,
        text: "Monday-Friday gym access",
      },
      {
        icon: FaCheck,
        text: "Full access to everything",
      },
      {
        icon: MdClose,
        text: "No additional amenities",
      },
    ],
  },
  {
    title: "Professional",
    price: "60",
    benefits: [
      {
        icon: FaCheck,
        text: "Includes Membership",
      },
      {
        icon: FaCheck,
        text: "Access to all gym facilities",
      },
      {
        icon: FaCheck,
        text: "Dist plan included",
      },
      {
        icon: FaCheck,
        text: "Monday-Friday gym access",
      },
      {
        icon: FaCheck,
        text: "Full access to everything",
      },
      {
        icon: FaCheck,
        text: "No additional amenities",
      },
    ],
  },
];

const MembershipSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      className="min-h-[680px]"
    >
      {membershipData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="border border-red-500 hover:bg-primary-300/80 transition-all duration-300 w-full max-w-sm xl:max-w-none mx-auto p-2">
              <div className="py-5 px-[60px] border-b border-red-500">
                <h4 className="h4">{item.title}</h4>
              </div>
              <div className="py-[30px] px-[60px]">
                <ul className="flex flex-col gap-5 mb-7">
                  {item.benefits.map((benefit, index) => {
                    return (
                      <li key={index} className="flex items-center gap-2">
                        <benefit.icon className="text-red-500 text-lg" />
                        {benefit.text}
                      </li>
                    );
                  })}
                </ul>
                <p className="flex gap-1 text-red-500 items-center mb-8">
                  <sup className="text-4xl">R$</sup>
                  <strong className="text-6xl">{item.price}</strong>
                  <em className="self-end text-2xl">/Mês</em>
                </p>
                <CustomButton
                  containerStyles="w-[196px] h-[62px]"
                  text="Buy now"
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MembershipSlider;
