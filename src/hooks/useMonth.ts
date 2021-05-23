import {useDispatch} from 'react-redux';
import {adjustMonth} from '../utils/functions';
import {DECEMBER, JANUARY} from '../utils/constant';
import {setCalendar} from '../stores/slices/calendarSlice';


export const useMonth = (year:number,month:number):{incrementMonth:()=>void, decrementMonth:()=>void} =>{
    const dispatch = useDispatch();
    const incrementMonth = () => {
        // 12月から1月になる場合を考慮
        const payload =
            adjustMonth(month + 1) === JANUARY
                ? { year: year + 1, month: JANUARY }
                : { year, month: month + 1 };
        dispatch(setCalendar(payload));
    };
    const decrementMonth = () => {
        // 1月から12月になる場合を考慮
        const payload =
            adjustMonth(month - 1) === DECEMBER
                ? { year: year - 1, month: DECEMBER }
                : { year, month: month - 1 };
        dispatch(setCalendar(payload));
    };
    return {incrementMonth, decrementMonth};
};
