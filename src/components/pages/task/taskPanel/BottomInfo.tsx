import { useMainStore } from "../../../../state/mainState";

const BottomInfo = () => {
  const lang = useMainStore((state) => state.language.pages.tasks);
  const mainStore = useMainStore();

  return (
    <p dir={lang.headingTxt === "خطط ليومك!" ? "rtl" : "ltr"}>
      {mainStore.tasks.length > 0
        ? lang.secondPanel.bottomInfoText
        : lang.secondPanel.noTasksText}
    </p>
  );
};

export default BottomInfo;
