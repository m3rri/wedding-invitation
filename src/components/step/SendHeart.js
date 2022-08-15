/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled  from '@emotion/styled';
import { useState } from "react";
import ReactModal from "react-modal";
import CopyToClipboard from 'react-copy-to-clipboard';
import {ACCOUNT} from '../../resource/People';

const sendHeart = css`
    background: rgba(239,239,239, 0.3);
    padding: 2rem 0 1rem;
    width: 100%;
    span{
        padding-bottom: 1rem;
        display: block;
        &::before{
            content: '마음 전해주실 곳';
            display: block;
            font-size: 17px;
            font-weight: bold;
            padding-bottom: 0.5rem;
        }
        &::after{
            content: '"신랑 신부에게 축하의 마음을 전해주세요"';
            font-size: 14px;
        }
    }
    button{
        background: rgba(239,239,239, 0.5);
        border: 1px solid #efefef;
        border-radius: 8px;
        cursor: pointer;
        display: block;
        margin: 0.5rem 25%;
        padding: 0.7rem;
        width: 50%;
    }
    button:hover{
        background: #efefef;
    }
`;

const modal = {
    overlay: {
        background: "rgba(0,0,0,0.35)"
    },
    content: {
        border: "0px",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        height: "auto",
        width: "80%",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        padding: "0"
    }
};

const modalContent = css`
    text-align: center;
    font-style: normal;
    a {
        border-bottom: 1px solid #ddd;
        color: #3c241f;
        display: block;
        padding: 1.4rem;
        margin: 0.3rem;
        text-decoration: none;
    }
    div.account-bank {
        border-bottom: 1px solid #ddd;
        color: #3c241f;
        padding: 1.4rem;
        margin: 0.3rem;
    }
    div.account-bank div::after{
        cursor: pointer
    }
`;

const ModalSide = styled.div({
    width: "100%",
    background: "rgba(200,121,104,0.75)",
    color: "#fff",
    padding: "15px 0",
    fontWeight: "bold"
},
props=>({
    '&::before':{
        content: `'`+props.content+`'`
    }
}));

const SendHeart = ()=>{
    const [modalOpenState, setModalOpenState] = useState();
    const [modalContentState, setModalContentState] = useState({
        side: '',
        accounts: []
    });
    const modalOpen = (sideName)=>{
        ReactModal.setAppElement("#modal");
        setModalOpenState(true);
        document.body.style.overflow = 'hidden';

        const sideText = sideName==='groom' ? '신랑' : '신부';
        const accountList = ACCOUNT[sideName];
        setModalContentState({side: `${sideText}측`, accounts: accountList});
    }
    const modalClose = ()=>{
        setModalOpenState(false);
        document.body.style.overflow = 'unset';
    }

    return <>
        <div css={sendHeart}>
            <span></span>
            <button onClick={()=>modalOpen('groom')}>신랑측 계좌번호</button>
            <button onClick={()=>modalOpen('bride')}>신부측 계좌번호</button>
        </div>
        <div id="modal">
            <ReactModal
                isOpen={modalOpenState}
                onRequestClose={modalClose}
                style={modal}>
                <div css={modalContent}>
                    <ModalSide className="side" content={modalContentState.side}/>
                    {modalContentState.accounts.map(account=>{
                        if(account.kakao){
                            return <a key={account.account} href={`https://qr.kakaopay.com/${account.account}`}>
                                카카오페이 송금({account.name})
                            </a>;
                        }else{
                            return <div key={account.displayName} className="account-bank">
                                <div
                                    css={{"marginBottom": "0.3rem","&:before":{
                                        content: `'`+account.bank+` `+account.name+`'`
                                    }}}
                                />
                                <CopyToClipboard
                                    text={account.account.replace(/-/g,'')}
                                    onCopy={()=>alert(`계좌번호가\n클립보드에 복사되었습니다`)}
                                >
                                    <div css={{
                                        '&:before':{
                                            content: `'`+account.account+` '`
                                        },
                                        '&:after': {
                                            content: `'복사'`,
                                            background: "#efefef",
                                            padding: "5px 8px",
                                            borderRadius: "10px"
                                        }
                                    }}/>
                                </CopyToClipboard>
                            </div>;
                        }
                    })}
                </div>
            </ReactModal>
        </div>
    </>;
}

export default SendHeart;