# Interview Cheatsheet

Компактная шпаргалка для собеседований: поиск сверху, группы карточками, вопросы раскрываются прямо внутри карточек.

## Запуск

```bash
npm install
cp .env.example .env.local
npm run dev
```

Без Supabase приложение автоматически использует встроенные seed-данные для просмотра UI.

## Supabase

1. Создай бесплатный проект Supabase.
2. Открой SQL Editor.
3. Выполни `supabase/schema.sql`.
4. Заполни `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=...
```

После этого страница начнёт читать категории и вопросы из PostgreSQL.

Первые записи вопросов пока лежат в `lib/seed.ts`, чтобы приложение запускалось без БД. Для реальной работы их можно перенести в таблицу `questions`.
