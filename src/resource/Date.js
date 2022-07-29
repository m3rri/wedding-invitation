const DAY_NAME = [
  '일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'
];
const W_DAY = new Date(2022, 9, 1, 12, 30);

const weddingDate = {
  yyyy: W_DAY.getFullYear(),
  mm: W_DAY.getMonth()+1,
  dd: (W_DAY.getDate()+'').length===1 ? '0'+W_DAY.getDate() : W_DAY.getDate(),
  date: DAY_NAME[W_DAY.getDay()],
  HH: W_DAY.getHours(),
  MM: W_DAY.getMinutes()
};

export default weddingDate;
export {W_DAY, DAY_NAME};