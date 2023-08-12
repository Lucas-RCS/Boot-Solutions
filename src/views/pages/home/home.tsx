import style from './home.module.scss';
import Sidebar from '../../assets/components/sideBar/sideBar';
import { PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import {
    Button,
    Cascader,
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Slider,
    Switch,
    TreeSelect,
    Upload,
} from 'antd';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

function Home() {

    const [componentDisabled, setComponentDisabled] = useState<boolean>(false);

    return (
        <div>
            <Sidebar />
            <div className={style.home_section}>
                <div className={style.text}>Home</div>
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    disabled={componentDisabled}
                    style={{ maxWidth: 1600 }}
                >
                    <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
                        <Checkbox>Checkbox</Checkbox>
                    </Form.Item>
                    <Form.Item label="Radio">
                        <Radio.Group>
                            <Radio value="apple"> Apple </Radio>
                            <Radio value="pear"> Pear </Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Input">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Select">
                        <Select>
                            <Select.Option value="demo">Demo</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="TreeSelect">
                        <TreeSelect
                            treeData={[
                                { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item label="Cascader">
                        <Cascader
                            options={[
                                {
                                    value: 'zhejiang',
                                    label: 'Zhejiang',
                                    children: [
                                        {
                                            value: 'hangzhou',
                                            label: 'Hangzhou',
                                        },
                                    ],
                                },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item label="DatePicker">
                        <DatePicker />
                    </Form.Item>
                    <Form.Item label="RangePicker">
                        <RangePicker />
                    </Form.Item>
                    <Form.Item label="InputNumber">
                        <InputNumber />
                    </Form.Item>
                    <Form.Item label="TextArea">
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item label="Switch" valuePropName="checked">
                        <Switch />
                    </Form.Item>
                    <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
                        <Upload action="/upload.do" listType="picture-card">
                            <div>
                                <PlusOutlined />
                                <div style={{ marginTop: 8 }}>Upload</div>
                            </div>
                        </Upload>
                    </Form.Item>
                    <Form.Item label="Button">
                        <Button>Button</Button>
                    </Form.Item>
                    <Form.Item label="Slider">
                        <Slider />
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Home;