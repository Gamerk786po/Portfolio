// The props for 
interface ContactProps{
    title: string;
    link: string;
    icon: string;
}
// Making a resuseable component for contact
const Contact: React.FC<ContactProps> = ({ title, link, icon}) => {
    // Return statement
    return(
        <>
        {/* The div contaning a contac */}
            <div className="flex gap-6">
                {/* The icon img */}
                <a rel="noopener noreferrer" href={link} target="blank" ><img src={icon} className="h-4 md:h-6 xl:h-10 transition-transform duration-300 lg:hover:scale-110 lg:hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]" alt="Its an img for contact"></img></a>
                {/* The name of the contact */}
                <p className="text-white text-[12px] md:text-[17px] xl:text-[22px]">{title}</p>
            </div>
        </>
    )
}
// exporting the component
export default Contact;