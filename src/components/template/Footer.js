/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const footer = css`
    display: flex;
    flex: 1;
    padding: 10px 0;
    justify-content: center;
    align-items: center;
    background: #fff;
    font-size: 11px;
    font-weight: bold;
    color: #333;
    &:before {
        content: '©2022 Kim Hye Ri. All rights reserved.';
    }
`;

const Footer = ()=>{
    return <footer
        css={footer}
    />
}

export default Footer;