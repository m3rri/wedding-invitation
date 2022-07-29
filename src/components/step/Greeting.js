/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled  from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import {NAME, PHONE} from '../../resource/People';

const GREETINGS = [
['20대에 처음 만난 저희는',
' 12년의 시간 동안 서로 사랑하고 같이 성장해왔습니다.'],
['이런 저희 두 사람, 가을의 탐스러운 열매처럼',
'부부의 결실을 맺으려 합니다.'],
['귀한 걸음 하시어 따뜻한 마음으로 축하해 주시면',
'더없는 기쁨이 되겠습니다.']
];

const invitation = css`
    font-size: 14px;
    margin: 60px 0 0;
    white-space: pre-line;
`;

const Invitation = styled.div(props=>({
    '&::before': {
        content: `'`+props.text.join('\\A')+`'`
    }
}));

const greeting = css`
    font-size: 15px;
    font-style: normal;
    p{
        white-space: pre-line;
    }
`;

const GreetingP = styled.p(props=>({
    '&::before': {
        content: `'`+props.text.join('\\A')+`'`
    }
}));

const people = css`
    font-size: 16px;
    font-style: normal;
    letter-spacing: 0.3rem;
    p::after{
        font-size: 18px;
        font-weight: bold;
    }
`;

const People = styled.p(props=>({
    '&::before': {
        content: `'`+props.before+`'`
    },
    '&::after': {
        content: `'`+props.after+`'`
    }
}));

const divisionLine = css`
    border-bottom: 1px solid rgba(200,121,104,0.3);
    margin: 20px 0;
    width: 70%;
`;

const picture = css`
    margin: 20px 0 0;
    width: 100%;
    pointer-events : none;
`;

const callBox = css`
    background: #fff;
    display: flex;
    flex-direction: row;
    font-size: 14px;
    width: 100%;
    a {
        width: 50%;
        align-items: center;
        line-height: 30px;
        margin: 20px 0;
        text-decoration: none;
        color: inherit;
    }
`;

const Greeting = ({type})=>{
    let callTarget;
    type = type || 'f';
    
    if(type==='g'){
        callTarget = [['신랑 아버지', PHONE.G_FATHER, faPhone], ['신랑 어머니', PHONE.G_MOTHER, faPhone]];
    }else if(type==='b'){
        callTarget = [['신부 아버지', PHONE.B_FATHER, faPhone], ['신부 어머니', PHONE.B_MOTHER, faPhone]];
    }else{
        callTarget = [['신랑', PHONE.GROOM, faComments], ['신부', PHONE.BRIDE, faComments]];
    }
    
    return <>
        <Invitation css={invitation} text={['소중한 분을','초대합니다']}/>
        <div css={divisionLine}/>
        <div css={greeting}>
            {GREETINGS.map((GREETING,i)=><GreetingP text={GREETING} key={i}/>)}
        </div>
        <div css={divisionLine}/>
        <div css={people}>
            <People
                before={`${NAME.G_FATHER}·${NAME.G_MOTHER}의 ${NAME.G_ORDER} `}
                after={NAME.GROOM.substring(1)}
            />
            <People
                before={`${NAME.B_FATHER}·${NAME.B_MOTHER}의 ${NAME.B_ORDER} `}
                after={NAME.BRIDE.substring(1)}
            />
        </div>
        <img
            src={`${process.env.PUBLIC_URL}/img/secondary.jpg`}
            css={picture}
            alt="wedding secondary"
        />
        <div css={callBox}>
          <a style={{borderRight: "0.5px solid #ddd"}} href={callTarget[0][1]}>
            <FontAwesomeIcon icon={callTarget[0][2]}/> {callTarget[0][0]}에게 연락하기
          </a>
          <a href={callTarget[1][1]}>
            <FontAwesomeIcon icon={callTarget[1][2]}/> {callTarget[1][0]}에게 연락하기
          </a>
        </div>
    </>;
}

export default Greeting;