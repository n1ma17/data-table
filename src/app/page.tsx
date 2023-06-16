import SimpleTable, { TTableColumns } from "@/app/components/SimpleTable";
import styles from "./page.module.scss";

export type TPassenger = {
  firstName: string;
  persianFirstName: string;
  lastName: string;
  persianLastName: string;
  docNumber: string;
  passportExpireDate: string;
  docType: string;
  birthDate: string;
  passengerType: number;
  phoneNumber: string;
  email: string;
  gender: number;
};
const columns: TTableColumns<TPassenger> = [
  { header: "Age", field: "passengerType", width: 44 },
  {
    header: "Name",
    width: "135",
    cellRenderer(_field, row) {
      return `${row.persianFirstName} ${row.persianLastName}`;
    },
  },
  {
    header: "Gender",
    cellRenderer(_field, row) {
      return row.gender ? "male" : "female";
    },
  },
  { header: "Passport", field: "docNumber", width: 120 },
  { header: "Nationality", field: "docType" },
];
const passengersData = [
  {
    firstName: "string",
    persianFirstName: "string",
    lastName: "string",
    persianLastName: "string",
    docNumber: "string",
    passportExpireDate: "2023-06-16T08:55:08.756Z",
    docType: "Germany",
    birthDate: "2023-06-16T08:55:08.756Z",
    passengerType: 12,
    phoneNumber: "string",
    email: "string",
    gender: 0,
  },
  {
    firstName: "string",
    persianFirstName: "string",
    lastName: "string",
    persianLastName: "string",
    docNumber: "string",
    passportExpireDate: "2023-06-16T08:55:08.756Z",
    docType: "Germany",
    birthDate: "2023-06-16T08:55:08.756Z",
    passengerType: 20,
    phoneNumber: "string",
    email: "string",
    gender: 1,
  },
  {
    firstName: "string",
    persianFirstName: "string",
    lastName: "string",
    persianLastName: "string",
    docNumber: "string",
    passportExpireDate: "2023-06-16T08:55:08.756Z",
    docType: "Germany",
    birthDate: "2023-06-16T08:55:08.756Z",
    passengerType: 25,
    phoneNumber: "string",
    email: "string",
    gender: 1,
  },
];
export default function Home() {
  return (
    <div className={styles.main}>
      <SimpleTable title="Simple Table" data={passengersData} columns={columns} />
    </div>
  );
}
