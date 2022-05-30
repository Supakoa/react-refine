import { TagField, DateField, Table, useTable } from "@pankod/refine-antd";
import { IPost } from "../../interface/post";

export const PostList: React.FC = () => {
  const { tableProps } = useTable<IPost>();
  return (
    <Table {...tableProps} rowKey="id">
      <Table.Column dataIndex="title" title="title" />
      <Table.Column
        dataIndex="status"
        title="status"
        render={(value) => <TagField value={value} />}
      />
      <Table.Column dataIndex="content" title="content" />
      <Table.Column
        dataIndex="createdAt"
        title="createdAt"
        sortDirections={["ascend", "descend"]}
        sortOrder="descend"
        render={(value) => <DateField format="LL" value={value} />}
      />
    </Table>
  );
};
