import kurtaThree from "images/Kurta-3.jpeg"
import CatalogueCard from "../CatalogueCard"
import { motion } from "framer-motion"


const Catalogue:React.FC = () =>{
    
    
    return(
        <section id="section-one" className="gap-6 bg-blue-white pb-16" >
            <motion.div 
                className="lg-2:w-[90%] mx-auto h-full overflow-hidden"
                initial={{opacity:0}}
                whileInView={{opacity:1, transition:{duration:.5},marginTop:"50px"}}
                viewport={{once:true,amount:0.25}}
                
                    >
                <div className="flex flex-col-reverse lg-2:flex-row h-full lg-2:w-2/3 mx-auto bg-white shadow-[0_0_15px_rgba(0,0,0,0.25)]">
                    <div className="lg-2:w-full">
                        <div className="
                            flex relative z-0 
                            lg-2:flex-col
                            ">
                            <CatalogueCard 
                            url="/collection/kurtas" 
                            src="https://res.cloudinary.com/db1m4tnkn/image/upload/v1667087752/e-shop-images/Kurta-11-1_flabev.jpg" 
                            name="Kurtas"
                            cardNo={1}
                            />
                            <CatalogueCard 
                                url="/collection/dresses" 
                                src="https://res.cloudinary.com/db1m4tnkn/image/upload/v1667087753/e-shop-images/dress-5_isiknk.jpg" 
                                name="Dresses" 
                                
                                cardNo={2}
                                />
                            <CatalogueCard 
                                url="/collection/casual" 
                                src={kurtaThree} 
                                name="Casual" 
                                cardNo={3}
                                />
                            </div>
                    </div>
                   
                    <div className="bg-sauvignon-cr relative w-full
                                     grid place-items-center text-center">
                        {/* <div className="row-start-1 lg-2:h-1/4"></div> */}
                        <div className="bg-sauvignon-cr py-12 grid place-items-center">
                            <div className="w-3/4 grid gap-5">
                                <h1 className="font-serif text-3xl mb-3
                                                md:text-4xl lg-2:text-4.5xl ">
                                    Asian Fashion, 
                                    <span className="block">
                                        Do it <span className="underline">right.</span>
                                    </span>
                                </h1>
                                <p className="font-sans-serif text-sm md:text-base">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis alias, nam rem earum nesciunt provident, vero in, nemo repudiandae amet itaque tenetur! Consequatur in eveniet laboriosam nobis quia ipsa vel?
                                </p>
                            </div>
                            
                            
                        </div>
                             
                    </div>
                    {/* <div className="row-start-3 lg-2:h-1/4"></div> */}
                </div>
            </motion.div>
        </section>
    )
} 

export default Catalogue