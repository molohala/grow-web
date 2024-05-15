import React from "react";

const Moon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M21 12.364C21 17.3345 16.9706 21.364 12 21.364C7.02944 21.364 3 17.3345 3 12.364C3 7.39339 7.02944 3.36395 12 3.36395C12.709 3.36395 13.3693 3.44555 14 3.60016C14.5315 3.73044 14.4163 4.58828 13.9188 4.81632C12.1964 5.60586 11 7.34519 11 9.36395C11 12.1254 13.2386 14.364 16 14.364C17.7051 14.364 19.2108 13.5105 20.1133 12.2074C20.3529 11.8615 21 11.9431 21 12.364Z"
                  />
        </svg>

    )
}

export default Moon