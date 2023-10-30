import { useMainStore } from "../../../../state/mainState";
import useHijriCalendar from "../../../../hooks/useHijriCalendar";

const TopInfo = () => {
  const locale = useMainStore((state) => state.language.nav.lang);
  const mainStore = useMainStore();
  const lang = useMainStore(
    (state) => state.language.pages.tasks.secondPanel.topInfo
  );
  const { hjDate, hjMonth, hjMonths, hjYear } = useHijriCalendar();

  return (
    <div
      className="tasks__panel__top-info-wrapper"
      aria-label="Top info of panel"
    >
      <h2 dir={locale.chosen !== "ar" ? "ltr" : "rtl"}>
        {lang[0]}: {`${hjDate} ${hjMonths[hjMonth - 2]} ${hjYear}`}
      </h2>
      <h2>
        {mainStore.tasks.length.toLocaleString(
          mainStore.language.nav.lang.localeString
        )}{" "}
        {lang[1]}
      </h2>
    </div>
  );
};

export default TopInfo;
