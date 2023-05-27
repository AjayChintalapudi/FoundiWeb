import React from 'react';
import styles from './styles.module.css';
import { chatDownImg, closeImg, eventImg } from 'resources/Images/Images';
import { AboutNotificationsData } from 'constants/CardData/CardData';
import { headsetImg } from 'resources/Images/Images';

const Chat = () => {
  const chatData = [
    {
      type: 'receive',
      msg: 'dfxghxxfbfnqecijqencjinqeejcnjqbncinqejbcqehcbhebvwenjnwjbviwrhviwrriviwrnvjiwrnjvnkjwvnjkwenvjknhi',
    },
    { type: 'send', msg: 'hi' },
    { type: 'send', msg: 'hi' },
    { type: 'receive', msg: 'hello,how are you' },
    { type: 'send', msg: 'i am fine' },
    { type: 'receive', msg: 'how can i help you' },
    { type: 'send', msg: '?' },
  ];
  const chatTopSection = () => {
    return (
      <div className={styles.chatTopContainer}>
        <div className={styles.insideChatTopContainer}>
          <div className={styles.chatTopLeftSection}>
            <p className={styles.chatTopLeftText}>All chats</p>
            <div className={styles.chatTopLeftImage}>
              <img src={chatDownImg} alt="" className={styles.imageWidth} />
            </div>
          </div>
          <div className={styles.chatTopRightSection}>
            <img src={closeImg} alt="" className={styles.imageWidth} />
          </div>
        </div>
      </div>
    );
  };

  const chatLeftSection = () => {
    return (
      <div className={styles.chatLeftColumnData}>
        {AboutNotificationsData.map((item, index) => {
          return (
            <div key={index} className={styles.insideChatLeftContainer}>
              {/* <div className={styles.chatLeftMessageSection}>
                <div className={styles.insideChatLeftMessageSection}> */}
              <div className={styles.chatLeftImage}>
                <img
                  src={item.chatImage}
                  alt=""
                  className={styles.imageWidth}
                />
              </div>
              <div className={styles.chatLeftText}>
                <div className={styles.chatLeftHeader}>
                  <p className={styles.chatLeftHeaderText}>
                    {item.chatHeading}
                    <span className={styles.snoNumber}>
                      {item.chatISONumber}
                    </span>
                  </p>
                  <p className={styles.chatLeftHeaderDate}>{item.chatDate}</p>
                </div>
                <div className={styles.chatLeftPara}>
                  <p className={styles.chatLeftParaFinder}>
                    {item.chatMessageFinder}
                    <span className={styles.chatLeftParaFinderText}>
                      {item.chatMessage}
                    </span>
                  </p>
                  {item.chatNotifications && (
                    <p className={styles.chatLeftParaNotifications}>
                      {item.chatNotifications}
                    </p>
                  )}
                </div>
              </div>
            </div>
            //     </div>
            // </div>
          );
        })}
      </div>
    );
  };
  const chatRightSection = () => {
    return (
      <div className={styles.chatRightContainer}>
        <div className={styles.insidechatRightContainer}>
          <div className={styles.chatRightTopSection}>
            <div className={styles.insideChatRightSection}>
              <div className={styles.chatRightTopText}>
                <div className={styles.chatRightTopImage}>
                  <img src={headsetImg} alt="" className={styles.imageWidth} />
                </div>
                <div className={styles.chatRightHeadSetDetalis}>
                  <p className={styles.chatRightHeadSetName}> Sony XM4</p>
                  <p className={styles.chatRightIsoNumber}>SNO#F10B7NR</p>
                </div>
              </div>
              <div className={styles.chatRightOption}>
                <span className={styles.chatRightOptionOne}></span>
                <span className={styles.chatRightOptionTwo}></span>
              </div>
            </div>
          </div>
          <div className={styles.chatRightMiddleSection}>
            <div className={styles.insideChatRightSection}>
              <div className={styles.chatRightNotificationSection}>
                {chatData &&
                  chatData.map((item, index) => (
                    <div key={index}>
                      <p
                        className={
                          item.type === 'receive'
                            ? styles.receivedMsgStyle
                            : styles.sendMsgStyle
                        }
                      >
                        {item.msg}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* {chatTopSection()} */}
      <div style={{ display: 'grid', gridTemplateColumns: '40% 70%' }}>
        {chatLeftSection()}
        {chatRightSection()}
      </div>
    </div>
  );
};

export default Chat;
