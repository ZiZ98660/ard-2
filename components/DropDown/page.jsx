"use client";
import React, { useRef, useEffect, useState } from "react";
import styles from "./dropDown.module.css";
import Link from "next/link";

/**
 * DropDown component (click to open, closes on mouse leave or loss of focus)
 * @param {Object} props
 * @param {Array<{ title: string, link: string }>} props.options - Array of dropdown options
 */
const DropDown = ({ options = [], title, activeLink, onAnyLinkClick }) => {
  // Find if any option or its children (submenus) matches activeLink
  function isOptionActive(option) {
    if (option.link && option.link === activeLink) return true;
    if (option.children) {
      return option.children.some(child => child.link === activeLink);
    }
    return false;
  }
  const isActiveDropdown = options.some(isOptionActive);

  // Touch device detection
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    function onTouchStart() {
      setIsTouchDevice(true);
      window.removeEventListener("touchstart", onTouchStart);
    }
    window.addEventListener("touchstart", onTouchStart, {passive:true});
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [activeSubIndex, setActiveSubIndex] = useState(null);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  const closeTimeoutRef = useRef();

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
        setActiveSubIndex(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside, true);
    document.addEventListener("touchstart", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
      document.removeEventListener("touchstart", handleClickOutside, true);
    };
  }, [isOpen]);

  // Close both main and submenu on link click (for mobile, etc)
  const handleOptionClick = () => {
    setIsOpen(false);
    setActiveSubIndex(null);
  };

  // When focus leaves dropdown (including keyboard navigation), close it
  const handleDropdownBlur = (e) => {
    // If focus is moving outside the dropdown, close
    if (
      dropdownRef.current &&
      (!e.relatedTarget || !dropdownRef.current.contains(e.relatedTarget))
    ) {
      setIsOpen(false);
      setActiveSubIndex(null);
      }
    };

    // Cleanup close timeout on unmount
    useEffect(() => {
      return () => {
        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
      };
    }, []);

  return (
    <>
      <div
        ref={triggerRef}
        className="dropdown-trigger w-fit h-fit inline-block"
        style={{ display: "inline-block" }}
        tabIndex={0}
        onClick={(e) => {
          // On touch devices, toggle dropdown only on tap (not focus/hover)
          if (isTouchDevice) {
            e.preventDefault();
            setIsOpen((open) => !open);
          } else {
            setIsOpen((open) => !open);
          }
        }}
        // aria for accessibility
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        <span
          className={`cursor-pointer flex gap-x-2 items-center${isActiveDropdown ? " activeLink" : ""}`}
        >
          {title || "Menu"}{" "}
          <svg width="10" height="10" style={{ marginLeft: 4 }}>
            <polygon points="0,0 10,0 5,7" fill={isActiveDropdown ? '#00dc93' : "black"} />
          </svg>
        </span>
        <div
          ref={dropdownRef}
          className={`bg-[#effbf3] absolute rounded-md hover:rounded-md z-[11] ${
            isOpen ? styles.open : styles.close
          } ${isTouchDevice ? styles.centralDropdown : ''}`}
            // Graceful CLOSE: set timeout when mouse leaves dropdown, clear on mouse enter
           onMouseLeave={() => {
             closeTimeoutRef.current = setTimeout(() => {
               setIsOpen(false);
               setActiveSubIndex(null);
             }, 200); // 200ms grace
           }}
           onMouseEnter={() => {
             if (closeTimeoutRef.current) {
               clearTimeout(closeTimeoutRef.current);
             }
           }}
          // CLOSE the dropdown when focus leaves (keyboard navigation)
          tabIndex={-1}
          onBlur={handleDropdownBlur}
        >
          {isOpen &&
            options.map((option, i) => {
              const hasChildren = option.children && option.children.length > 0;
              return (
                <div
                  key={i}
                  className={`relative group block`}
                   onMouseEnter={() => {
                     if (!isTouchDevice) {
                       if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                       if (hasChildren) setActiveSubIndex(i);
                     }
                   }}
                   onMouseLeave={() => {
                     if (!isTouchDevice) {
                       closeTimeoutRef.current = setTimeout(() => {
                         if (hasChildren) setActiveSubIndex(null);
                       }, 200);
                     }
                   }}
                >
                  {option.link ? (
                    <Link
                      className={`block !cursor-pointer !py-3 !px-5 border-solid border-[#bec7f7bb] hover:bg-[#dde1f0e5] ease-in duration-[250ms]${
                        i !== options.length - 1 ? " border-b" : ""
                      } flex items-center`}
                      href={option.link}
                      target={option.target || "_self"}
                      onClick={handleOptionClick}
                      tabIndex={0}
                    >
                      {option.title}
                    </Link>
                  ) : (
                    <span
                      className={`block !py-3 !px-5 border-solid border-[#bec7f7bb] hover:bg-[#dde1f0e5] ease-in duration-[250ms]${
                        i !== options.length - 1 ? " border-b" : ""
                      } flex items-center cursor-pointer`}
                      tabIndex={0}
                      onClick={(e) => {
                        // On touch, toggle submenu. On desktop, no-op (mouse events handle)
                        if (hasChildren && isTouchDevice) {
                          e.stopPropagation();
                          setActiveSubIndex(activeSubIndex === i ? null : i);
                        }
                      }}
                    >
                      {option.title}
                      {hasChildren && (
                        <svg width="12" height="12" style={{ marginLeft: 8, transform: "rotate(-90deg)" }}>
                          <polygon points="0,0 12,0 6,7" fill="black" />
                        </svg>
                      )}
                    </span>
                  )}
                  {/* Render subdropdown if present */}
                  {hasChildren && activeSubIndex === i && (
                    <div
                        className={`${isTouchDevice ? styles.centralDropdown : "absolute left-full top-0 ml-1"} ${styles.submenu}` }
                        style={isTouchDevice
                          ? { width: '100%', position: 'static', left: 0, top: 0, marginLeft: 0, marginTop: 2, boxShadow: '0 4px 18px rgba(10,20,60,0.07)', minWidth: 0, borderRadius: 6, zIndex: 12 }
                          : { minWidth: 180, zIndex: 12 }}
                        onMouseEnter={() => {
                          if (!isTouchDevice && closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                        }}
                        onMouseLeave={() => {
                          if (!isTouchDevice) {
                            closeTimeoutRef.current = setTimeout(() => {
                              setActiveSubIndex(null);
                            }, 200);
                          }
                        }}
                    >
                      {option.children.map((child, j) => (
                        <Link
                          key={j}
                          className={`block !cursor-pointer !py-2 !px-5 border-solid border-[#bec7f7bb] hover:bg-[#dde1f0e5] ease-in duration-[200ms]${
                            j !== option.children.length - 1 ? " border-b" : ""
                          }`}
                          href={child.link}
                          target={child.target || "_blank"}
                          onClick={(e) => {
                            if (onAnyLinkClick) onAnyLinkClick(e);
                            handleOptionClick(e);
                          }}
                          tabIndex={0}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default DropDown;
