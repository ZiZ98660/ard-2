
import { useState } from "react";
import { EXECUTIVES } from "@/public/assets/data/dummydata";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

export const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
      delay: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: (i + 1) * 0.1,
    },
  }),
};

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Execs = () => {
  const [showAll, setShowAll] = useState(false);

  // Always show first 3, rest are hidden until showAll is true
  const firstThree = EXECUTIVES.slice(0, 3);
  const rest = EXECUTIVES.slice(3);

  return (
    <section id="executives" className="py-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Executive Council
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            Meet our dedicated team leading the Association of Resident Doctors
            at DELSUTH
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Always show first 3 */}
          {firstThree.map((ex, i) => (
            <motion.div
              key={ex.name}
              className="bg-gray-50 p-6 rounded-lg shadow-md card-hover transition-all"
              variants={itemVariants}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={ex.img}
                  alt={ex.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-800">{ex.name}</h3>
                  <p className="text-blue-600 text-sm">{ex.role}</p>
                </div>
              </div>
              <p className="text-gray-700 !mb-2 !text-[16px]">
                <Icon
                  icon="mdi:briefcase-outline"
                  className="w-4 h-4 inline mr-2"
                />
                {ex.dept}
              </p>
              <p className="text-gray-700 !text-[16px] mb-2">
                <Icon
                  icon="mdi:phone-outline"
                  className="w-4 h-4 inline mr-2"
                />
                {ex.phone}
              </p>
              <p className="text-gray-700 !text-[14px]">
                <Icon
                  icon="mdi:email-outline"
                  className="w-4 h-4 inline mr-2"
                />
                {ex.email}
              </p>
            </motion.div>
          ))}
          {/* AnimatePresence for the rest */}
          <AnimatePresence>
            {showAll &&
              rest.map((ex, i) => (
                <motion.div
                  key={ex.name}
                  className="bg-gray-50 p-6 rounded-lg shadow-md card-hover transition-all"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{
                    duration: 0.5,
                    delay: (i + 1) * 0.1,
                  }}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={ex.img}
                      alt={ex.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-gray-800">{ex.name}</h3>
                      <p className="text-blue-600 text-sm">{ex.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 !mb-2 !text-[16px]">
                    <Icon
                      icon="mdi:briefcase-outline"
                      className="w-4 h-4 inline mr-2"
                    />
                    {ex.dept}
                  </p>
                  <p className="text-gray-700 !text-[16px] mb-2">
                    <Icon
                      icon="mdi:phone-outline"
                      className="w-4 h-4 inline mr-2"
                    />
                    {ex.phone}
                  </p>
                  <p className="text-gray-700 !text-[14px]">
                    <Icon
                      icon="mdi:email-outline"
                      className="w-4 h-4 inline mr-2"
                    />
                    {ex.email}
                  </p>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
        <motion.div
          className="text-center mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {!showAll && rest.length > 0 && (
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              style={{ outline: "none" }}
            >
              View Full Executive List
              <Icon icon="mdi:chevron-right" className="ml-1 w-5 h-5" />
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Execs;