/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const messageTitle = css`
    height: 5.6rem;
    position: absolute;
    margin-top: 2rem;
    top: 0;
    width: 100%;
    z-index: 10;
    &:before{
        content: '소중한 축하메시지를 남겨주세요';
    }
`;

const message = css`
    border: 0;
    display: none;
    padding: 5rem 0 0;
`;

const Message = ({pageHeight})=>{
    return <>
        <div css={messageTitle}/>
        <iframe
          title="rolling-paper"
          width="100%"
          height={pageHeight*0.8 < 560 ? 560 : pageHeight*0.8}
          css={message}
          data-src="https://rollingpaper.site/rolls/927170"
        />
    </>
}

export default Message;