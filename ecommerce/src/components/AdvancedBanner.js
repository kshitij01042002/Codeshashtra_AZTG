import { ParallaxBanner } from "react-scroll-parallax";

export const AdvancedBannerTop = () => {
    // const background = {

    // };

    // const headline = {

    // };

    // const foreground = {

    // };

    // const gradientOverlay = {

    // };

    return (
        <ParallaxBanner
            layers={[
                {
                    image:
                        "https://i.postimg.cc/QNKxDyQb/background-dark.png",
                    translateY: [0, 50],
                    opacity: [1, 0.3],
                    scale: [1.05, 1, "easeOutCubic"],
                    shouldAlwaysCompleteAnimation: true
                }
                , {
                    translateY: [-10, 80],
                    scale: [1, 1.05, "easeOutCubic"],
                    shouldAlwaysCompleteAnimation: true,
                    expanded: false,
                    children: (
                        <div className="inset center">
                            <h1 className="headline white">Welcome to Blackberry!</h1>
                        </div>
                    )
                }
                , {
                    image: "https://i.ibb.co/Hq6SNfp/imageedit-1-6641950745.png",
                    translateY: [15, 30],
                    scale: [1, 1.1, "easeOutCubic"],
                    shouldAlwaysCompleteAnimation: true
                }
                , {
                    opacity: [0, 1, "easeOutCubic"],
                    shouldAlwaysCompleteAnimation: true,
                    expanded: false,
                    children: <div className="gradient inset" />
                }
            ]}
            className="full"
        />
    );
};
