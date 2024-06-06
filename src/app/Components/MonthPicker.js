'use client';
import React from 'react';
import { TuiDatePicker } from 'nextjs-tui-date-picker';
import { useRouter, useSearchParams } from 'next/navigation';

const MonthPicker = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentDate = new Date();
    const [selectedMonth, setMonth] = React.useState(null);
    const [selectedYear, setYear] = React.useState(null);

    React.useEffect(() => {
        const month = searchParams.get('month') || currentDate.getMonth() + 1;
        const year = searchParams.get('year') || currentDate.getFullYear();
        setMonth(month);
        setYear(year);
    }, [searchParams])

    const handleChange = (selectedDate) => {
        const getDate = new Date(selectedDate);
        const month = getDate.getMonth() + 1;
        const year = getDate.getFullYear();
        router.push(`/blog?month=${month}&year=${year}`);
    }
    return (
        <TuiDatePicker
            handleChange={handleChange}
            date={new Date(`${selectedYear}-${selectedMonth}-01`)}
            inputWidth={140}
            fontSize={16}
            dateType='month'
        />
    )
}

export default MonthPicker