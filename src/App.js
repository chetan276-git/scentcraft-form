import './App.css';
import { Form, Input, Select, Button } from 'antd';

function App() {
  const { Option } = Select;
  return (
    <div className='App'>
      <div className='payment-from-wrap'>
        <div className='form-container'>
          <Form>
            <Form.Item>
              <Input placeholder='Enter your email'></Input>
            </Form.Item>
            <Form.Item>
              <Input placeholder='First name'></Input>
            </Form.Item>
            <Form.Item>
              <Input placeholder='Last name'></Input>
            </Form.Item>
            <Form.Item>
              <Input placeholder='Address'></Input>
            </Form.Item>
            <Form.Item>
              <Input placeholder='Apartment, suite'></Input>
            </Form.Item>
            <Form.Item>
              <Input placeholder='City'></Input>
            </Form.Item>
            <Form.Item>
              <Select placeholder='Italy'>
                <Option value='Italy 1'>Italy 1</Option>
                <Option value='Italy 2'>Italy 2</Option>
                <Option value='Italy 3'>Italy 3</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Select placeholder='Province'>
                <Option value='Province 1'>Province 1</Option>
                <Option value='Province 2'>Province 2</Option>
                <Option value='Province 3'>Province 3</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Input placeholder='Postal Code'></Input>
            </Form.Item>
            <Form.Item>
              <Input placeholder='Phone (optional)'></Input>
            </Form.Item>
            <Button className='btn'>Send me my gift</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default App;
