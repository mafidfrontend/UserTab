import { Button, Form, Input } from "antd";
import { useGlobalStore } from "../page";

function StudentForm() {
    const students = useGlobalStore((state) => state.students);
    const [form] = Form.useForm();
    return (
        <Form
            form={form}
            onFinish={(values) => {
                const new_student = students.concat({
                    ...values,
                    id: Math.floor(Math.random() * 1000000),
                });
                useGlobalStore.setState({
                    students: new_student,
                });
                form.resetFields();
            }}
        >
            <Form.Item
                label={"Ism"}
                name={"firstName"}
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Qo&apos;shish
                </Button>
            </Form.Item>
        </Form>
    );
}

export default StudentForm;
