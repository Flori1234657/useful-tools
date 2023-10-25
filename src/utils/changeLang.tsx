import { LangType } from "../ts/enums/language";
import { useMainStore } from "../state/mainState";

export const changeLang = async (lang: LangType) => {
  try {
    useMainStore.setState(() => ({ loading: true }));

    const imported = await import(
      `../assets/languages/${lang.toLowerCase()}.json`
    );
    useMainStore.setState(() => ({ language: imported }));
  } catch (err) {
    useMainStore.setState((state) => ({ errors: state.language.errors.lang }));
  }

  useMainStore.setState(() => ({ loading: false }));
};
