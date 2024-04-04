import { motion } from "framer-motion"

const pageTransition = (OgComponent: any) => {
    
    return () => (
        <>
            <OgComponent />
            
            
            <motion.div
                className="fixed top-0 left-0 w-full h-screen bg-pageAnimationGray origin-bottom z-50"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0, radius:1, borderTopLeftRadius: "100%", borderTopRightRadius: "100%" }}
                exit={{ scaleY: 1, radius: 1, borderTopLeftRadius: "0%", borderTopRightRadius: "0%" }}
                transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
            />

            <motion.div
                className="fixed top-0 left-0 w-full h-screen bg-pageAnimationGray origin-top z-50"
                initial={{ scaleY: 1, borderBottomLeftRadius: "0%", borderBottomRightRadius: "0%" }}
                animate={{ scaleY: 0, borderBottomLeftRadius: "100%", borderBottomRightRadius: "100%" }}
                exit={{ scaleY: 0 }}
                transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
            />

        </>
    )
}


export default pageTransition