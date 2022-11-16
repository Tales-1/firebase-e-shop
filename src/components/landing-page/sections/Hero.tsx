import heroImg from "images/hero-img.jpg"
import {motion} from "framer-motion"
// FIND A SOLUTION TO THE MOBILE KEY PAIRING NOT BEING READ OR UNDERSTOOD BY TYPESCRIPT AT THE MOMENT I'VE PUT DOWN ANY
// Property 'mobile' does not exist on type '{ mobile?: boolean | undefined; tablet?: boolean | undefined; desktop?: boolean | undefined; } | undefined'.ts(2339)

import { Link } from "react-router-dom"
import Button from "components/Button"


const Hero:React.FC = () => {
    let duration = .6
    let pos = -60

    return (
        <>
      
        <div className="relative grid max-w-full">
            <div className="grid row-start-1 col-start-1 bg-black overflow-hidden before:absolute before:block before:inset-0 before:bg-black before:opacity-[0.22] -z-10">
                <img className="object-cover h-[95vh] w-full" src={heroImg} alt="woman wearing a dress" />
            </div>      
            <div className="text-center row-start-1 mx-auto col-start-1 w-3/5 md:9/10 flex flex-col gap-5 md:gap-9 xl:px-20 my-auto xl:mt-28 items-center">
            <motion.h1 
                className="text-5xl sm:text-7xl leading-tight xl:text-8.5xl text-white font-serif font-bold"
                initial={{opacity:0, x:pos}}
                animate={{opacity:1,x:0, transition:{duration:duration}}}
                >Traditional and Modern Styles To Suit All
                <motion.span 
                    className="block text-2xl md:text-4xl xl:text-4.5xl mt-5 font-normal"
                    initial={{opacity:0, x:-pos}}
                    animate={{opacity:1,x:0, transition:{duration:duration,delay:duration}}}
                    >Browse through our collection
                </motion.span>
            </motion.h1>
            <Link to="/collection/kurtas">
                <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1, transition:{delay:duration*2,duration:0.5}}}
                >
                    <Button 
                        styles="text-lg py-3 px-4 md:px-6 md:py-5 md:text-2xl bg-sauvignon-cr text-blue-card xl:mt-10 font-bold mx-auto hover:bg-blue-header hover:text-sauvignon-cr">
                        SHOP NOW
                    </Button>
                </motion.div>
            </Link>
            </div>
        </div>
        </>
    )
}

export default Hero