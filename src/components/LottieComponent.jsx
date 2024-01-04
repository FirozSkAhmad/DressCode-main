import React from 'react';
import Lottie from "react-lottie";

import Comp1 from "../../public/assets/Comp_1.json"

const LottieComponent = () => {

    const lottieOptions = {
        animationData: Comp1,
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const handleLottieError = (error) => {
        console.error("Lottie Error:", error);
    };

    return (
        <div className='lottie__Comp'>
            <Lottie
                options={lottieOptions}
                eventListeners={[
                    {
                        eventName: "error",
                        callback: handleLottieError,
                    },
                ]}

            />
        </div>
    )
}

export default LottieComponent