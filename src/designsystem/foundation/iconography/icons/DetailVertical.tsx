import React from "react";

const DetailVertical = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M13.5 6.81396C13.5 7.64239 12.8284 8.31396 12 8.31396C11.1716 8.31396 10.5 7.64239 10.5 6.81396C10.5 5.98554 11.1716 5.31396 12 5.31396C12.8284 5.31396 13.5 5.98554 13.5 6.81396Z"/>
            <path
                d="M13.5 12.814C13.5 13.6424 12.8284 14.314 12 14.314C11.1716 14.314 10.5 13.6424 10.5 12.814C10.5 11.9855 11.1716 11.314 12 11.314C12.8284 11.314 13.5 11.9855 13.5 12.814Z"/>
            <path
                d="M13.5 18.814C13.5 19.6424 12.8284 20.314 12 20.314C11.1716 20.314 10.5 19.6424 10.5 18.814C10.5 17.9855 11.1716 17.314 12 17.314C12.8284 17.314 13.5 17.9855 13.5 18.814Z"/>
        </svg>
    )
}

export default DetailVertical;