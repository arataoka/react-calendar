import {useSelector} from 'react-redux';
import {selectMonth, selectYear} from '../stores/slices/calendarSlice';
import {getDates} from '../utils/functions';

export const useDates = ():{year:number,month:number,dates:string[]}=>{
    const year = useSelector(selectYear);
    const month = useSelector(selectMonth);
    const  dates  = getDates(year, month);
    return {year,month,dates};
};

