import React from 'react';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state/index';
import TextFields from './TextFields';


function FadeMenu() {
  
  return (
  <div>
    <PopupState variant="popover" popupId="demo-popup-menu">
      {popupState => (
        <React.Fragment>
         <TextFields />
        </React.Fragment>
      )}
    </PopupState>
    </div>
  );
}

export default FadeMenu;