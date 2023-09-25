// @ts-nocheck
import { useEffect, useState } from "react";

const UseSafari = () => {
    const [is_safari, setIs_safari] = useState(false);

    useEffect(() => {
        if (window !== undefined) {
            const isSafari = /constructor/i.test(window?.HTMLElement) || (function (p) { return p?.toString() === "[object SafariRemoteNotification]"; })(!window?.['safari'] || (typeof safari !== 'undefined' && window?.['safari']?.pushNotification));

            setIs_safari(isSafari);
        }
    }, [])

    return is_safari;
}

export default UseSafari;