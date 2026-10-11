"use client";

import { useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import type { Category } from "@/types/cheatsheet";

import styles from "./CheatSheet.module.css";
import { CheatSheetTopBar } from "./CheatSheetActions/CheatSheetActions";

interface CheatSheetProps {
  categories: Category[];
}

export const CheatSheet = ({ categories }: CheatSheetProps) => {
  const [search, setSearch] = useState("");
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const normalizedSearch = search.trim().toLowerCase();

  const filteredCategories = useMemo(() => {
    if (!normalizedSearch) {
      return categories;
    }

    return categories
      .map((category) => ({
        ...category,
        questions: category.questions.filter((question) => {
          const haystack = [question.question, question.answer]
            .join(" ")
            .toLowerCase();

          return haystack.includes(normalizedSearch);
        }),
      }))
      .filter((category) => category.questions.length > 0);
  }, [categories, normalizedSearch]);

  const toggleQuestion = (id: string) => {
    setOpenIds((current) => {
      const next = new Set(current);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  };

  const collapseAll = () => {
    setOpenIds(new Set());
  };

  return (
    <main className={styles.page}>
      <CheatSheetTopBar
        search={search}
        onSearchChange={setSearch}
        onClearSearch={() => setSearch("")}
        onCollapse={collapseAll}
      />

      <div className={styles.grid}>
        {filteredCategories.map((category) => (
          <section key={category.id} className={styles.card}>
            <header className={styles.cardHeader}>
              <h2>{category.name}</h2>
              <span>{category.questions.length}</span>
            </header>

            <div className={styles.questions}>
              {category.questions.map((question) => {
                const isOpen = openIds.has(question.id);

                return (
                  <article
                    key={question.id}
                    className={`${styles.question} ${
                      isOpen ? styles.questionOpen : ""
                    }`}
                  >
                    <button
                      type="button"
                      className={styles.questionButton}
                      onClick={() => toggleQuestion(question.id)}
                    >
                      <span>{question.question}</span>

                      <span className={styles.chevron} aria-hidden="true">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className={styles.answer}>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {question.answer}
                        </ReactMarkdown>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <div className={styles.empty}>Ничего не найдено</div>
      )}
    </main>
  );
};
