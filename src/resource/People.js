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
    GROOM: 'sms:01058993050',
    BRIDE: 'sms:01088802508',
    G_FATHER: 'tel:01024973052',
    G_MOTHER: 'tel:01092063052',
    B_FATHER: 'tel:01089072507',
    B_MOTHER: 'tel:01064732507'
};

const ACCOUNT = {
    groom:[{
        name: NAME.GROOM,
        bank: '신한은행',
        account: '110-258-259800'
    },{
        kakao: true,
        name: '신랑',
        account: '281006011000035848853992'
    }],
    bride:[{
        name: NAME.B_FATHER,
        bank: '국민은행',
        account: '022-24-0561-224'
    },{
        kakao: true,
        name: '신부',
        account: '281006011161815290004942'
    }]
};

export {NAME, PHONE, ACCOUNT};