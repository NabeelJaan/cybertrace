import React from "react";


const GenHero = ( {title} ) => {
    return(
        <section className="genHero bg-gold pt-16 pb-16 px-5 xl:px-0">
            <div className="max-w-1140px mx-auto text-center py-4">
                <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-roboto font-black">{title}</h1>
            </div>
        </section>
    )
}

export default GenHero