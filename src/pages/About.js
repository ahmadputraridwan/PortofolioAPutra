import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar-animate"
      />
      <div className="about">
        <h2>About</h2>
        <>
          <article>
            <p>
            Greetings! I am Ahmad Putra Ridwan Susilo, a graduate of the University of Bandar Lampung with a degree in Business Administration. My professional journey began as a General Administration staff, contributing as an honorary worker at the Water Resource Management Agency of Lampung Province, Region II.
            </p>
            <p>
            Presently, I am undergoing a transformative journey by participating in a bootcamp to become a Fullstack Developer at DumbWays.id. This immersive experience has allowed me to delve into the intricacies of full-stack development, equipping me with a diverse skill set to thrive in the dynamic world of technology.


            </p>
            <h2>Sub-header</h2>
            <p>
            My academic background in business administration, coupled with real-world experience in general administration within the water resource management sector, provides me with a unique perspective. I am passionate about leveraging this fusion of administrative knowledge and technical skills to craft innovative solutions in the realm of Fullstack Development.
            </p>
            <p>
            As I navigate through this enriching bootcamp, I am dedicated to honing my abilities and contributing meaningfully to the field. I believe that the synergy of my administrative and emerging technical expertise will be a valuable asset in approaching software development projects.


            </p>
            <p>
            Feel free to explore my evolving portfolio and connect with me as I embark on this exciting journey. Thank you for taking the time to learn more about my professional endeavors.
            </p>

          </article>
        </>
      </div>
    </>
  );
};

export default About;
