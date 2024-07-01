const useScroll = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return [scrollToTop];
};

export default useScroll;