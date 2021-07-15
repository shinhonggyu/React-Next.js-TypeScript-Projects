import home1 from '../img/home1.png';
import home2 from '../img/신홍규.jpg';
import { About, Description, Hide, Image } from '../styles';
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './Wave';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>My Portfolio</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              my <span>dream</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>software engineer</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          안녕하세요. 저의 포트폴리오 홈페이지에 오신것을 환영합니다
        </motion.p>
        <motion.button variants={fade}>Contact Me</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home2} alt="home1" />
      </Image>
      <Wave />
    </About>
  );
};

// Styled Components
// const About = styled.div`
//   min-height: 90vh;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 5rem 10rem;
//   color: white;
// `;

// const Description = styled.div`
//   flex: 1;
//   padding-right: 5rem;
//   h2 {
//     font-weight: lighter;
//   }
// `;

// const Image = styled.div`
//   flex: 1;
//   overflow: hidden;
//   img {
//     width: 100%;
//     height: 80vh;
//     object-fit: cover;
//   }
// `;

// const Hide = styled.div`
//   overflow: hidden;
// `;

export default AboutSection;
