import React from "react";


const ContactInfo = () => {
    return(
        <div className="bg-black relative px-5 xl:px-0">
            <div className="mx-8 rounded-full py-5 text-center bg-gold fixed bottom-0 left-0 right-0">
                <span className="mr-2 text-white text-3xl"><i class="fa-solid fa-phone"></i></span>
                <span className="text-3xl font-normal font-nunito text-white"><a href="tel:+61 2 91887896">1300 669 711 - Australia</a></span>
                <span className="mx-6 w-px h-6 bg-black"></span>
                <span className="text-3xl font-normal font-nunito text-white"><a href="tel:+31 70 701 3333">070 701 3333 - Netherlands</a></span>
            </div>
        </div>
    )
}

export default ContactInfo