import { FormWrapper, Option, Select } from "./Filter.styled";

function Filter({ filterHandler }) {
  return (
    <FormWrapper>
      <Select name="following" onChange={filterHandler}>
        <Option value="all">show all</Option>
        <Option value="follow">follow</Option>
        <Option value="following">following</Option>
      </Select>
    </FormWrapper>
  );
}

export default Filter;