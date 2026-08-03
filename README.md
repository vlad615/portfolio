# Портфолио фронтенд-разработчика

Это персональный веб-портфолио, реализованное на React + TypeScript с использованием Vite, styled-components и react-router-dom.

## Что реализовано

- Современный SPA на React + TypeScript
- Маршрутизация страниц с `react-router-dom`
- Стилизация с `styled-components`
- Анимации и появление блоков с `react-awesome-reveal`
- Поддержка адаптивного меню для мобильных и десктоп экранов
- Разделы:
  - Главная страница
  - Проекты
  - О себе
  - Контакты
- Страница `Projects` с карточками основных проектов и мелких проектов
- Боковые контакты и футер с внешними ссылками

## Стек технологий

- `react` / `react-dom`
- `typescript`
- `vite`
- `styled-components`
- `react-router-dom`
- `react-awesome-reveal`
- `typewriter-effect`
- `gh-pages` для деплоя

## Структура проекта

- `src/main.tsx` — точка входа, подключение глобальных стилей
- `src/App.tsx` — маршрутизация и базовая логика приложения
- `src/styles/` — глобальные стили, темы и анимации
- `src/components/` — повторно используемые UI-компоненты
- `src/layout/` — основные страницы и макеты
  - `header/` — шапка сайта и навигация
  - `footer/` — подвал
  - `pages/` — разделы `home`, `about`, `projects`, `contacts`
- `public/elements/` — графические элементы дизайна
- `src/accets/` — изображения и медиа ресурсы

## Как запустить проект локально

1. Установите зависимости:

```bash
pnpm install
```

2. Запустите дев-сервер:

```bash
pnpm dev
```

3. Откройте в браузере адрес из вывода (`http://localhost:5173` или аналогичный)

> В `App.tsx` используется `BrowserRouter basename="/portfolio"`, поэтому сайт настроен на запуск из поддиректории `portfolio` при деплое на GitHub Pages.
