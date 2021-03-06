import React from 'react';
import './Button.jsx';
import {Accounts} from 'meteor/accounts-base';
export class SocialButtons extends React.Component {
  render() {
    let {
      oauthServices = {},
      className = "social-buttons"
    } = this.props;
    return (
      <div className={className}>
        {Object
          .keys(oauthServices)
          .map((id, i) => {
            console.log('socials btn :', id);
            return <Accounts.ui.Button {...oauthServices[id]} key={i} socialId={id}/>;
          })}
      </div>
    );
  }
}

Accounts.ui.SocialButtons = SocialButtons;