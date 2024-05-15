import React from "react";


const HeartFill = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M12.4 4.96814C14.5675 2.56703 18.2392 2.30168 20.714 4.51059C23.3575 6.87009 23.5088 11.0531 21.0517 13.6116L21.0416 13.622L13.57 21.1548C12.9262 21.8183 11.8737 21.8183 11.23 21.1548L3.75836 13.622L3.7482 13.6116C1.29123 11.0531 1.44244 6.8701 4.08593 4.5106C6.56072 2.30167 10.2325 2.56703 12.4 4.96814Z"
            />
        </svg>
    )
}

export default HeartFill