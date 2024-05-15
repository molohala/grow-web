import {SVGProps} from "react";

const CloseLine = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M4.29289 4.65685C4.68342 4.26632 5.31658 4.26632 5.70711 4.65685L19.7071 18.6568C20.0976 19.0474 20.0976 19.6805 19.7071 20.0711C19.3166 20.4616 18.6834 20.4616 18.2929 20.0711L4.29289 6.07106C3.90237 5.68054 3.90237 5.04737 4.29289 4.65685Z"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M4.29289 20.0711C3.90237 19.6805 3.90237 19.0474 4.29289 18.6568L18.2929 4.65685C18.6834 4.26632 19.3166 4.26632 19.7071 4.65685C20.0976 5.04737 20.0976 5.68054 19.7071 6.07106L5.70711 20.0711C5.31658 20.4616 4.68342 20.4616 4.29289 20.0711Z"/>
        </svg>
    )
}

export default CloseLine;