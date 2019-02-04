import React, { Component } from "react";
import "antd/dist/antd.css";
import {
  Modal,
  Form,
  Tooltip,
  Button,
  Input,
  Icon,
  Cascader,
  Tabs,
  Select
} from "antd";

const { TextArea } = Input;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Option = Select.Option;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 10 }
  }
};

const tabItems = [
  "Personal Details",
  "Experience Details",
  "Passport/Visa Details",
  "Inxurance Details"
];

class EmployeeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTabIndex: "1"
    };
    this.callback = this.callback.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  callback(key) {
    let selectedTabIndex = key;
    this.setState({ selectedTabIndex });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);

        this.postAdmin(values);
      }
    });
  }

  handleChange(value) {
    console.log(`selected ${value}`);
  }

  personalDetails() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label={<span>First Name</span>}>
          {getFieldDecorator("FirstName", {
            rules: [
              {
                required: true,
                message: "Please enter your FirstName!",
                whitespace: true
              }
            ]
          })(<Input />)}
        </FormItem>

        <FormItem {...formItemLayout} label={<span>Last Name</span>}>
          {getFieldDecorator("LastName", {
            rules: [
              {
                required: true,
                message: "Please enter your LastName!",
                whitespace: true
              }
            ]
          })(<Input />)}
        </FormItem>

        <FormItem {...formItemLayout} label={<span>DOB</span>}>
          {getFieldDecorator("DOB", {
            rules: [
              {
                required: true,
                message: "Please input your DOB!",
                whitespace: true
              }
            ]
          })(<Input type="date"/>)}
        </FormItem>

        <FormItem {...formItemLayout} label="Gender">
          {getFieldDecorator("Gender", {
            rules: [
              { required: true, message: "Please enter your Gender!" }
            ]
          })(
            <Select style={{ width: 120 }} onChange={this.handleChange}>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          )}
        </FormItem>

        <FormItem {...formItemLayout} label="Contact Number">
          {getFieldDecorator("ContactNumber", {
            rules: [
              { required: true, message: "Please enter your Contact Number!" }
            ]
          })(<Input style={{ width: "100%" }} />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Alternate Contact Number">
          {getFieldDecorator("AlternateContactNumber", {
            rules: [
              {
                required: true,
                message: "Please enter your Alternate Contact Number!"
              }
            ]
          })(<Input style={{ width: "100%" }} />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Address">
          {getFieldDecorator("Address", {
            rules: [{ required: true, message: "Please enter your Address!" }]
          })(
            <TextArea
              placeholder="Address"
              autosize={{ minRows: 2, maxRows: 6 }}
              style={{ width: "100%" }}
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Permanent Address">
          {getFieldDecorator("PermanentAddress", {
            rules: [
              {
                required: true,
                message: "Please enter your Permanent Address!"
              }
            ]
          })(
            <TextArea
              placeholder="Permanent Address"
              autosize={{ minRows: 2, maxRows: 6 }}
              style={{ width: "100%" }}
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Marital Status">
          {getFieldDecorator("MaritalStatus", {
            rules: [
              { required: true, message: "Please enter your Marital Status!" }
            ]
          })(
            <Select style={{ width: 120 }} onChange={this.handleChange}>
              <Option value="single">Single</Option>
              <Option value="married">Married</Option>
              <Option value="divorced">Divorced</Option>
              <Option value="others">Others</Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Blood Group">
          {getFieldDecorator("BloodGroup", {
            rules: [
              { required: true, message: "Please enter your Blood Group!" }
            ]
          })(<Input style={{ width: "100%" }} />)}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </FormItem>
      </Form>
    );
  }

  experienceDetails() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label={<span>Total Years of Experience</span>}>
          {getFieldDecorator("Total Years of Experience", {
            rules: [
              {
                required: true,
                message: "Please enter your Total Years of Experience!",
                whitespace: true
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label = {<span>Graduation</span>}>
          {getFieldDecorator("Graduation",{
              rules:[
                  {
                      required: true,
                      message: "Please enter your Graduation!",
                      whitespace: true
                  }
              ]
          })(<Input></Input>)}
        </FormItem>
       
        <FormItem {...formItemLayout} label={ <span>Specialization</span>}>
        {getFieldDecorator("Specialization", {
            rules: [
                {
                    required: true,
                    message: "Please enter your Specialization!",
                    whitespace: true
                }            
            ]
        })(<Input></Input>)}
        </FormItem>
        <FormItem {...formItemLayout} label={ <span>Post Graduation</span>}>
        {getFieldDecorator("Post Graduation", {
            // rules: [
            //     {
            //         required: true,
            //         message: "Please enter your Post Graduation!",
            //         whitespace: true
            //     }            
            // ]
        })(<Input></Input>)}
        </FormItem>

        <FormItem {...formItemLayout} label="Skills">
          {getFieldDecorator("Skills", {
            rules: [
              {
                required: true,
                message: "Please enter your Skills!"
              }
            ]
          })(
            <TextArea
              placeholder="Skills"
              autosize={{ minRows: 2, maxRows: 6 }}
              style={{ width: "100%" }}
            />
          )}
        </FormItem>

        <FormItem>
            <Button type="primary" htmlType="submit">
                Save
            </Button>
        </FormItem>
      </Form>
    );
  }

  passPortAndVisaDetails() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label={<span>Passport Number</span>}>
          {getFieldDecorator("Passport Number", {
            rules: [
              {
                required: true,
                message: "Please enter your Passport Number!",
                whitespace: true
              }
            ]
          })(<Input />)}
        </FormItem>

        <FormItem {...formItemLayout} label={<span>Issue Date</span>}>
          {getFieldDecorator("Issue Date", {
            rules: [
              {
                required: true,
                message: "Please input Issue Date!",
                whitespace: true
              }
            ]
          })(<Input type="date"/>)}
        </FormItem>

        <FormItem {...formItemLayout} label={<span>Expiry Date</span>}>
          {getFieldDecorator("Expiry Date", {
            rules: [
              {
                required: true,
                message: "Please input Expiry Date!",
                whitespace: true
              }
            ]
          })(<Input type="date"/>)}
        </FormItem>

        <FormItem {...formItemLayout} label="Place of Issue">
          {getFieldDecorator("Place of Issue", {
            rules: [
              { required: true, message: "Please enter Place of Issue!" }
            ]
          })(<Input />)}
        </FormItem>
        
        {/* <FormItem {...formItemLayout} label="Address">
          {getFieldDecorator("Address", {
            rules: [{ required: true, message: "Please enter your Address!" }]
          })(
            <TextArea
              placeholder="Address"
              autosize={{ minRows: 2, maxRows: 6 }}
              style={{ width: "100%" }}
            />
          )}
        </FormItem> */}
        
        <FormItem {...formItemLayout} label={<span>PAN Number</span>}>
          {getFieldDecorator("PAN Number", {
            rules: [
              {
                required: true,
                message: "Please enter your PAN Number!",
                whitespace: true
              }
            ]
          })(<Input />)}
        </FormItem>

        <FormItem {...formItemLayout} label="VISA">
          {getFieldDecorator("VISA", {
            rules: [
              { required: true, message: "If you have VISA, please select Yes" }
            ]
          })(
            <Select style={{ width: 120 }} onChange={this.handleChange}>
              <Option value="yes">Yes</Option>
              <Option value="no">No</Option>
            </Select>
          )}
        </FormItem>
        
        <FormItem>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </FormItem>
      </Form>
    );
  }

  insuranceDetails() {
    const { getFieldDecorator } = this.props.form;
    return(
        <Form onSubmit={this.handleSubmit}>
            <FormItem {...formItemLayout} label={<span>Name of Dependent</span>}>
          {getFieldDecorator("Name of Dependent", {
            // rules: [
            //   {
            //     required: true,
            //     message: "Please enter your Name of Dependent!",
            //     whitespace: true
            //   }
            // ]
          })(<Input />)}
          </FormItem>

          <FormItem {...formItemLayout} label={<span>Relation</span>}>
          {getFieldDecorator("Relation", {
            // rules: [
            //   {
            //     required: true,
            //     message: "Please enter Relation!",
            //     whitespace: true
            //   }
            // ]
          })(<Input />)}
          </FormItem>

          <FormItem {...formItemLayout} label="Gender">
          {getFieldDecorator("Gender", {
            // rules: [
            //   { required: true, message: "Please enter dependent Gender!" }
            // ]
          })(
            <Select style={{ width: 120 }} onChange={this.handleChange}>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          )}
        </FormItem>


        <FormItem {...formItemLayout} label={<span>DOB</span>}>
          {getFieldDecorator("DOBDependent", {
            // rules: [
            //   {
            //     required: true,
            //     message: "Please input DOB!",
            //     whitespace: true
            //   }
            // ]
          })(<Input type="date"/>)}
        </FormItem>

        <FormItem>
            <Button type="primary" htmlType="submit">
                Save
            </Button>
        </FormItem>

        </Form>
    );
  }

  render() {
    return (
      <div>
        <Tabs onChange={this.callback} type="card">
          <TabPane tab="Personal Details" key="1">
            {this.state.selectedTabIndex === "1" ? (
              this.personalDetails()
            ) : (
              <div />
            )}
          </TabPane>
          <TabPane tab="Experience Details" key="2">
            {this.state.selectedTabIndex === "2" ? (
              this.experienceDetails()
            ) : (
              <div />
            )}
          </TabPane>
          <TabPane tab="Passport/Visa Details" key="3">
            {this.state.selectedTabIndex === "3" ? (
              this.passPortAndVisaDetails()
            ) : (
              <div />
            )}
          </TabPane>
          <TabPane tab="Insurance Details" key="4">
            {this.state.selectedTabIndex === "4" ? (
              this.insuranceDetails()
            ) : (
              <div />
            )}
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

const EmployeeDetailsForm = Form.create()(EmployeeDetails);

export default EmployeeDetailsForm;
