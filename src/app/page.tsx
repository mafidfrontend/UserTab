"use client";
import { Button, Form, Input, Table } from "antd";
import { create } from "zustand";

type StudentsType = {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: "male" | "female";
    active: boolean;
};

type GlobalStore = {
    students: StudentsType[];
    groups?: any[];
};

const useGlobalStore = create<GlobalStore>(() => {
    return {
        students: [
            {
                id: Math.floor(Math.random() * 1000000),
                active: true,
                firstName: "Abdulloh",
                lastName: "Anvarov",
                age: 20,
                gender: "male",
            },
        ],
    };
});

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
                    Qo'shish
                </Button>
            </Form.Item>
        </Form>
    );
}

export default function Home() {
    const students = useGlobalStore((state) => state.students);
    return (
        <div>
            <StudentForm />
            <Table
                columns={[
                    {
                        title: "ID",
                        dataIndex: "id",
                    },
                    {
                        title: "Ism",
                        dataIndex: "firstName",
                    },
                ]}
                dataSource={students}
            />
        </div>
    );
}
