'use client'

import { SplashScreen } from '@/components/Common';
import Navbar from '@/components/Layout/Navbar/Navbar';
import { generateRandomString, saveUserRouteAnalytics, saveUtmAnalytics } from '@/utils/LibFunctions';
import moment from 'moment';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
// import ReactPixel from 'react-facebook-pixel';
// import ReactGa from 'react-ga';
import { ToastContainer, ToastOptions } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { RecoilRoot } from 'recoil';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const search = useSearchParams();

    // useMemo(() => {
    //     console.log("layout called");

    //     ReactGa.initialize("UA-185979255-1"); // react-ga
    //     ReactGa.pageview(pathname + "?" + search.toString());

    //     ReactGa.initialize("AW-10783628317");
    //     ReactGa.pageview(pathname + "?" + search.toString());

    //     const options = {
    //         autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
    //         debug: false, // enable logs
    //     };
    //     ReactPixel.init('502226218020773', options as any); // react-facebook-pixel

    //     ReactPixel.pageView(); // For tracking page view
    // }, [])
    
    return (
        <RecoilRoot>
            {/* <PropagateLoader className='z-100 mx-auto sticky' loading={true} size={50} color="#36d7b7" style={{ zIndex: 10000 }} /> */}
            <AnalyticsComponent />
            <SplashScreen />

            <Navbar />

            {children}

            <ToastContainer />
        </RecoilRoot>
    )
}
export default Layout;

export const toastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
};

function AnalyticsComponent() {
    const pathname = usePathname();
    const search = useSearchParams();

    useEffect(() => {
        // var local_address = localStorage.getItem('address');
        // if(!local_address) {
        //     setShowModal(true);
        // }

        const promotionLink = search;

        var path = window.location.pathname;
        const utmStore = localStorage.getItem("utm_analytics");
        const storedPath = localStorage.getItem("track_session");
        if (!storedPath) {
            let id = generateRandomString(8);
            localStorage.setItem("track_session", JSON.stringify({
                sessionid: id,
                histories: [path],
                date: moment().format('YYYY-MM-DD HH:mm:ss')
            }));
        } else {
            const parsedPath = JSON.parse(storedPath);
            console.log('minutes', moment().diff(moment(parsedPath.date), 'minutes'))
            if(moment().diff(moment(parsedPath.date), 'minutes') > 60) {
                saveUserRouteAnalytics();
            }
            else if(Array.isArray(parsedPath?.histories) && parsedPath.histories.at(-1) != path) {
                if(moment().diff(moment(parsedPath.date), 'minutes') <= 60) {
                    parsedPath.histories = [...parsedPath.histories, path];
                    parsedPath.date = moment().format('YYYY-MM-DD HH:mm:ss');
                    localStorage.setItem("track_session", JSON.stringify(parsedPath));
                }
            }
        }

        if(!utmStore) {
            if(promotionLink.get('utm_campaign')) {
                var utm_string = window.location.search;
                if(utm_string[0] === '?') {
                    utm_string = utm_string.substring(1);
                }

                localStorage.setItem("utm_analytics", JSON.stringify({
                    utm_string,
                    utm_source: promotionLink.get('utm_source'),
                    utm_medium: promotionLink.get('utm_medium'),
                    utm_campaign: promotionLink.get('utm_campaign'),
                    to_date: moment().format('YYYY-MM-DD HH:mm:ss')
                }));
            }
        }
        else {
            const parsedUtm = JSON.parse(utmStore);
            if(moment().diff(moment(parsedUtm.to_date), 'minutes') > 60) {
                saveUtmAnalytics();
            }
        }

    }, [pathname])

    return null;
}
