import React,{FC} from 'react';
import { Pagination } from 'antd';

interface IPaginationProps {
    next?: string
    prev?: string
}
const PaginationC:FC<IPaginationProps> = ({next, prev}) => {
    return (
        <Pagination defaultCurrent={1} total={10}/>
    )
}

export default PaginationC;
