/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { css } from "@emotion/react";
import styled  from '@emotion/styled';
import Footer from './Footer';

const progressBack = css`
    position: fixed;
    top: 9px;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 20;
    @media only screen and (min-width: 480px){
        position: sticky;
    }
    span {
        position: absolute;
        top: -8px;
        left: 50%;
        transform: translate(-56%);
    }
`;

const progressBar = css`
    font-style: normal;
    position: absolute;
    top: 0;
    width: 48%;
    height: 100%;
    background: rgba(196,125,120,0.7);
    z-index: 2;
    &:after {
        position: absolute;
        top: -10px;
    }
`;

const ProgressBar = styled.div(props=>({
    transform: props.transform,
    transformOrigin: props.transformOrigin,
    '::after':{
        content: `'`+props.content+`'`,
        right: props.afterRight,
        left: props.afterLeft
    }
}));

const Layout = ({children})=>{
    const [transformBride, setTransformBride] = useState("translate(-90%)");
    const [transformGroom, setTransformGroom] = useState("translate(90%)");
    const [emogi, setEmogi] = useState('none');

    useEffect(()=>{
        const {current} = (children.length ? children[0] : children).props.forwardRef;
        console.log(current.offsetHeight);
        setTransformBride("translate(-90%)");
        setTransformGroom("translate(90%)");
        setEmogi("none");
    }, []);

    return <>
        <header css={progressBack}>
            <ProgressBar
                css={progressBar}
                style={{left: 0}}
                transform={transformBride}
                transformOrigin='left center'
                afterRight='-2px'
                afterLeft='auto'
                content='👰'
            />
            <ProgressBar
                css={progressBar}
                style={{right: 0}}
                transform={transformGroom}
                transformOrigin='right center'
                afterRight='auto'
                afterLeft='-5px'
                content='🤵'
            />
            <span style={{display: emogi}}>💞</span>
        </header>
        {children}
        <Footer/>
    </>
}

export default Layout;