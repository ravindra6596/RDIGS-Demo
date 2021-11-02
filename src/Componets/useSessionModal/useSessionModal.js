// import React,{useState,useEffect,useSession} from 'react';
// import {Modal,ModalBody} from 'react-strap';
// import cookie_bite from '../../img/cookie-bite.svg';
// const useSessionModal = ()=> {
//     const session = useSession();
//     const [showModal, hideModal] = useSessionModal();
//     const [showModal, setShowModal] = useState(false);
//     const hideModal = ()=>{
//         const modalKey = "modalSession";
//         localStorage.setItem(modalKey, session);
//         setShowModal(false);
//     }
//     useEffect(()=> {
//         const modalKey = "modalSession";
//         const modalSession = localStorage.getItem(modalKey);
//         setShowModal(modalSession!==session);
//     });
//     return [showModal, hideModal];
// }

//  const Modal = () => {
//   return (
//     <>
//       {showModal ? (
//       <Modal>
//       <img src={cookie_bite} alt="" className="modal-imgtry"></img>
// 	    </Modal>
      
//       ) : null}
//     </>
//   );
//       };
// export default useSessionModal;