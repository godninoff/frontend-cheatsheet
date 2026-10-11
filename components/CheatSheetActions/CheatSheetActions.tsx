import styles from "../CheatSheet.module.css";

interface CheatSheetTopBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  onClearSearch: () => void;
  onCollapse: () => void;
}

export const CheatSheetTopBar = ({
  search,
  onSearchChange,
  onClearSearch,
  onCollapse,
}: CheatSheetTopBarProps) => {
  return (
    <div className={styles.topBar}>
      <div className={styles.searchWrapper}>
        <input
          className={styles.search}
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Поиск по вопросам..."
        />

        {search && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={onClearSearch}
            aria-label="Очистить поиск"
          >
            ×
          </button>
        )}
      </div>

      <div className={styles.actions}>
        <button
          type="button"
          onClick={onCollapse}
          className={styles.actionButton}
        >
          Свернуть
        </button>
      </div>
    </div>
  );
};
