import { useTaskStore } from "../../state/tasksState";

const compareTimes = (time: string, isMgIsh?: boolean): boolean => {
  const times = useTaskStore((state) => state.taskSetup.times);

  const date = new Date();
  const minutes = date.getMinutes();

  const userTime = Number(time.match(/\d/g)?.join("")); // ex: 10:05
  const nowTime = `${date.getHours()}${minutes < 10 ? "0" + minutes : minutes}`;

  /** 
    Compare all prayer times with 0 to be available 
    to select because when Maghrib comes it means
    another day! Se below first if statement. 

  */

  let newDayTime = times?.Maghrib.match(/\d/g)?.join("");

  if (Number(newDayTime) <= Number(nowTime) && !isMgIsh) return 0 < userTime;

  /**
     If the time passed on props is Maghrib or Isha
     we need to compare them differently.

     For Isha we need to do different calculation. 
     Because for the end time of Isha we get on 
     time props the midnight and it may be on 00:05
     this mean that we need to calculate before 
     midnight and after midnight (start-end) time to 
     be able to know the time we can select Isha 
     as a value.

   */

  if (Number(newDayTime) <= Number(nowTime) && userTime > 200 /** 02:00AM */)
    return Number(nowTime) < userTime;

  if (userTime <= 200) {
    if (Number(newDayTime) <= Number(nowTime)) return 0 < userTime;
    return Number(nowTime) < userTime;
  }

  // Then when nowTime goes 00:00 we compare prayer times nowTime InshaaAllah.
  if (isMgIsh) return false;
  return Number(nowTime) < userTime;
};

export default compareTimes;
