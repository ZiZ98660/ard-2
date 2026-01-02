"use client";
import React, { useRef, useEffect, useState } from "react";
import styles from "./dropDown.module.css";
import Link from "next/link";

/**
 * DropDown component (click to open, closes on mouse leave or loss of focus)
 * @param {Object} props
 * @param {Array<{ title: string, link: string }>} props.options - Array of dropdown options
 */
const DropDown = ({ options = [], title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, [isOpen]);

  // Optional: Close dropdown on link click (for mobile, etc)
  const handleOptionClick = () => setIsOpen(false);

  // When focus leaves dropdown (including keyboard navigation), close it
  const handleDropdownBlur = (e) => {
    // If focus is moving outside the dropdown, close
    // e.relatedTarget is the new focused element
    if (
      dropdownRef.current &&
      (!e.relatedTarget || !dropdownRef.current.contains(e.relatedTarget))
    ) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div
        ref={triggerRef}
        className="dropdown-trigger w-fit h-fit inline-block"
        style={{ display: "inline-block" }}
        tabIndex={0}
        onClick={() => setIsOpen((open) => !open)}
        // Mobile friendly
        onTouchStart={() => setIsOpen(true)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        <span className="cursor-pointer flex gap-x-2 items-center">
          {title || "Menu"}{" "}
          <svg width="10" height="10" style={{ marginLeft: 4 }}>
            <polygon points="0,0 10,0 5,7" fill="black" />
          </svg>
        </span>
        <div
          ref={dropdownRef}
          className={`bg-[#effbf3] absolute rounded-md hover:rounded-md top-[3.9em] z-[11] min-w-full] w-max ${
            isOpen ? styles.open : styles.close
          } `}
          // CLOSE the dropdown when mouse leaves the entire dropdown options
          onMouseLeave={() => setIsOpen(false)}
          // CLOSE the dropdown when focus leaves (keyboard navigation)
          tabIndex={-1}
          onBlur={handleDropdownBlur}
        >
          {isOpen &&
            options.map((option, i) => (
              <Link
                key={i}
                className={`block !cursor-pointer !py-3 !px-5 border-solid border-[#bec7f7bb] hover:bg-[#dde1f0e5] ease-in duration-[250ms]${
                  i !== options.length - 1 ? " border-b" : ""
                }`}
                href={option.link}
                target={option.target || "_self"}
                onClick={handleOptionClick}
                tabIndex={0}
              >
                {option.title}
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default DropDown;
