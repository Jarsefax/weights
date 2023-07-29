import React, { useState } from 'react';
import TabsComponent from './Components/TabsComponent';
import WorkingOutComponent from './Components/WorkingOutComponent';

export const WorkingOutContext = React.createContext();

function App() {
  let [workoutInProgress, setWorkoutInProgress] = useState(false);
  let [workoutShowing, setWorkoutShowing] = useState(false);

  return (
    <>
      <WorkingOutContext.Provider value={workoutInProgress}>
        {!workoutShowing && <TabsComponent /> }
      </WorkingOutContext.Provider>
      {workoutShowing && <WorkingOutComponent hide={() => setWorkoutShowing(false)} /> }
    </>
  );
}

export default App;