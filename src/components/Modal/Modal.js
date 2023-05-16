// import React, { useEffect } from 'react';
// import styles from './styles.module.css';
// import { RxCross1 } from 'react-icons/rx';
// const Modal = (props) => {
//   // After opening the Modal Stop Scrolling of the Page
//   useEffect(() => {
//     if (props.isVideoOpen) {
//       document.body.classList.add(styles.noscroll);
//     } else {
//       document.body.classList.remove(styles.noscroll);
//     }
//   }, [props.isVideoOpen]);
//   return (
//     <div className={styles.videoPopUp}>
//       <span
//         className={styles.closeIcon}
//         onClick={() => {
//           props.setIsVideoOpen(false);
//         }}
//       >
//         <RxCross1 />
//       </span>

//       <iframe
//         width="100%"
//         height="100%"
//         src="https://www.youtube.com/embed/CpgNVyUxUV0"
//         title="YouTube video player"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// };

// export default Modal;

import React, { useEffect } from 'react';
import styles from './styles.module.css';

const Modal = ({ open, onClose, children }) => {
  // After opening the Modal Stop Scrolling of the Page
  useEffect(() => {
    if (open) {
      document.body.classList.add(styles.noscroll);
    } else {
      document.body.classList.remove(styles.noscroll);
    }
  }, [open]);

  if (!open) {
    return null;
  }
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.closeicon} onClick={onClose}>
          {/* &times; */}
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
