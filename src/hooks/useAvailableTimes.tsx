import { useTaskStore } from "../state/tasksState";

// First function to see if time had passed and returns boolean InshaaAllah

const compareTimes = (time: string, mghr?: boolean): boolean => {
  const times = useTaskStore((state) => state.taskSetup.times);

  const date = new Date();
  const minutes = date.getMinutes();
  const extractedTime = time.match(/\d/g);

  const convertedTime = Number(extractedTime?.join(""));
  const nowTime = `${date.getHours()}${minutes < 10 ? "0" + minutes : minutes}`;

  // Changing the day on Maghrib InshaaAllah
  let maghribTime = times?.Maghrib.match(/\d/g);

  {
    /**
     ## Explanation of below if() statement
          If the time of Maghrib has come this means that another day has come.
          Then to allow all times to be selected we compare them with 0 assuming
          that is midnight (00:00). This way we allow all times to be selected, *(For Maghrib we do other calculations)
          because exp. Fajr is 04:25 AM this means it is grater than 0 and we can 
          select it. Otherwise if we will not do this this means that when Maghrib
          time comes (another day) we can not select other times exp. Maghrib
          is at 18:00 and Fajr is 04:25 AM this means when we compared to Maghrib
          it is lower and we can not select it.
*/
  }

  if (
    Number(maghribTime?.join("")) <= Number(nowTime) &&
    mghr === undefined /**  If Maghrib we can compare it with now time*/
  )
    return 0 < convertedTime;

  // Then when the hour goes 00:00 we compare them with time of the moment.
  return Number(nowTime) < convertedTime;
};

{
  /** 
  ## The hook to return times
     This hook will return available times like
     if (Fajr time has passed) it will not return it,
     if (user has selected skip at config panel) all times will be available
     InshaaAllah
    
  - Then this times can be used on select box options or auto delete task fn InshaaAllah

*/
}

const useAvailableTimes = () => {
  const times = useTaskStore((state) => state.taskSetup.times);

  if (!times?.Fajr) return;

  // Arr of objects containing booleans for available times
  const returnObj: boolean[] = [
    compareTimes(times.Fajr),
    compareTimes(times.Dhuhr),
    compareTimes(times.Asr),
    compareTimes(times.Isha, true), // Maghrib deadline
    compareTimes(times.Midnight), //Isha last time And Allah knows best
  ];

  // Then return available times InshaaAllah
  return returnObj;
};

export default useAvailableTimes;
