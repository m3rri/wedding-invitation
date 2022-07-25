/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import NAME from '../../resource/People';
import Date from '../../resource/Date';
import Site from '../../resource/Site';

const bold = css`
    font-weight: bold;
`
const border = css`
    border: 1px solid rgba(200,121,104,0.3);
`;

const outline = css`
    width: 89%;
    height: 100%;
    margin: 25px 0;
    z-index: 1;
`;

const flexColumnWrapper = css`
    display: flex;
    flex-direction: column;
`;

const borderBottom = css`
    border-top: 0;
    border-left:0;
    border-right:0;
`;

const division = css`
    padding: 0 0.41em 0.41em;
    margin-bottom: 0.43em;  
`

const Main = ()=>{
    const wDay = `${Date.yyyy}.${Date.mm}.${Date.dd} ${Date.date} ${Date.HH}시 ${Date.MM}분`;

    return <>
        <div css={[border,outline]}/>
        <div css={flexColumnWrapper} style={{position:"absolute"}}>
            <div style={{ marginTop: "20%"}}>
                <div css={[flexColumnWrapper,bold]} style={{alignItems: "center", marginBottom: "10%"}}>
                    <span>{Date.mm}월</span>
                    <span css={[border,borderBottom,division]}/>
                    <span>{Date.dd}일</span>
                </div>
                <div>
                    <div css={bold} style={{padding:"0 0 0.3em"}}>
                        {NAME.GROOM}&nbsp;&nbsp;·&nbsp;&nbsp;{NAME.BRIDE}
                    </div>
                    <div>저희 결혼합니다♥</div>
                </div>
            </div>
            <img src={`${process.env.PUBLIC_URL}/img/main.jpg`} alt="wedding main" width="100%" style={{margin: "12% 0"}}/>
            <div style={{margin: "auto 0 20%"}}>
                <div style={{padding:"0 0 0.3em"}}>{wDay}</div>
                <div>{Site.site} {Site.hall}</div>
            </div>
        </div>
    </>;
}

export default Main;