import React, { useEffect, useState } from 'react';
import { Popover } from '@mui/material';

const PopOver = ({ triggerElement, content, showPopup }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'modal-popover' : undefined;
  const popoverPaperProps = {
    style: {
      borderRadius: '16px',
    },
  };

  return (
    <>
      <span onClick={handleOpen}>{triggerElement}</span>
      {showPopup && (
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          marginThreshold={70}
          PaperProps={popoverPaperProps}
        >
          {content}
        </Popover>
      )}
    </>
  );
};

export default PopOver;
