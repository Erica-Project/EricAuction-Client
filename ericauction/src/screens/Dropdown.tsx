import React from 'react';
import { useState, useEffect } from 'react';

const Dropdown = (props:any) => {
    const [visibilityAnimation, setVisibilityAnimation] = useState(false);

    useEffect(() => {
        if (props.visibility) {
            setVisibilityAnimation(true);
        } else {
            setTimeout(() => {
                setVisibilityAnimation(false);
            }, 400);
        }
    }, [props.visibility]);

    return (
        <article className={`components-dropdown ${props.visibility ? 'slide-fade-in-dropdown' : 'slide-fade-out-dropdown'}`}>
            {visibilityAnimation && props.children}
        </article>
    )
};

export default Dropdown;