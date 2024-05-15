import React from "react";


const ExpandDown = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M19.7071 8.39644C20.0976 8.78696 20.0976 9.42013 19.7071 9.81065L12.8839 16.6339C12.3957 17.122 11.6043 17.122 11.1161 16.6339L4.29289 9.81065C3.90236 9.42013 3.90236 8.78696 4.29289 8.39644C4.68341 8.00592 5.31657 8.00592 5.7071 8.39644L12 14.6893L18.2929 8.39644C18.6834 8.00592 19.3166 8.00591 19.7071 8.39644Z"/>
        </svg>

    )
}

export default ExpandDown