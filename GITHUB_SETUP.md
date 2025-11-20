# Инструкция по отправке проекта на GitHub

## Шаги для отправки проекта:

### 1. Создайте репозиторий на GitHub
   - Перейдите на https://github.com/new
   - Укажите имя репозитория (например, `Todo-List-Task`)
   - **НЕ создавайте** README, .gitignore или license
   - Нажмите "Create repository"

### 2. Подключите локальный репозиторий к GitHub
   Замените `YOUR_USERNAME` и `YOUR_REPO_NAME` на ваши данные:

```bash
# Добавьте remote репозиторий
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Или если используете SSH:
# git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git

# Проверьте подключение
git remote -v
```

### 3. Отправьте ветку main на GitHub
```bash
# Переключитесь на main ветку
git checkout main

# Отправьте main на GitHub
git push -u origin main
```

### 4. Отправьте ветку todo-list на GitHub
```bash
# Переключитесь обратно на todo-list
git checkout todo-list

# Отправьте ветку todo-list на GitHub
git push -u origin todo-list
```

### 5. Создайте Pull Request
   - Перейдите на страницу вашего репозитория на GitHub
   - Вы увидите сообщение о том, что ветка `todo-list` была недавно отправлена
   - Нажмите кнопку **"Compare & pull request"**
   - Заполните описание PR (например: "Todo List application with React, Redux and TypeScript")
   - Нажмите **"Create pull request"**

## Альтернативный способ (через GitHub CLI):

Если у вас установлен GitHub CLI, можно создать PR прямо из терминала:

```bash
gh pr create --base main --head todo-list --title "Todo List Application" --body "Todo List app with React, Redux and TypeScript"
```

## Текущее состояние репозитория:

- ✅ Ветка `main` содержит начальный коммит
- ✅ Ветка `todo-list` содержит весь код проекта и README
- ✅ `.gitignore` настроен правильно
- ✅ README.md с описанием проекта

После выполнения этих шагов вы сможете создать Pull Request из ветки `todo-list` в `main`.

