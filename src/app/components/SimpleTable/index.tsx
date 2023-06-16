import clsx from "clsx";
import styles from "./SimpleTable.module.scss";
import React from "react";
import { cssUnit } from "@/app/utils/units";

export type TTableColumn<T, K extends keyof T = keyof T> = {
  header?: string;
  field?: K;
  width?: string | number;
  cellRenderer?: (fieldValue: T[K] | undefined, row: T) => string;
};

export type TTableColumns<T> = TTableColumn<T>[];

export interface SimpleTableProps<T> {
  data: T[];
  columns: TTableColumns<T>;
  title: string;
}

function getCellData<T>(col: TTableColumn<T>, row: T) {
  if (col.field) {
    if (col.cellRenderer) return col.cellRenderer(row[col.field], row);
    else return String(row[col.field]);
  } else {
    if (col.cellRenderer) return col.cellRenderer(undefined, row);
    else return "";
  }
}
function SimpleTable<T>(props: SimpleTableProps<T>) {
  const { columns, data, title } = props;

  return (
    <div className={styles["table"]}>
      <div className={styles["table__header"]}>
        <img src="/images/table.png" alt="table" width={100} height={90} />
        <span className={styles["table__header__title"]}>{title}</span>
      </div>
      <div className={styles["table__column"]}>
        {columns.map((column, index) => (
          <div
            key={index}
            className={styles["table__column__cell"]}
            style={{
              minWidth: column.width ? cssUnit(column.width) : undefined,
            }}
          >
            {column.header}
          </div>
        ))}
      </div>
      {data.map((row, rowIndex) => (
        <div key={rowIndex} className={styles["table__row"]}>
          {columns.map((column, headerIndex) => (
            <div
              style={{
                minWidth: column.width ? cssUnit(column.width) : undefined,
              }}
              key={headerIndex}
              className={styles["table__row__cell"]}
            >
              {getCellData(column, row)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SimpleTable;
