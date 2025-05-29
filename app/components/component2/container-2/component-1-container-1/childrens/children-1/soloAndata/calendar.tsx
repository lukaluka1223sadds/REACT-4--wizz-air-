'use client'
import React, { useState } from 'react';
import { DatePicker } from 'antd';
import { Dayjs } from 'dayjs';
import styles from "./page.module.css";
const SmallCalendarButton = ({placeholder}:{placeholder:string}) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const buttonLabel = selectedDate ? selectedDate.format('DD/MM/YYYY') : placeholder;

  return (
    <DatePicker
      className={styles.Input1}
      onChange={setSelectedDate}
      suffixIcon={null}
      inputReadOnly
      placeholder={buttonLabel}
      style={{ width: 385 }}
      picker="date"
    />
  );
};

export default SmallCalendarButton;



