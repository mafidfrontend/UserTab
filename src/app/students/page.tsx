"use client";
import { useState } from "react";
import { Button, Table, Modal, Form, Input, Select } from "antd";
import { columns as initialColumns } from "@/constants";
import { studentsData as initialStudentsData } from "@/constants/data";

export default function Students() {
    const [students, setStudents] = useState(initialStudentsData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    const showModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);

    const handleAddStudent = () => {
        form.validateFields().then((values) => {
            setStudents([
                ...students,
                { key: String(students.length + 1), ...values },
            ]);
            form.resetFields();
            setIsModalOpen(false);
        });
    };

    const handleDelete = (key: string) => {
        setStudents(students.filter((student) => student.key !== key));
    };

    const columns = [
        ...initialColumns,
        {
            title: "Action",
            dataIndex: "action",
            key: "action",
            render: (
                _: void,
                record: {
                    key: string;
                }
            ) => (
                <Button
                    type="link"
                    danger
                    onClick={() => handleDelete(record.key)}
                >
                    Delete
                </Button>
            ),
        },
    ];

    return (
        <section className="w-full p-4 border-2 rounded-xl">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-medium">Students</h1>
                <Button type="primary" onClick={showModal}>
                    Qo&#39;shish
                </Button>
            </div>
            <Table dataSource={students} columns={columns} />

            <Modal
                title="Yangi student qo'shish"
                open={isModalOpen}
                onCancel={handleCancel}
                onOk={handleAddStudent}
            >
                <Form form={form} layout="vertical">
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[
                            { required: true, message: "Name is required" },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="age"
                        label="Age"
                        rules={[{ required: true, message: "Age is required" }]}
                    >
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item
                        name="gender"
                        label="Gender"
                        rules={[
                            { required: true, message: "Gender is required" },
                        ]}
                    >
                        <Select>
                            <Select.Option value="Male">Male</Select.Option>
                            <Select.Option value="Female">Female</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="grade"
                        label="Grade"
                        rules={[
                            { required: true, message: "Grade is required" },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="address"
                        label="Address"
                        rules={[
                            { required: true, message: "Address is required" },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </section>
    );
}
