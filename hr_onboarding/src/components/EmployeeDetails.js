import React, { Component } from "react";
import "antd/dist/antd.css";
import { Form, Button, Input, Tabs, Select } from "antd";

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

class EmployeeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTabIndex: "1",
      personal_Details: [],
      experience_Details: [],
      passportVisa_Details: [],
      insurance_Details: []
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
        if (this.state.selectedTabIndex === "1") {
          this.setState({ personal_Details: values });
        } else if (this.state.selectedTabIndex === "2") {
          this.setState({ experience_Details: values });
        } else if (this.state.selectedTabIndex === "3") {
          this.setState({ passportVisa_Details: values });
        } else if (this.state.selectedTabIndex === "4") {
          this.setState({ insurance_Details: values });
        }
      }
    });
  }

  handleChange(value) {
    console.log(`selected ${value}`);
  }
  
  handleSaveSubmit = () => {
    console.log('this is:', this);
    let { personal_Details, experience_Details, insurance_Details, passportVisa_Details } = this.state;
    const theData = {
        personal_Details,
        experience_Details,
        insurance_Details,
        passportVisa_Details
    }
     console.log(theData, "theData");   
    
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
            ],

            initialValue: this.state.personal_Details.FirstName
          })(<Input type="text" />)}
        </FormItem>

        <FormItem {...formItemLayout} label={<span>Last Name</span>}>
          {getFieldDecorator("LastName", {
            rules: [
              {
                required: true,
                message: "Please enter your LastName!",
                whitespace: true
              }
            ],
            initialValue: this.state.personal_Details.LastName
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
            ],
            initialValue: this.state.personal_Details.DOB
          })(<Input type="date" />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Gender">
          {getFieldDecorator("Gender", {
            rules: [{ required: true, message: "Please enter your Gender!" }],
            initialValue: this.state.personal_Details.Gender
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
            ],
            initialValue: this.state.personal_Details.ContactNumber
          })(<Input style={{ width: "100%" }} />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Alternate Contact Number">
          {getFieldDecorator("AlternateContactNumber", {
            rules: [
              {
                required: true,
                message: "Please enter your Alternate Contact Number!"
              }
            ],
            initialValue: this.state.personal_Details.AlternateContactNumber
          })(<Input style={{ width: "100%" }} />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Address">
          {getFieldDecorator("Address", {
            rules: [{ required: true, message: "Please enter your Address!" }],
            initialValue: this.state.personal_Details.Address
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
            ],
            initialValue: this.state.personal_Details.PermanentAddress
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
            ],
            initialValue: this.state.personal_Details.MaritalStatus
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
            ],
            initialValue: this.state.personal_Details.BloodGroup
          })(<Input style={{ width: "100%" }} />)}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </FormItem>

        <FormItem>
          <Button type="primary" htmlType="submit">
            Upload
          </Button>
        </FormItem>
      </Form>
    );
  }

  experienceDetails() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label={<span>Total Years of Experience</span>}
        >
          {getFieldDecorator("TotalYearsOfExperience", {
            rules: [
              {
                required: true,
                message: "Please enter your Total Years of Experience!",
                whitespace: true
              }
            ],
            initialValue: this.state.experience_Details.TotalYearsOfExperience
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label={<span>Graduation</span>}>
          {getFieldDecorator("Graduation", {
            rules: [
              {
                required: true,
                message: "Please enter your Graduation!",
                whitespace: true
              }
            ],
            initialValue: this.state.experience_Details.Graduation
          })(<Input />)}
        </FormItem>

        <FormItem {...formItemLayout} label={<span>Specialization</span>}>
          {getFieldDecorator("Specialization", {
            rules: [
              {
                required: true,
                message: "Please enter your Specialization!",
                whitespace: true
              }
            ],
            initialValue: this.state.experience_Details.Specialization
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label={<span>Post Graduation</span>}>
          {getFieldDecorator("PostGraduation", {
            // rules: [
            //     {
            //         required: true,
            //         message: "Please enter your Post Graduation!",
            //         whitespace: true
            //     }
            // ]

            initialValue: this.state.experience_Details.PostGraduation
          })(<Input />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Skills">
          {getFieldDecorator("Skills", {
            rules: [
              {
                required: true,
                message: "Please enter your Skills!"
              }
            ],
            initialValue: this.state.experience_Details.Skills
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
          {getFieldDecorator("PassportNumber", {
            rules: [
              {
                required: true,
                message: "Please enter your Passport Number!",
                whitespace: true
              }
            ],
            initialValue: this.state.passportVisa_Details.PassportNumber
          })(<Input />)}
        </FormItem>

        <FormItem {...formItemLayout} label={<span>Issue Date</span>}>
          {getFieldDecorator("IssueDate", {
            rules: [
              {
                required: true,
                message: "Please input Issue Date!",
                whitespace: true
              }
            ],
            initialValue: this.state.passportVisa_Details.IssueDate
          })(<Input type="date" />)}
        </FormItem>

        <FormItem {...formItemLayout} label={<span>Expiry Date</span>}>
          {getFieldDecorator("ExpiryDate", {
            rules: [
              {
                required: true,
                message: "Please input Expiry Date!",
                whitespace: true
              }
            ],
            initialValue: this.state.passportVisa_Details.ExpiryDate
          })(<Input type="date" />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Place of Issue">
          {getFieldDecorator("PlaceOfIssue", {
            rules: [
              { required: true, message: "Please enter Place of Issue!" }
            ],
            initialValue: this.state.passportVisa_Details.PlaceOfIssue
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
          {getFieldDecorator("PANNumber", {
            rules: [
              {
                required: true,
                message: "Please enter your PAN Number!",
                whitespace: true
              }
            ],
            initialValue: this.state.passportVisa_Details.PANNumber
          })(<Input />)}
        </FormItem>

        <FormItem {...formItemLayout} label="VISA">
          {getFieldDecorator("VISA", {
            rules: [
              { required: true, message: "If you have VISA, please select Yes" }
            ],
            initialValue: this.state.passportVisa_Details.VISA
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
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label={<span>Name of Dependent</span>}>
          {getFieldDecorator("NameOfDependent", {
            // rules: [
            //   {
            //     required: true,
            //     message: "Please enter your Name of Dependent!",
            //     whitespace: true
            //   }
            // ],
            initialValue: this.state.insurance_Details.NameOfDependent
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
            // ],
            initialValue: this.state.insurance_Details.Relation
          })(<Input />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Gender">
          {getFieldDecorator("Gender", {
            // rules: [
            //   { required: true, message: "Please enter dependent Gender!" }
            // ],
            initialValue: this.state.insurance_Details.Gender
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
            // ],
            initialValue: this.state.insurance_Details.DOBDependent
          })(<Input type="date" />)}
        </FormItem>

        <FormItem>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </FormItem>
        <FormItem>
          <Button type="primary" onClick={this.handleSaveSubmit}>
            Submit
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
