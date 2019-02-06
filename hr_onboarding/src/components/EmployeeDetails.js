import React, { Component } from "react";
import "antd/dist/antd.css";
import { Form, Button, Input, Tabs, Select } from "antd";
import axios from 'axios';

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

     var config = { headers: {'Access-Control-Allow-Origin': '*'}, proxy: { host: '192.168.169.165', port: 3001 } }

    
     axios.post('http://192.168.169.165:9096/employee/create', theData, config)
  .then(function(response){
    console.log('saved successfully')
  });  

    //   function HeaderPostAction() {
    //       // Send a POST request 
    //       console.log("Inside in HeaderPostAction")
    //       axios({
    //           method: 'post',
    //           url: 'http://192.168.169.165:9096/employee/create',
    //           data: theData,
    //           mode: 'CORS',
    //           headers: { "Content-Type": "application/json", "Cache-Control": "no-cache", "Postman-Token": "42e6c291-9a09-c29f-f28f-11872e2490a5" }
    //       }).then(function (response) {
    //           console.log("Heade With Authentication :" + response);
    //       }).catch(function (error) {
    //           console.log("Post Error : " + error);
    //       });
    //   }
    
  }

  personalDetails() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label={<span>First Name</span>}>
          {getFieldDecorator("firstName", {
            rules: [
              {
                required: true,
                message: "Please enter your FirstName!",
                whitespace: true
              }
            ],

            initialValue: this.state.personal_Details.firstName
          })(<Input type="text" />)}
        </FormItem>

        <FormItem {...formItemLayout} label={<span>Last Name</span>}>
          {getFieldDecorator("lastName", {
            rules: [
              {
                required: true,
                message: "Please enter your LastName!",
                whitespace: true
              }
            ],
            initialValue: this.state.personal_Details.lastName
          })(<Input />)}
        </FormItem>

        <FormItem {...formItemLayout} label={<span>DOB</span>}>
          {getFieldDecorator("dob", {
            rules: [
              {
                required: true,
                message: "Please input your DOB!",
                whitespace: true
              }
            ],
            initialValue: this.state.personal_Details.dob
          })(<Input type="date" />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Gender">
          {getFieldDecorator("gender", {
            rules: [{ required: true, message: "Please enter your Gender!" }],
            initialValue: this.state.personal_Details.gender
          })(
            <Select style={{ width: 120 }} onChange={this.handleChange}>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          )}
        </FormItem>

        <FormItem {...formItemLayout} label="Contact Number">
          {getFieldDecorator("contactNumber", {
            rules: [
              { required: true, message: "Please enter your Contact Number!" }
            ],
            initialValue: this.state.personal_Details.contactNumber
          })(<Input style={{ width: "100%" }} />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Alternate Contact Number">
          {getFieldDecorator("alternateContactNumber", {
            rules: [
              {
                required: true,
                message: "Please enter your Alternate Contact Number!"
              }
            ],
            initialValue: this.state.personal_Details.alternateContactNumber
          })(<Input style={{ width: "100%" }} />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Address">
          {getFieldDecorator("address", {
            rules: [{ required: true, message: "Please enter your Address!" }],
            initialValue: this.state.personal_Details.address
          })(
            <TextArea
              placeholder="Address"
              autosize={{ minRows: 2, maxRows: 6 }}
              style={{ width: "100%" }}
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Permanent Address">
          {getFieldDecorator("permanentAddress", {
            rules: [
              {
                required: true,
                message: "Please enter your Permanent Address!"
              }
            ],
            initialValue: this.state.personal_Details.permanentAddress
          })(
            <TextArea
              placeholder="Permanent Address"
              autosize={{ minRows: 2, maxRows: 6 }}
              style={{ width: "100%" }}
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Marital Status">
          {getFieldDecorator("maritalStatus", {
            rules: [
              { required: true, message: "Please enter your Marital Status!" }
            ],
            initialValue: this.state.personal_Details.maritalStatus
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
          {getFieldDecorator("bloodGroup", {
            rules: [
              { required: true, message: "Please enter your Blood Group!" }
            ],
            initialValue: this.state.personal_Details.bloodGroup
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
          {getFieldDecorator("totalYearsOfExperience", {
            rules: [
              {
                required: true,
                message: "Please enter your Total Years of Experience!",
                whitespace: true
              }
            ],
            initialValue: this.state.experience_Details.totalYearsOfExperience
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label={<span>Graduation</span>}>
          {getFieldDecorator("graduation", {
            rules: [
              {
                required: true,
                message: "Please enter your Graduation!",
                whitespace: true
              }
            ],
            initialValue: this.state.experience_Details.graduation
          })(<Input />)}
        </FormItem>

        <FormItem {...formItemLayout} label={<span>Specialization</span>}>
          {getFieldDecorator("specialization", {
            rules: [
              {
                required: true,
                message: "Please enter your Specialization!",
                whitespace: true
              }
            ],
            initialValue: this.state.experience_Details.specialization
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label={<span>Post Graduation</span>}>
          {getFieldDecorator("postGraduation", {
            // rules: [
            //     {
            //         required: true,
            //         message: "Please enter your Post Graduation!",
            //         whitespace: true
            //     }
            // ]

            initialValue: this.state.experience_Details.postGraduation
          })(<Input />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Skills">
          {getFieldDecorator("skills", {
            rules: [
              {
                required: true,
                message: "Please enter your Skills!"
              }
            ],
            initialValue: this.state.experience_Details.skills
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
          {getFieldDecorator("passportNumber", {
            rules: [
              {
                required: true,
                message: "Please enter your Passport Number!",
                whitespace: true
              }
            ],
            initialValue: this.state.passportVisa_Details.passportNumber
          })(<Input />)}
        </FormItem>

        <FormItem {...formItemLayout} label={<span>Issue Date</span>}>
          {getFieldDecorator("issueDate", {
            rules: [
              {
                required: true,
                message: "Please input Issue Date!",
                whitespace: true
              }
            ],
            initialValue: this.state.passportVisa_Details.issueDate
          })(<Input type="date" />)}
        </FormItem>

        <FormItem {...formItemLayout} label={<span>Expiry Date</span>}>
          {getFieldDecorator("expiryDate", {
            rules: [
              {
                required: true,
                message: "Please input Expiry Date!",
                whitespace: true
              }
            ],
            initialValue: this.state.passportVisa_Details.expiryDate
          })(<Input type="date" />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Place of Issue">
          {getFieldDecorator("placeOfIssue", {
            rules: [
              { required: true, message: "Please enter Place of Issue!" }
            ],
            initialValue: this.state.passportVisa_Details.placeOfIssue
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
          {getFieldDecorator("pannumber", {
            rules: [
              {
                required: true,
                message: "Please enter your PAN Number!",
                whitespace: true
              }
            ],
            initialValue: this.state.passportVisa_Details.pannumber
          })(<Input />)}
        </FormItem>

        <FormItem {...formItemLayout} label="VISA">
          {getFieldDecorator("visa", {
            rules: [
              { required: true, message: "If you have VISA, please select Yes" }
            ],
            initialValue: this.state.passportVisa_Details.visa
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
          {getFieldDecorator("nameOfDependent", {
            // rules: [
            //   {
            //     required: true,
            //     message: "Please enter your Name of Dependent!",
            //     whitespace: true
            //   }
            // ],
            initialValue: this.state.insurance_Details.nameOfDependent
          })(<Input />)}
        </FormItem>

        <FormItem {...formItemLayout} label={<span>Relation</span>}>
          {getFieldDecorator("relation", {
            // rules: [
            //   {
            //     required: true,
            //     message: "Please enter Relation!",
            //     whitespace: true
            //   }
            // ],
            initialValue: this.state.insurance_Details.relation
          })(<Input />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Gender">
          {getFieldDecorator("gender", {
            // rules: [
            //   { required: true, message: "Please enter dependent Gender!" }
            // ],
            initialValue: this.state.insurance_Details.gender
          })(
            <Select style={{ width: 120 }} onChange={this.handleChange}>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          )}
        </FormItem>

        <FormItem {...formItemLayout} label={<span>DOB</span>}>
          {getFieldDecorator("dobdependent", {
            // rules: [
            //   {
            //     required: true,
            //     message: "Please input DOB!",
            //     whitespace: true
            //   }
            // ],
            initialValue: this.state.insurance_Details.dobdependent
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
