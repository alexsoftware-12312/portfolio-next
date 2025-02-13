"use client";
import {motion} from "framer-motion"

export default function Home() {
  return (
    
    <div>
      <div>
        <header> Alex&apos;s portfolio page</header>
        <motion.div
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            
        transition:{duration:0.5}
          }}
        >Test Framer message</motion.div>
        <span>A little about me... I am a full stack developer always trying to lear something new.</span>
        <div>make interactive canvas here</div>
        <div>Link to contact form. Should go through link backend and store into postgres. set up some sort of alert through go</div>
      </div>

    </div>
  );
}
