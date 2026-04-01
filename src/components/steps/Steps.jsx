import React from 'react';
import StepCard from '../StepCard/StepCard';
import img1 from "../../assets/user.png";
import img2 from "../../assets/package.png";
import img3 from "../../assets/rocket.png";

const Steps = () => {
    return (
        <div className='mx-10 mb-20'>
            <div className="text-center mb-10">
                <h1 className='font-extrabold text-5xl'>Get Started in 3 Steps</h1>
                <p className="text-[#627382]">Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className="grid grid-cols-3 gap-10">
                <StepCard
                img={img1}
                num={1}
                heading="Create Account"
                description="Sign up for free in seconds. No credit card required to get started."
                >
                </StepCard>
                <StepCard
                img={img2}
                num={2}
                heading="Choose Products"
                description="Browse our catalog and select the tools that fit your needs."
                >
                </StepCard>
                <StepCard
                img={img3}
                num={3}
                heading="Start Creating"
                description="Download and start using your premium tools immediately."
                >
                </StepCard>
            </div>

        </div>
    );
};

export default Steps;