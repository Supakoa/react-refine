import { DateField, Table, useTable } from "@pankod/refine-antd";
import { IUser } from "../../interface/user";

export const UsersList: React.FC = () => {
  const { tableProps } = useTable<IUser>();
  return (
    <Table {...tableProps} rowKey="id">
      <Table.Column dataIndex="id" title="id" sorter />
      <Table.Column dataIndex="firstName" title="firstName" />
      <Table.Column dataIndex="lastName" title="lastName" />

      <Table.Column dataIndex="email" title="email" />
      <Table.Column
        dataIndex="birthday"
        title="birthday"
        sortDirections={["ascend", "descend"]}
        sorter
        render={(value) => <DateField format="LL" value={value} />}
      />
    </Table>
  );
};
