'use client'
import React, { useState } from 'react';
import { Button, DatePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { DownOutlined } from '@ant-design/icons';
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
      style={{ width: 180 }}
      picker="date"
    />
  );
};

export default SmallCalendarButton;



