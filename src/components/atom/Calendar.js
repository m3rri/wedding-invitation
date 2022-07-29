/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from '@emotion/styled';
import { DAY_NAME } from "../../resource/Date";

const DivMonth = styled.div(
    {
        margin: "10px 0",
        fontSize: '24px',
        color: 'rgb(200,121,104)'
    },
    props=>({
        "&::before": {
            content: `'`+props.mm+`월'`
        }
    })
);

const calendarWrapper = css`
    display: grid;
    font-size: 15px;
    grid-template-columns: repeat(7, 1fr);
`;

const DivDate = styled.div(
    {
        justifyContent: "center",
        alignItems: "center",
        margin: "0.6rem 0.85rem",
        "&:nth-of-type(7n+1)":{
            color: "rgb(200,121,104)"
        },
        "&:nth-of-type(7n)":{
            color: "#8BA5B4"
        }
    },
    props=>({
        "&::before": {
            content: `'`+props.date+`'`
        }
    })
);

const thisDate = css`
    background: rgba(200,121,104,0.75);
    color: #FFF !important;
    padding: 7px 0 8px;
    border-radius: 29px;
    margin: 0 1px;
    font-weight: bold;
`;

const dataFormat = date=>{
    return [
        date.getFullYear(),
        date.getMonth()+1,
        date.getDate()
    ];
}

const calendar = css`
    border-radius: 8px;
    font-style: normal;
    margin-top: 20px;
    padding: 5px;
`;

const Calendar = ({date})=>{
    const [yyyy, mm, dd] = dataFormat(date);
    let dayNames = [];
    let lastDays = [];
    let thisDays = [];
    let nextDays = [];
    const lastDayOfPrevMonth = new Date(yyyy, mm-1, 0).getDay();
    const lastDateOfThisMonth = dataFormat(new Date(yyyy, mm, 0)).pop()*1;
    let lastDaysOfSquare = (lastDayOfPrevMonth+1)+lastDateOfThisMonth;
    lastDaysOfSquare = (Math.ceil(lastDaysOfSquare/7)*7)-(lastDaysOfSquare+1);

    dayNames = DAY_NAME.map(name=><DivDate key={name} date={name.substring(0,1)}/>);
    
    for(let i=0; i<=lastDayOfPrevMonth; i++){
        lastDays.push(<DivDate key={`last-${i}`} date={''}/>);
    }

    for(let i=0; i<lastDateOfThisMonth; i++){
        if(i+1===dd){
            thisDays.push(<DivDate key={`this-${i}`} date={i+1} css={thisDate}/>);
        }else{
            thisDays.push(<DivDate key={`this-${i}`} date={i+1}/>);
        }
    }

    for(let i=0; i<=lastDaysOfSquare; i++){
        nextDays.push(<DivDate key={`last-${i}`} date={''}/>);
    }
    
    return <div css={calendar}>
        <DivMonth mm={mm}/>
        <div css={calendarWrapper}>
            {dayNames}
            {lastDays}
            {thisDays}
            {nextDays}
        </div>
    </div>;
}

export default Calendar;