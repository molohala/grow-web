import React from "react";

const AddLine = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2.46447C12.5523 2.46447 13 2.91218 13 3.46447L13 21.2635C13 21.8157 12.5523 22.2635 12 22.2635C11.4477 22.2635 11 21.8157 11 21.2635V3.46447C11 2.91218 11.4477 2.46447 12 2.46447Z" fill="current"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M2.10051 12.364C2.10051 11.8117 2.54822 11.364 3.10051 11.364H20.8995C21.4518 11.364 21.8995 11.8117 21.8995 12.364C21.8995 12.9162 21.4518 13.364 20.8995 13.364L3.10051 13.364C2.54822 13.364 2.10051 12.9162 2.10051 12.364Z" fill="current"/>
        </svg>
    );
};

export default AddLine;