'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import smoothscroll from 'smoothscroll-polyfill';
import 'aos/dist/aos.css';
import AOS from 'aos';

// TailwindCSS is assumed to be set up globally (via PostCSS or CDN in _app.tsx/_document.tsx)
// Poppins font can be loaded in _app.tsx or via a <link> in _document.tsx

// Custom styles for gradient and nav underline
const customStyles = `
  .gradient-bg {
    background: linear-gradient(135deg, #FF7F50 0%, #1E90FF 100%);
  }
  .nav-link {
    position: relative;
  }
  .nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #1E90FF;
    transition: width 0.3s ease;
  }
  .nav-link:hover::after {
    width: 100%;
  }
  .card-hover {
    transition: all 0.3s cubic-bezier(.4,0,.2,1);
  }
  .card-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }
`;

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#activities', label: 'Activities' },
  { href: '#executives', label: 'Executives' },
  { href: '#contact', label: 'Contact' },
];

const EXECUTIVES = [
  {
    name: 'Dr Oghenetega David Ejeheri',
    role: 'PRESIDENT',
    dept: 'Dept. of Surgery',
    phone: '+234-803-426-3408',
    email: 'ejeheritega@gmail.com',
    img: 'http://static.photos/people/200x200/1',
  },
  {
    name: 'Dr Eseoghene Deborah Etetafia',
    role: 'VICE PRESIDENT',
    dept: 'Dept. of Oral & Maxillofacial Surgery',
    phone: '+234-810-937-8371',
    email: 'esedebby2@gmail.com',
    img: 'http://static.photos/people/200x200/2',
  },
  {
    name: 'Dr Aghogho Ufomata Isaac',
    role: 'GENERAL SECRETARY',
    dept: 'Dept. of Anaesthesia & Intensive Care',
    phone: '+234-816-910-6477',
    email: 'meastrodr26@gmail.com',
    img: 'http://static.photos/people/200x200/3',
  },
];

const ACTIVITIES = [
  {
    icon: 'mdi:calendar-month-outline',
    iconColor: 'text-blue-600',
    bg: 'bg-blue-100',
    title: 'Meetings & Governance',
    desc: 'Three Ordinary General Meetings and one Annual General Meeting yearly. Emergency General Meetings as needed to foster member engagement and decision-making.',
    delay: 100,
  },
  {
    icon: 'mdi:book-open-variant',
    iconColor: 'text-orange-600',
    bg: 'bg-orange-100',
    title: 'Training & Capacity Building',
    desc: 'Research workshops, mock exams, journal clubs, and certified courses including BLS, ACLS, PALS. Maintain an online medical journal.',
    delay: 200,
  },
  {
    icon: 'mdi:heart-outline',
    iconColor: 'text-green-600',
    bg: 'bg-green-100',
    title: 'Welfare & Remuneration',
    desc: 'Advocate for fair remuneration, improved health insurance, quality call rooms and meals. Maintain recreational facilities for doctors.',
    delay: 300,
  },
  {
    icon: 'mdi:cpu-64-bit',
    iconColor: 'text-purple-600',
    bg: 'bg-purple-100',
    title: 'Innovation & Infrastructure',
    desc: 'Campaign for advanced medical equipment and resolution of staffing gaps. Contribute to hospital policy-making and reform.',
    delay: 100,
  },
  {
    icon: 'mdi:account-group-outline',
    iconColor: 'text-yellow-600',
    bg: 'bg-yellow-100',
    title: 'Community Outreach',
    desc: 'Collaborate with NGOs and government agencies. Host school, prison, and rural outreach programs. Promote alumni engagement.',
    delay: 200,
  },
  {
    icon: 'mdi:radio',
    iconColor: 'text-red-600',
    bg: 'bg-red-100',
    title: 'Media & Public Health',
    desc: 'Publish ARD DELSUTH MedDigest newsletter. Run health awareness campaigns and lead commemorative health events.',
    delay: 300,
  },
];

const SOCIALS = [
  { href: '#', icon: 'mdi:facebook', bg: 'bg-blue-600', hover: 'hover:bg-blue-700' },
  { href: '#', icon: 'mdi:twitter', bg: 'bg-blue-400', hover: 'hover:bg-blue-500' },
  { href: '#', icon: 'mdi:youtube', bg: 'bg-red-600', hover: 'hover:bg-red-700' },
  { href: '#', icon: 'mdi:instagram', bg: 'bg-pink-600', hover: 'hover:bg-pink-700' },
];

export default function SolutionsPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  // Polyfill for smooth scroll
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

 

  // Back to top button visibility
  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Smooth scroll for anchor links
  useEffect(() => {
    const handler = (e) => {
      const target = e.target;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const href = target.getAttribute('href');
        if (href && href !== '#') {
          e.preventDefault();
          const el = document.querySelector(href);
          if (el) {
            const y = (el).offsetTop - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setMobileOpen(false);
          }
        }
      }
    };
    document.body.addEventListener('click', handler);
    return () => document.body.removeEventListener('click', handler);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  // Re-initialize AOS on rerender
  useEffect(() => {
    AOS.refresh();
  });

  return (
    <>
      <style>{customStyles}</style>
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img className="h-10 w-auto" src="http://static.photos/medical/200x200/1" alt="ARD DELSUTH Logo" />
                <span className="ml-2 text-xl font-bold text-gray-800">ARD DELSUTH</span>
              </div>
            </div>
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(v => !v)}
              >
                <Icon icon="mdi:menu" width={24} height={24} />
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white shadow-lg overflow-hidden"
              id="mobile-menu"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {NAV_LINKS.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <motion.div
              className="md:w-1/2"
              data-aos="fade-right"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Association of Resident Doctors <span className="text-orange-300">DELSUTH</span>
              </h1>
              <p className="text-xl mb-8">
                Advancing medical excellence, welfare, and healthcare in Delta State.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#about"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all"
                >
                  Learn More
                </a>
                <a
                  href="#contact"
                  className="border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-all"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
            <motion.div
              className="hidden md:block md:w-1/2"
              data-aos="fade-left"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                src="http://static.photos/medical/640x360/1"
                alt="Medical Team"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About ARD DELSUTH</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="md:flex md:items-center md:space-x-8">
            <motion.div
              className="md:w-1/2 mb-8 md:mb-0"
              data-aos="fade-right"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                src="http://static.photos/medical/640x360/2"
                alt="Hospital Building"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
            <motion.div
              className="md:w-1/2"
              data-aos="fade-left"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 mb-6">
                The Association of Resident Doctors (ARD) at Delta State University Teaching Hospital (DELSUTH) unites doctors in residency training, along with other doctors of similar ranks and house officers.
              </p>
              <p className="text-gray-700 mb-6">
                Our mission is to advance the welfare of doctors, uphold outstanding residency training, promote efficient hospital operations, and advocate for quality healthcare in Delta State.
              </p>
              <p className="text-gray-700 mb-6">
                We actively engage in policy and collaborate with aligned organizations at the state and national levels to improve health and training outcomes.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-4 rounded-lg">
                  <Icon icon="mdi:account-group-outline" className="text-blue-600" width={24} height={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Affiliations</h3>
                  <p className="text-gray-700">
                    Nigerian Association of Resident Doctors (NARD) &amp; Nigerian Medical Association (NMA)
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Activities</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              We engage in various activities to promote medical excellence, welfare, and community health.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ACTIVITIES.map((act, i) => (
              <motion.div
                key={act.title}
                className="bg-white p-6 rounded-lg shadow-md card-hover transition-all"
                data-aos="fade-up"
                data-aos-delay={act.delay}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: act.delay / 1000 }}
                viewport={{ once: true }}
              >
                <div className={`${act.bg} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                  <Icon icon={act.icon} className={act.iconColor} width={28} height={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{act.title}</h3>
                <p className="text-gray-700">{act.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Executives Section */}
      <section id="executives" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Executive Council</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              Meet our dedicated team leading the Association of Resident Doctors at DELSUTH
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXECUTIVES.map((ex, i) => (
              <motion.div
                key={ex.name}
                className="bg-gray-50 p-6 rounded-lg shadow-md card-hover transition-all"
                data-aos="fade-up"
                data-aos-delay={100 * (i + 1)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <img src={ex.img} alt={ex.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                  <div>
                    <h3 className="font-bold text-gray-800">{ex.name}</h3>
                    <p className="text-blue-600 text-sm">{ex.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-2">
                  <Icon icon="mdi:briefcase-outline" className="w-4 h-4 inline mr-2" />
                  {ex.dept}
                </p>
                <p className="text-gray-700 mb-2">
                  <Icon icon="mdi:phone-outline" className="w-4 h-4 inline mr-2" />
                  {ex.phone}
                </p>
                <p className="text-gray-700">
                  <Icon icon="mdi:email-outline" className="w-4 h-4 inline mr-2" />
                  {ex.email}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12" data-aos="fade-up">
            <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800">
              View Full Executive List
              <Icon icon="mdi:chevron-right" className="ml-1 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              Get in touch with the ARD DELSUTH team for inquiries, collaborations, or support.
            </p>
          </div>
          <div className="md:flex md:space-x-8">
            <motion.div
              className="md:w-1/2 mb-8 md:mb-0"
              data-aos="fade-right"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Icon icon="mdi:map-marker-outline" className="text-blue-600" width={20} height={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Address</h4>
                    <p className="text-gray-700">
                      ARD Secretariat, Ground Floor, Auditorium Building, Delta State University Teaching Hospital, Otefe Road, Off Benin-Warri Expressway, Oghara, Delta State, Nigeria.
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Icon icon="mdi:phone-outline" className="text-orange-600" width={20} height={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Phone</h4>
                    <p className="text-gray-700">+234-902-228-5878</p>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Icon icon="mdi:email-outline" className="text-green-600" width={20} height={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <p className="text-gray-700">sec.arddelsuth@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Icon icon="mdi:clock-outline" className="text-purple-600" width={20} height={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Operating Hours</h4>
                    <p className="text-gray-700">8 am to 4 pm, Monday to Friday</p>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-medium text-gray-800 mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    {SOCIALS.map(soc => (
                      <a
                        key={soc.icon}
                        href={soc.href}
                        className={`${soc.bg} text-white p-2 rounded-full ${soc.hover} transition-all`}
                      >
                        <Icon icon={soc.icon} width={20} height={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              data-aos="fade-left"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Send Us a Message</h3>
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    // You can add form handling logic here
                  }}
                >
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:justify-between md:items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <img className="h-8 w-auto" src="http://static.photos/medical/200x200/1" alt="ARD DELSUTH Logo" />
                <span className="ml-2 text-xl font-bold">ARD DELSUTH</span>
              </div>
              <p className="mt-2 text-gray-400">
                Advancing medical excellence, welfare, and healthcare in Delta State.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
                <ul className="mt-4 space-y-2">
                  {NAV_LINKS.map(link => (
                    <li key={link.href}>
                      <a href={link.href} className="text-gray-400 hover:text-white transition-all">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-all">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-all">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider">Banking</h3>
                <ul className="mt-4 space-y-2">
                  <li className="text-gray-400">Zenith Bank</li>
                  <li className="text-gray-400">1017294750</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2023 ARD DELSUTH. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Designed with{' '}
                <Icon icon="mdi:heart" className="w-4 h-4 inline text-red-500" /> for medical excellence
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            id="back-to-top"
            className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg opacity-100 visible transition-all hover:bg-blue-700"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.3 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            <Icon icon="mdi:arrow-up" className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
