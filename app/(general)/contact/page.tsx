import { Metadata } from "next";

export const metadata:Metadata = {
    title: 'Contact Page',
    description: 'Esta es la página de contactos de mi empresa',
};

export default function ContactPage(){
    return(
        <>
            <span className="text-7xl">ContactPage</span>
        </>
    )
}