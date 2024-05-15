import React from "react";

const Chat = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g filter="url(#filter0_b_22_2597)">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.5 3.36395C7.25329 3.36395 3 7.61725 3 12.864C3 18.1107 7.25329 22.364 12.5 22.364H19.1246C20.2288 22.364 20.8639 21.1083 20.2096 20.2189L19.5837 19.3681C21.3905 17.6549 22 15.4953 22 12.864C22 7.61725 17.7467 3.36395 12.5 3.36395ZM7.5 11.364C7.5 10.8117 7.94421 10.364 8.49216 10.364H15.7846C16.3325 10.364 16.7767 10.8117 16.7767 11.364C16.7767 11.9162 16.3325 12.364 15.7846 12.364H8.49217C7.94421 12.364 7.5 11.9162 7.5 11.364ZM9.77415 14.364C9.22619 14.364 8.78198 14.8117 8.78198 15.364C8.78198 15.9162 9.22619 16.364 9.77415 16.364H15.7846C16.3325 16.364 16.7767 15.9162 16.7767 15.364C16.7767 14.8117 16.3325 14.364 15.7846 14.364H9.77415Z"/>
            </g>
            <defs>
                <filter id="filter0_b_22_2597" x="-1" y="-0.636047" width="27" height="27" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_22_2597"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_22_2597" result="shape"/>
                </filter>
            </defs>
        </svg>
    )
};

export default Chat;