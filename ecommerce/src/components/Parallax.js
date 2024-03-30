import { AdvancedBannerTop } from "./AdvancedBanner";
import React from 'react'
import "./Parallax.css"

const Parallax = () => {
    return (
        <div>
            <div className="main-heading">
                <AdvancedBannerTop />
                <div className="center full second-heading">
                    <div>
                        <h1 className="headline gray">Checkout</h1>
                        <h1 className="headline gray">cool</h1>
                        <h1 className="headline gray">products.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Parallax