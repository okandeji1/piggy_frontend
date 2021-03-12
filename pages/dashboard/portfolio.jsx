import React, {useState} from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import {useRouter} from "next/router";
import {
  Layout,
  Col,
  Row,
  Card,
  Button,
  Steps,
  message,
  Form,
  Select,
  Modal,
  Typography,
  Checkbox,
  Upload,
  Divider,
} from "antd";
import DashboardLayout from "../../container/layout/dashboard.container";
import AppInput from "../../components/app-input.component";
import AppSelect from "../../components/app-select.component";
import {CrateIcon} from "../../public/icons/icons";
import Icon, {UserOutlined, EditOutlined} from "@ant-design/icons";

const {Content} = Layout;
const {Step} = Steps;
const {Option} = Select;
const plainOptions = ["Yes", "No"];
const investingOptions = [
  "Home Purchase",
  "Retirement",
  "Emergency Fund",
  "Marriage",
  "Vacation",
  "Capital Growth",
];
const describedOptions = ["Limited", "Average", "Sophisticated"];
const timeOptions = ["Short Term", "Medium Term", "Long Term"];
const ristOptions = ["Low Risk", "Medium Risk", "High Risk"];
const objectivesOptions = ["Income", "Growth", "Balanced"];
const accountOptions = ["RRSP", "TFSA", "Non-registered", "Joint", "RESP"];

const steps = [
  {
    title: "Step 1",
    description: "Personal Details",
    content: (
      <Form
        className="w-full p-4 mx-auto my-8"
        layout="vertical"
        name="basic"
        title="Enter Your Personal Details"
        initialValues={{gender: "male"}}
      >
        <Typography.Title level={1}>
          Enter Your Personal Details
        </Typography.Title>
        <Row gutter={24}>
          <Col xs={{span: 24}} lg={{span: 12}}>
            <Form.Item
              name="phone"
              label="What’s your Phone Number"
              rules={[{required: true, message: "Phone Number is required"}]}
            >
              <AppInput type="number" placeholder="Phone Number" />
            </Form.Item>
          </Col>
          <Col xs={{span: 24}} lg={{span: 12}}>
            <Form.Item
              name="citizenship"
              label="What’s your Citizenship?"
              rules={[{required: true, message: "Citizenship is required"}]}
            >
              <AppInput type="text" placeholder="Citizenship" />
            </Form.Item>
          </Col>
          <Col xs={{span: 24}} lg={{span: 12}}>
            <Form.Item name="gender" label="Gender">
              <AppSelect suffixIcon={<CrateIcon />}>
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
              </AppSelect>
            </Form.Item>
          </Col>
          <Col xs={{span: 24}} lg={{span: 12}}>
            <Form.Item
              name="address"
              label="What’s your Address"
              rules={[{required: true, message: "Address is required"}]}
            >
              <AppInput placeholder="Address" type="text" />
            </Form.Item>
          </Col>
          <Col xs={{span: 24}} lg={{span: 12}}>
            <Form.Item
              name="zipCode"
              label="What’s your Zipcode"
              rules={[{required: true, message: "Zip Code is required"}]}
            >
              <AppInput type="text" placeholder="Zip code" />
            </Form.Item>
          </Col>
          <Col xs={{span: 24}} lg={{span: 12}}>
            <Form.Item
              name="maritalStatus"
              label="What’s your Marital Status"
              rules={[{required: true, message: "Marital status is required"}]}
            >
              <AppInput type="text" placeholder="Marital status" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    ),
  },
  {
    title: "Step 2",
    description: "Employment Information",
    content: (
      <Form
        className="w-full p-4 mx-auto my-8"
        layout="vertical"
        name="basic"
        title="Enter Your Employment Information"
        initialValues={{status: "Unemployed", humanRsc: "Human Resources"}}
      >
        <Typography.Title level={1}>
          Enter Your Employment Information
        </Typography.Title>
        <Row gutter={24}>
          <Col xs={{span: 24}} lg={{span: 12}}>
            <Form.Item name="status" label="What’s your employment status">
              <AppSelect suffixIcon={<CrateIcon />}>
                <Option value="Unemployed">Unemployed</Option>
              </AppSelect>
            </Form.Item>
          </Col>
          <Col xs={{span: 24}} lg={{span: 12}}>
            <Form.Item
              name="employer"
              label="If employed, what’s the name of employer"
              rules={[{required: true, message: "Employer is required"}]}
            >
              <AppInput type="text" placeholder="Employer" />
            </Form.Item>
          </Col>
          <Col xs={{span: 24}} lg={{span: 12}}>
            <Form.Item name="humanRsc" label="What’s the category of industry">
              <AppSelect suffixIcon={<CrateIcon />}>
                <Option value="Human Resources">Human Resources</Option>
              </AppSelect>
            </Form.Item>
          </Col>
          <Col xs={{span: 24}} lg={{span: 12}}>
            <Form.Item
              name="job"
              label="What’s your job title"
              rules={[{required: true, message: "Job is required"}]}
            >
              <AppInput type="text" placeholder="Job" />
            </Form.Item>
          </Col>
          <Col xs={{span: 24}} lg={{span: 12}}>
            <Form.Item
              name="totalIncome"
              label="What’s your total income"
              rules={[{required: true, message: "Total income is required"}]}
            >
              <AppInput placeholder="Total income" type="text" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    ),
  },
  {
    title: "Step 3",
    description: "Anti Money Laundering",
    content: (
      <div className="flex flex-col justify-center">
        <Typography.Title level={1}>
          Enter Your Employment Information
        </Typography.Title>
        <div className="flex flex-row items-center justify-between mb-5">
          <Typography.Text>
            Would you be opening this account on behalf of a third party
          </Typography.Text>
          <Checkbox.Group options={plainOptions} />
        </div>
        <div className="flex flex-row items-center justify-between mb-5">
          <Typography.Text>
            Are you a politically exposed person
          </Typography.Text>
          <Checkbox.Group options={plainOptions} />
        </div>
        <div className="flex flex-row items-center justify-between mb-5">
          <Typography.Text>
            Are you an insider or senior director of a publicly traded company
          </Typography.Text>
          <Checkbox.Group options={plainOptions} />
        </div>
        <div className="flex flex-col mb-8">
          <Typography.Text>
            <span className="text-2xl text-black mr-3">
              Upload your Identification
            </span>
            <span>e.g driver’s license, national identity card etc.</span>
          </Typography.Text>
          <Upload
            name="avatar"
            listType="picture-card"
            className="mt-2"
            showUploadList={false}
          >
            <UserOutlined />
          </Upload>
        </div>
      </div>
    ),
  },
  {
    title: "Step 4",
    description: "Capital Improvement Plan",
    content: (
      <div className="flex flex-col justify-center">
        <Typography.Title level={1}>
          Setup your personalized portfolio
        </Typography.Title>
        <div className="flex flex-row items-center justify-between mb-5">
          <Typography.Text>
            What’s your main reason for investing
          </Typography.Text>
          <Checkbox.Group options={investingOptions} />
        </div>
        <div className="flex flex-row items-center justify-between mb-5">
          <Typography.Text>
            How would you describe your investment knowledge
          </Typography.Text>
          <Checkbox.Group options={describedOptions} />
        </div>
        <div className="flex flex-row items-center justify-between mb-5">
          <Typography.Text>
            What is your time horizon{" "}
            <span className="text-xs">
              (You can withdraw funds at any time)
            </span>
          </Typography.Text>
          <Checkbox.Group options={timeOptions} />
        </div>
        <div className="flex flex-row items-center justify-between mb-5">
          <Typography.Text>
            How would you describe your risk tolerance
          </Typography.Text>
          <Checkbox.Group options={ristOptions} />
        </div>
        <div className="flex flex-row items-center justify-between mb-5">
          <Typography.Text>What is your investment objective</Typography.Text>
          <Checkbox.Group options={objectivesOptions} />
        </div>
        <div className="flex flex-row items-center justify-between mb-5">
          <Typography.Text>How much do you have saved</Typography.Text>
          <AppInput type="number" placeholder="250,000.00" className="w-64" />
        </div>
        <div className="flex flex-row items-center justify-between mb-5">
          <Typography.Text>
            What’s the value of your property and assets
          </Typography.Text>
          <AppInput type="number" placeholder="250,000.00" className="w-64" />
        </div>
        <div className="flex flex-row items-center justify-between mb-5">
          <Typography.Text>What’s the value of your debts</Typography.Text>
          <AppInput type="number" placeholder="250,000.00" className="w-64" />
        </div>
        <div className="flex flex-row items-center justify-between mb-5">
          <Typography.Text>
            How many years do you have with the following:
          </Typography.Text>
          <span>
            Stocks <AppInput type="text" className="w-16" />
          </span>
          <span>
            Bonds <AppInput type="text" className="w-16" />
          </span>
          <span>
            Mutual Funds <AppInput type="text" className="w-16" />
          </span>
          <span>
            ETF <AppInput type="text" className="w-16" />
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "Step 5",
    description: "Setup Account",
    content: (
      <div className="flex flex-col justify-center">
        <Typography.Title level={1}>
          No, i’ll start with a new piggyalpha account
        </Typography.Title>
        <div className="flex flex-col items-center justify-between mb-5">
          <Typography.Text>
            Would you be opening this account on behalf of a third party
          </Typography.Text>
          <div className="flex flex-row items-center justify-between mb-5">
            <Checkbox>
              Yes, i’d like to transfer an existing investment account
            </Checkbox>
            <Checkbox>No, i’ll start with a new piggyalpha account</Checkbox>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between mb-5">
          <Typography.Text>
            What type of investment account are you transferring{" "}
          </Typography.Text>
          <Checkbox.Group options={accountOptions} />
          <Button className="h-12 w-28 btn-primary">Transfer</Button>
        </div>
      </div>
    ),
  },
  {
    title: "Step 6",
    description: "Preview & Submit",
    content: (
      <div className="flex flex-col justify-center">
        <Typography.Title level={1}>Preview</Typography.Title>
        <div className="flex flex-row justify-between">
          <Typography.Text>Personal Information</Typography.Text>
          <EditOutlined />
        </div>
        <Divider></Divider>
        <div className="flex flex-row justify-between">
          <Typography.Text>Employment Information</Typography.Text>
          <EditOutlined />
        </div>
        <Divider></Divider>
        <div className="flex flex-row justify-between">
          <Typography.Text>Anti Money Laundering</Typography.Text>
          <EditOutlined />
        </div>
        <Divider></Divider>
        <div className="flex flex-row justify-between">
          <Typography.Text>Client Investor Profile</Typography.Text>
          <EditOutlined />
        </div>
        <Divider></Divider>
        <div className="flex flex-row justify-between">
          <Typography.Text>Accounts</Typography.Text>
          <EditOutlined />
        </div>
        <Divider></Divider>
        <div className="flex flex-col justify-center items-center">
          <Link href="#">
            <a className="text-center text-primary underline">
              Review your agreements
            </a>
          </Link>
          <Typography.Text>
            By checking the box below , you acknowledge that you have read and
            agree to the terms and conditions and agree to use electronic
            records and signatures.
          </Typography.Text>
          <Checkbox>
            I agree to the Client Agreement and as of today, I certify that the
            information I have provided in the following is correct
          </Checkbox>
        </div>
      </div>
    ),
  },
];

const Portfolio = () => {
  const [mod, setMod] = useState({
    visible: true,
  });
  const showModal = () => {
    setMod({
      ...mod,
      visible: false,
    });
  };

  const handleOk = (e) => {
    setMod({
      ...mod,
      visible: false,
    });
  };

  const handleCancel = (e) => {
    console.log(e);
    setMod({
      ...mod,
      visible: false,
    });
  };
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <DashboardLayout>
      <PageStyled>
        <Row gutter={24}>
          <Col span={6}>
            <Row gutter={8}>
              <Col xs={{span: 24}} lg={{span: 24}}>
                <Card>test</Card>
              </Col>
              <Col xs={{span: 24}} lg={{span: 24}}>
                <Card>test</Card>
              </Col>
              <Col xs={{span: 24}} lg={{span: 24}}>
                <Card>test</Card>
              </Col>
            </Row>
          </Col>
          <Col span={18}>
            <Row gutter={16}>
              <Col xs={{span: 24}} lg={{span: 24}}>
                <Card>Test</Card>
              </Col>
              <Col xs={{span: 24}} lg={{span: 24}}>
                <Card>Test</Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Modal
          title="Setup your profile"
          visible={mod.visible}
          className="modal"
          footer={null}
          closable={false}
          width="100%"
        >
          <Card>
            {/* <Typography.Title>Enter Your Personal Details</Typography.Title> */}
            <Steps current={current}>
              {steps.map((item) => (
                <Step
                  key={item.title}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action flex justify-end p-8">
              {current < steps.length - 1 && (
                <Button
                  type="next"
                  className="h-12 w-28 btn-primary mr-1"
                  onClick={() => next()}
                >
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button
                  className="h-12 w-28 btn-primary mr-1"
                  key="submit"
                  block={true}
                  htmlType="submit"
                  onClick={() => message.success("Processing complete!")}
                >
                  Submit
                </Button>
              )}
              {current > 0 && (
                <Button
                  className="h-12 w-28 btn-primary ml-1"
                  onClick={() => prev()}
                >
                  Previous
                </Button>
              )}
            </div>
          </Card>
        </Modal>
      </PageStyled>
    </DashboardLayout>
  );
};

const PageStyled = styled(Layout)`
  background: ${(props) => props.theme.colors.tertiary};
  width: 100vh;
  height: 100vh;
  .steps-content {
    /* margin-top: 16px; */
    border: 1px dashed #e9e9e9;
    border-radius: 2px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 80px;
  }

  .steps-action {
    margin-top: 4rem;
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
  }
`;

export default Portfolio;
