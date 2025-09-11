"use client";
import React from "react";
import styles from "./dropDown.module.css";
import Link from "next/link";

/**
 * DropDown component
 * @param {Object} props
 * @param {boolean} props.isOpen - Whether the dropdown is open
 * @param {function} props.onClose - Function to call on mouse leave
 * @param {function} props.closeNav - Function to call on link click
 * @param {Array<{ title: string, link: string }>} props.options - Array of dropdown options
 */
const DropDown = ({ isOpen, onClose, closeNav, options = [] }) => {
  return (
    <div
      className={`bg-[#effbf3] absolute rounded-md hover:rounded-md top-[1.9em] z-[11] min-w-full] w-max ${
        isOpen ? styles.open : styles.close
      } `}
      onMouseLeave={onClose}
    >
      {options.map((option, i) => (
        <Link
          key={i}
          className={`block !cursor-pointer !py-3 !px-5 border-solid border-[#bec7f7bb] hover:bg-[#dde1f0e5] ease-in duration-[250ms]${
            i !== options.length - 1 ? " border-b" : ""
          }`}
          href={option.link}
          onClick={closeNav}
        >
          {option.title}
        </Link>
      ))}
    </div>
  );
};

export default DropDown;
