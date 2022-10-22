const NAME = {
    GROOM: '양희영',
    BRIDE: '김혜리',
    G_FATHER: '양윤모',
    G_MOTHER: '김순임',
    G_ORDER: '차남',
    B_FATHER: '김용기',
    B_MOTHER: '이재경',
    B_ORDER: '장녀'
};

const PHONE = {
    GROOM: 'sms:01000000000',
    BRIDE: 'sms:01000000000',
    G_FATHER: 'tel:01000000000',
    G_MOTHER: 'tel:01000000000',
    B_FATHER: 'tel:01000000000',
    B_MOTHER: 'tel:01000000000'
};

const ACCOUNT = {
    groom:[{
        name: NAME.GROOM,
        bank: 'ㅇㅇ은행',
        account: '00-0000-000000'
    },{
        kakao: true,
        name: '신랑',
        account: '00000000000000000000000000'
    }],
    bride:[{
        name: NAME.B_FATHER,
        bank: 'ㅇㅇ은행',
        account: '000-00-0000-000'
    },{
        kakao: true,
        name: '신부',
        account: '00000000000000000000000000'
    }]
};

export {NAME, PHONE, ACCOUNT};