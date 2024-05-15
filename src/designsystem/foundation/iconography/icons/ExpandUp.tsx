import React from "react";


const ExpandUp = (props: React.SVGProps<SVGSVGElement>) => {
    return (

        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M4.29289 16.6036C3.90236 16.213 3.90236 15.5799 4.29289 15.1893L11.1161 8.36612C11.6043 7.87796 12.3957 7.87796 12.8839 8.36612L19.7071 15.1893C20.0976 15.5799 20.0976 16.213 19.7071 16.6036C19.3166 16.9941 18.6834 16.9941 18.2929 16.6036L12 10.3107L5.7071 16.6036C5.31657 16.9941 4.68341 16.9941 4.29289 16.6036Z"
            />
        </svg>
    )
}

export default ExpandUp