/**
    ## Used to check prayer times.
       
       This custom hook is used to check if a prayer time
       as passed or not. 
       
       It is made to be used on selects inputs of task 
       panel when adding a task or modify it, this means 
       if the time of a specific prayer has passed we can 
       not select it. 
       
       Also this hook is for auto fail tasks when the 
       time to complete a specific task has passed!
 */

import { useTaskStore } from "../../state/tasksState";
import compareTimes from "../../utils/tasks/compareTimes";

const useAvailableTimes = () => {
  const times = useTaskStore((state) => state.taskSetup.times);

  if (!times?.Fajr) return; // When no times are fetched from api

  /**
             ## Get boolean arr
                
                We return this boolean array to use
                use for things mentioned above.
          */

  const returnArr = [
    compareTimes(times.Fajr),
    compareTimes(times.Dhuhr),
    compareTimes(times.Asr),
    compareTimes(times.Isha, true), // Maghrib deadline
    compareTimes(times.Midnight, true), //Isha last time And Allah knows best
  ];

  return returnArr;
};

export default useAvailableTimes;
