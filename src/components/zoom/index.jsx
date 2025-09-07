import styles from './styles.module.scss';
import Picture1 from '../../../public/images/1.jpeg';
import Picture2 from '../../../public/images/2.jpeg';
import Picture3 from '../../../public/images/3.jpg';
import Picture4 from '../../../public/images/4.jpg'
import Picture5 from '../../../public/images/5.jpg'
import Picture6 from '../../../public/images/6.jpg'
import Picture7 from '../../../public/images/7.jpeg'
import Image from 'next/image';
import { useScroll, useTransform, motion} from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Zoom() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
useEffect(()=>{
console.log(scrollYProgress)
console.log(scale4)
},[scrollYProgress,scale4])
    const pictures = [
        {
            src: "/videos/hero.mp4",
            scale: scale4,
            type:'video'
        },
        {
            // src: Picture2,
            scale: scale5,
            // type:'image',
               src: "/videos/vid2.mp4",
            type:'video'

        },
        {
            // src: Picture3,
            scale: scale6,
            // type:'image',
               src: "/videos/vid2.mp4",
            type:'video'

        },
        {
            scale: scale5,
            src: "/videos/vid2.mp4",
            type:'video'

        },
        {
            src: Picture5,
            scale: scale6,
            type:'image'

        },
        {
            src: Picture6,
            scale: scale8,
            type:'image'

        },
        {
            src: Picture7,
            scale: scale9,
            type:'image'

        }
    ]

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                {
                    pictures.map( ({src, scale,type}, index) => {
                        return <motion.div key={index} style={{scale}} className={styles.el}>
                            <div className={styles.imageContainer}>
                                {type=='video'?
                                <video
            autoPlay={false}
            muted
            loop
            playsInline
            className="w-full h-full object-cover filter grayscal group-hover:grayscal-0 transition-all duration-700 ease-in-out scale100 group-hover:scale105"
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
                                :<Image
                                    src={src}
                                    fill
                                    alt="image"
                                    placeholder='blur'
                                />}
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}
