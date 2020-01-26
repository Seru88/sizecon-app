import classed from 'classed-components';

const Button = classed.button<{ fullwidth?: boolean }>`
  bg-green-500
  hover:bg-green-600
  text-white
  font-semibold
  py-2
  px-4
  ${({ fullwidth }) => (fullwidth ? 'w-full' : 'w-auto')}
  block
  border
  border-gray-400
  rounded
  shadow
  text-3xl
  text-left
`;

export default Button;
