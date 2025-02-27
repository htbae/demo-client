import Modal from './Modal';
import ModalHeader from './_components/ModalHeader';
import ModalBody from './_components/ModalBody';
import ModalFooter from './_components/ModalFooter';

import { ModalType } from './modal-type';

export type { ModalType };
export default Object.assign(Modal, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});
