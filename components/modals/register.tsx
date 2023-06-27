// Components
import FadeModal from './fade';


const RegisterModal = ({ visible, onClose } : any) => {
  return <FadeModal title="New Account" visible={visible} onClose={onClose}>
  </FadeModal>
}


export default RegisterModal;
