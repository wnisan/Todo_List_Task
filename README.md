# Todo List Application

Простое приложение Todo List, реализованное с использованием React, Redux и TypeScript.

## Технологии

- **React 19** - UI библиотека
- **Redux 5** - Управление состоянием
- **Redux-Thunk** - Middleware для асинхронных действий
- **TypeScript** - Типизация
- **Webpack** - Сборка проекта
- **ESLint** - Линтинг кода

## Функционал

- ✅ Добавление новых задач
- ✅ Отметка задач как выполненных
- ✅ Загрузка тестовых задач через fake API
- ✅ Обработка состояний загрузки и ошибок
- ✅ Валидация props с помощью PropTypes и TypeScript

## Структура проекта

```
Todo-List-Task/
├── src/
│   ├── api/
│   │   └── fakeApi.ts          # Fake API для имитации запросов
│   ├── components/
│   │   ├── TodoItem.tsx        # Компонент отдельной задачи
│   │   ├── TodoList.tsx        # Компонент списка задач
│   │   └── *.css               # Стили компонентов
│   ├── store/
│   │   ├── actions.ts          # Action creators
│   │   ├── reducers.ts         # Reducers
│   │   └── index.ts            # Store configuration
│   ├── App.tsx                 # Главный компонент
│   ├── index.tsx               # Точка входа
│   └── index.html
├── .babelrc                    # Конфигурация Babel
├── .eslintrc.json              # Конфигурация ESLint
├── .gitignore
├── tsconfig.json               # Конфигурация TypeScript
├── webpack.config.js           # Конфигурация Webpack
└── package.json
```

## Установка и запуск

1. Установите зависимости:
```bash
npm install
```

2. Запустите dev-сервер:
```bash
npm run dev
```

3. Соберите production версию:
```bash
npm run build
```

4. Запустите линтинг:
```bash
npm run lint
```

## Компоненты

### App
Главный компонент приложения, содержит форму для добавления задач и кнопку загрузки тестовых данных.

### TodoList
Компонент для отображения списка всех задач. Использует Redux для получения данных.

### TodoItem
Компонент отдельной задачи с чекбоксом для отметки выполнения.

## Redux

### Actions
- `ADD_TODO` - Добавление новой задачи
- `TOGGLE_TODO` - Переключение статуса задачи
- `FETCH_TODOS_START` - Начало загрузки задач
- `FETCH_TODOS_SUCCESS` - Успешная загрузка задач
- `FETCH_TODOS_ERROR` - Ошибка загрузки задач

### Reducers
Единственный reducer `todoReducer` обрабатывает все действия и управляет состоянием приложения.

## Fake API

В файле `src/api/fakeApi.ts` реализована имитация API запросов:
- `fetchTodosApi()` - Получение списка задач
- `addTodoApi()` - Добавление задачи
- `updateTodoApi()` - Обновление задачи

## Особенности реализации

- ✅ Все компоненты функциональные
- ✅ Используются React Hooks (useState, useDispatch, useSelector)
- ✅ Контролируемые компоненты для форм
- ✅ Правильное использование ключей в списках
- ✅ Валидация props через PropTypes и TypeScript
- ✅ Использование redux-thunk для асинхронных действий
- ✅ Единый store для управления состоянием
- ✅ Обработка ошибок в async actions
- ✅ Типизация Redux actions и reducers

## Лицензия

ISC

