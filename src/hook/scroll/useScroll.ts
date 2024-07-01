import {useCallback} from "react";

const useScroll = () => {

    const scrollToTop = useCallback(
        () => {
            window.scrollTo(0, 0);
        },
        []
    )

    return [scrollToTop];
};

export default useScroll;