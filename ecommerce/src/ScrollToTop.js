import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Scrollbar from "smooth-scrollbar";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      Scrollbar.get(document.body).scrollTo(0, 0);
    }, [pathname]);

    return null;
}
