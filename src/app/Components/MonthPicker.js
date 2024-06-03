'use client';
import React from 'react';
import { TuiDatePicker } from 'nextjs-tui-date-picker';
import { useRouter } from 'next/navigation';

const MonthPicker = () => {
    const router = useRouter();
    const handleChange = (selectedDate) => {
        const getDate = new Date(selectedDate);
        const month = getDate.getMonth();
        const year = getDate.getFullYear();
        router.push(`/blog?month=${month}&year=${year}`);
    }
    return (
        <TuiDatePicker
            handleChange={handleChange}
            date={new Date()}
            inputWidth={140}
            fontSize={16}
            dateType='month'
        />
    )
}

export default MonthPicker