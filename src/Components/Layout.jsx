import React from 'react';

import TryoutFormWizard from '../Containers/TryoutFormWizard';

export default function Layout() {
  return (
    <div className="container-fluid ss-form-container" style={{ color: 'white' }}>
      <div className="row">
        <div className="col-md-12 text-center">
          <h1>REGISTER IN OUR TRYOUTS</h1>
          <h3>Participate in one of the most exciting experiences
            and get the chance to be invited to our institute</h3>
          <TryoutFormWizard />
        </div>
      </div>
    </div>
  );
}
