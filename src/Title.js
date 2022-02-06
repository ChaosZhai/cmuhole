import React from 'react';
import { InfoSidebar } from './UserAction';

import './Title.css';

export function Title(props) {
  return (
    <div className="title-bar">
      <div className="title">
        <p>
          <span
            onClick={() =>
              props.show_sidebar(
                process.env.REACT_APP_TITLE,
                <InfoSidebar show_sidebar={props.show_sidebar} />,
              )
            }
          >
            {process.env.REACT_APP_TITLE}
          </span>
        </p>
      </div>
    </div>
  );
}
