import { Metadata } from "next";

export const metadata:Metadata = {
    title: 'Princing Page',
    description: 'Esta es la página de precios de mi servicio',
};

export default function PricingPage(){
    return(
        <>
            <span className="text-7xl">PricingPage</span>
        </>
    )
}