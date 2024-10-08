import styled from "styled-components"

const StyledInput = styled.input`
  width: 100px;
  position: relative;
  border-radius: 5rem;
`
type InputProps = {
  onChange: Function;
  value: any;
}

function CustomInput (props: InputProps) {
  return <StyledInput type="text" value={props.value} onChange={e => props.onChange(e)} />
}

export default CustomInput