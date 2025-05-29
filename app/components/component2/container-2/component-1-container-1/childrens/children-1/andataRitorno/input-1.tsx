import React from 'react';
import type { CascaderProps } from 'antd';
import { Cascader } from 'antd';
import styles from "./page.module.css";

interface Option {
  value: string;
  label: string;
  children?: Option[];
}

const options: Option[] = [
  {
    value: "italia",
    label: 'italia',
  },
  {
    value: 'georgia',
    label: 'georgia',
  },
];

const onChange: CascaderProps<Option>['onChange'] = (value) => {
  console.log(value);
};

const App = ({ children }: { children: string }) => (
  <Cascader
    placeholder={children}
    className={styles.Input1}
    options={options}
    onChange={onChange}
    changeOnSelect
  />
);

export default App;