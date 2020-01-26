import classed from 'classed-components';

const Modal = classed.div<{ open?: boolean }>`
  z-20
  bg-black
  h-sreen
  w-screen
  ${({ open }) => (open ? 'block' : 'hidden')}
  fixed
  inset-0
`;
export default Modal;
