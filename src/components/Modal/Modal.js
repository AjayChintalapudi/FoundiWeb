import React, { useEffect } from 'react';
import styles from './styles.module.css';
import { RxCross1 } from 'react-icons/rx';

const Modal = (props) => {
  useEffect(() => {
    if (props.isVideoOpen) {
      document.body.classList.add(styles.noscroll);
    } else {
      document.body.classList.remove(styles.noscroll);
    }
  }, [props.isVideoOpen]);
  return (
    <div className={styles.videoPopUp}>
      <span
        className={styles.closeIcon}
        onClick={() => {
          props.setIsVideoOpen(false);
        }}
      >
        <RxCross1 />
      </span>

      <iframe
        width="1000"
        height="450"
        src="https://www.youtube.com/embed/CpgNVyUxUV0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Modal;
