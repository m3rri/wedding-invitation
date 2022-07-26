/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const article = css`
    align-items: center;
    color: #3c241f;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    position: relative;
    width: 100%;
`;

const Article = ({height, forwardRef, background, children})=>{
    return <article
        css={article}
        style={{height: height?`${height}px`:'100%', background: background}}
        ref={forwardRef}
    >
        {children}
    </article>;
}

export default Article;