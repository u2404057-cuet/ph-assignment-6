import React from 'react';

const StepCard = ({img, num, heading, description}) => {
    return (
        <div>
            <div className="relative flex items-center justify-center flex-col text-center px-6 py-16 rounded-2xl bg-gray-100 shadow space-y-3">
                <div className="p-5 bg-linear-to-r from-[#4F39F610] to-[#9514FA10] rounded-full">
                <img src={img} alt="" />
                </div>
                <h1 className="text-2xl font-bold">{heading}</h1>
                <p className="text-[#627382]">{description}</p>
                <div className="absolute top-2 right-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full h-7 w-7 flex items-center justify-center text-white">
                    <p className="">0{num}</p>
                </div>
            </div>
        </div>
    );
};

export default StepCard;