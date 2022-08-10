/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import {isMobile} from 'react-device-detect';
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
    const [childHeightList, setChildHeightList] = useState([]);
    const [transformBride, setTransformBride] = useState("translate(-90%)");
    const [transformGroom, setTransformGroom] = useState("translate(90%)");
    const [emogi, setEmogi] = useState('none');

    useEffect(()=>{
        const transformProgress = (scrollValueIndex, listLength)=>{
            const percent = 100-(scrollValueIndex+1)/listLength*100;
    
            setTransformBride(`translate(-${percent}%)`);
            setTransformGroom(`translate(${percent<0 ? 0 : percent}%)`);
            if(percent<=0){
                setEmogi('block');
            }else{
                setEmogi('none');
            }
        }

        const getIndex = (scrollY, checkBottom, type)=>{
            const {current} = (children.length ? children[0] : children).props.forwardRef;
            const plusValue = type === 0 ? 80 : current.offsetHeight*0.4;
            const articleListClone = getSortedHeightList(childHeightList, scrollY+plusValue);
            const activeArticleIndex = articleListClone.length === childHeightList.length
            ? articleListClone.indexOf(scrollY+plusValue)
            : checkBottom
            ? articleListClone.pop()
            : articleListClone.indexOf(scrollY+plusValue)-1;
    
            return activeArticleIndex;
        }

        const calculateProgress = ()=>{
            const {scrollY, innerHeight} = window;
            const pageHeight = document.body.offsetHeight - innerHeight;
            const checkBottom = scrollY+20 >= pageHeight;
            
            const progressIndex = getIndex(scrollY, checkBottom, 0);
            transformProgress(progressIndex, childHeightList.length);
        }

        const calculateProgressDesktop = ()=>{
            const scrollY = document.querySelector("#root").scrollTop;
            const pageHeight = document.querySelector("#root").scrollHeight;
            const checkBottom = scrollY >= pageHeight-1000;
    
            const progressIndex = getIndex(scrollY, checkBottom, 0);
            transformProgress(progressIndex, childHeightList.length);
        }

        if(children.length>0){
            if(isMobile){
                window.addEventListener('scroll', calculateProgress);
            }else{
                document.querySelector("#root").addEventListener('scroll', calculateProgressDesktop);
            }

            const list = children
                        .map(({props}, i)=>{
                            return props.forwardRef.current.clientHeight;
                        },[])
                        .map((child, i, heights)=>{
                            return heights.reduce((accumulator, currentValue, currentIndex)=>{
                                if(currentIndex<=i){
                                    return accumulator+currentValue;
                                }else{
                                    return accumulator;
                                }
                            })-child;
                        });
            setChildHeightList(Array.from(list));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [children]);

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

function getSortedHeightList(list, scrollY){
    let cloneList = Array.from(list);
    cloneList.push(scrollY);
    cloneList = cloneList.filter((height, i)=> cloneList.indexOf(height)===i);
    cloneList.sort((a, b)=>a-b);
    return cloneList;
}

export default Layout;