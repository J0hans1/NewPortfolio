import GlassCard from "./GlassCard";

const CardProperty = (props) => {
    return (
        <div className="flex justify-between w-full">
            <h3 className="text-sm lg:text-lg font-semibold lg:font-normal">{props.title}</h3>
            <p className="text-xs md:text-sm lg:text-md">{props.value}</p>
        </div>
    );
};

const BusinessCard = () => {
    return (
        <GlassCard width="w-full sm:w-5/6">
            <div className="flex flex-col gap-1 sm:gap-3 text-lg tracking-widest leading-10">
                <CardProperty title="Name" value="Markus A. R. Johansen" />
                <CardProperty title="Phone" value="+47 934 00 000" />
                <CardProperty title="Email" value="markusarj@gmail.com" />
                <CardProperty title="Adress" value="Clara Holsts Veg 23, 7046" />
                <CardProperty title="Work" value="Internship at NAV IT" />
            </div>
        </GlassCard>
    );
};

export default BusinessCard;