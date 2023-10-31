import { useMainStore } from "../../../state/mainState";

const ToolCard = () => {
  const lang = useMainStore((state) => state.language.pages.tools);

  return (
    <div
      className="tools__panel__cards-grid"
      aria-label="Grid for cards of tools"
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15, 16, 17, 18].map(
        (el) => (
          <div
            key={el}
            className="tools__panel__cards-grid__card"
            aria-label="Card Item"
          >
            <h3>{lang.toolsNames[0]}</h3>
          </div>
        )
      )}
    </div>
  );
};

export default ToolCard;
