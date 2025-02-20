"use client";
import {motion} from "framer-motion"
import  Image  from "next/image"
export default function AboutMe() {
  return (
    
    <div>
      <div>
        <h2 className="flex w-full text-2xl font-bold"> About Alex</h2>
        <motion.div
          initial={{opacity: 0}}
          animate={{
            opacity: 1,

            
        transition:{duration:0.5}
          }}
        >A software developer. Making this thing.</motion.div>
        <div className="flex h-80 items-center justify-between px-10"><motion.div
          className="flex text-2xl font-bold items-center"
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            
        transition:{duration:0.5}
          }
        }
        >Back End Experience</motion.div>
        
        <div className="flex flex-wrap w-1/2 items-center gap-4 pr-10">
          <Image src={"/logo/c-sharp.svg"} width={100} height={100} className="border-2 border-white flex items-center gap-1" alt="C#"  />
          <Image src={"/logo/golang.svg"} width={100} height={100} className="border-2 border-white items-center gap-2" alt="Go"  />
          <Image src={"/logo/java.svg"} width={100} height={100} className="border-2 border-white items-center gap-3" alt="Java"  />
          <Image src={"/logo/python.svg"} width={100} height={100} className="border-2 border-white items-center gap-4" alt="Python"  />
          <Image src={"/logo/nodejs.svg"} width={100} height={100} className="border-2 border-white items-center gap-5" alt="Node"  />
        </div>
        </div>
        <div>make interactive canvas here</div>
        
        <motion.div
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            
        transition:{duration:0.5}
          }}
        >Front End Experience</motion.div>
        <div>
          
          <Image src={"/logo/react.svg"} width={100} height={100} alt="React"  />
          <Image src={"/logo/angular.svg"} width={100} height={100} alt="React"  />
          <Image src={"/logo/next.svg"} width={100} height={100} alt="React"  />
        </div>


        <motion.div
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            
        transition:{duration:0.5}
          }}
        >Cloud Technology</motion.div>

        
      <motion.div
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            
        transition:{duration:0.5}
          }}
        >Automation</motion.div>

        
      <motion.div
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            
        transition:{duration:0.5}
          }}
        >What&apos;s next?</motion.div>
      </div>



    </div>
  );
}
