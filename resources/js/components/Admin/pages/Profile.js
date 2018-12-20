import React, { Component } from 'react'
import { marital_status, date, month, year, nationalities } from '../config/options'
import TextFieldGroup from '../common/TextFieldGroup'
import SelectFieldGroup from '../common/SelectFieldGroup'

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      family_name: '',
      first_name: '',
      middle_name: '',
      maiden_name: '',
      date: "1",
      month: "january",
      year: "1980",
      date_of_birth: 1,
      place_of_birth: '',
      nationality_at_birth: '',
      present_nationality: '',
      sex: 1,
      height: 180,
      weight: 70,
      marital_status: '',
      has_disabilities: 0,
      disabilities: [],
      permanent_address: {}, // with phone
      present_address: {}, // with phone
      office_telephone: '',
      office_fax: '',
      email: '',
      dependents: [],
      legal_permanent_status: 0,
      legal_permanent_country: '',
      legal_step_changing_nationality: 0,
      legal_step_changing_country: '',
      relatives_employed_by_intenational_org: 0,
      relatives_employed: [],
      preferred_field_of_work: '',
      accept_employment_less_than_six_months: 0,
      previously_submitted_app_for_UN: 0,
      time_submitted_app_for_UN: '',
      languages: [],
      clerical_grades: [],
      list_office_equipment_abilities: [],
      education_universities: [],
      education_schools: [],
      professional_societies: [],
      publications: [],
      employment_records: [],
      objection_making_inquiries_of_present_employer: 0,
      permanent_civil_servant: 0,
      permanent_civil_servant_year: 2000,
      references: [],
      relevant_facts: '',
      has_broken_the_law: 0,
      broken_the_law_explanation: '',
      info_are_true_date: '',
      info_are_true_signature: '',
      errors: {},
      options: {
        marital_status,
        date,
        month,
        year,
        nationalities
      }
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.dobChange = this.dobChange.bind(this)
  }

  onChange(e) {
    e.preventDefault()
  }

  onSubmit(e) {
    e.preventDefault()
  }

  dobChange(e) {
    e.preventDefault()

  }

  render() {
    let years = []

    for(var year = this.state.options.year.min; year <= this.state.options.year.max; year++) {
      years.push(year);
    }

    return(
      <div>
        <div className="container">
          <form onSubmit={this.onSubmit}>
            <TextFieldGroup
              id="family_name"
              type="text"
              name="family_name"
              label="Family Name"
              onChange={this.onChange}
              value={this.state.family_name}
              error={this.state.errors.family_name}
            />
            <TextFieldGroup
              id="first_name"
              type="text"
              name="first_name"
              label="First Name"
              onChange={this.onChange}
              value={this.state.first_name}
              error={this.state.errors.first_name}
            />
            <TextFieldGroup
              id="last_name"
              type="text"
              name="last_name"
              label="Last Name"
              onChange={this.onChange}
              value={this.state.last_name}
              error={this.state.errors.last_name}
            />
            <TextFieldGroup
              id="maiden_name"
              type="text"
              name="maiden_name"
              label="Maiden Name, (if any)"
              onChange={this.onChange}
              value={this.state.maiden_name}
              error={this.state.errors.maiden_name}
            />
            <label>Birth Date</label>
            <div className="row">
              <div className="col">
                <SelectFieldGroup
                  id="date"
                  name="date"
                  label="Date"
                  value={this.state.date}
                  onChange={this.dobChange}
                  error={this.state.errors.date}
                  options={this.state.options.date}
                />
              </div>
              <div className="col">
                <SelectFieldGroup
                  id="month"
                  name="month"
                  label="Month"
                  value={this.state.month}
                  onChange={this.dobChange}
                  error={this.state.errors.month}
                  options={this.state.options.month}
                />
              </div>
              <div className="col">
                <SelectFieldGroup
                  id="year"
                  name="year"
                  label="Year"
                  value={this.state.year}
                  onChange={this.dobChange}
                  error={this.state.errors.year}
                  options={years}
                />
              </div>
            </div>

          </form>
        </div>
      </div>
    )
  }
}

export default Profile
