import { useMainStore } from "../state/mainState";
import { LangType } from "../ts/enums/language";

export const changeLangAsync = async (lang: LangType) => {
  const useStore = useMainStore();

  try {
    useStore.setLoading(true);

    const imported = await import(
      `../assets/languages/${lang.toLowerCase()}.json`
    );
    useStore.changeLang(imported);
  } catch (error) {
    useStore.setErrors("Error"); // Ndryshoje ne baz te gjuhes
  }

  useStore.setLoading(false);
};
