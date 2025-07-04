# Roll Craft - Інтерактивне Ігрове Поле

## Опис Проєкту

"Roll Craft" - це інтерактивна гра, що імітує настільну гру з кидком кубика та переміщенням фішки по ігровому полю. Застосунок реалізовано з використанням сучасного стеку технологій React, TypeScript, Tailwind CSS та Framer Motion для плавних анімацій та ефектів.

## Основні Можливості

- **Ігрове поле 6x6:** Квадратне поле з 36 клітинок по периметру, зі стартовою позицією та різними типами клітинок (`Cash`, `VIP`, `Dice` тощо).
- **Фішка гравця:** Візуально відображається на поточній клітинці, анімовано переміщується після кидка кубика.
- **Анімований кубик:** При натисканні кнопки "Roll" кубик анімовано обертається і показує випадкове число від 1 до 6.
- **Лічильник кидків та таймер:** Індикатор доступних кидків та таймер для їхнього відновлення.
- **Адаптивний дизайн:** Застосунок коректно відображається на пристроях з шириною екрана від 320px.

## Технології, що Використовуються

- **React:** Бібліотека для створення користувацьких інтерфейсів.
- **TypeScript:** Надбудова над JavaScript, що додає статичну типізацію для покращення надійності та читабельності коду.
- **Tailwind CSS:** Утилітарний CSS-фреймворк для швидкої та адаптивної стилізації.
- **Framer Motion:** Бібліотека для декларативної анімації інтерфейсів React.
- **Vite:** Швидкий інструмент для збірки та розробки фронтенду.

## Встановлення та Запуск

1.  **Клонуйте репозиторій:**

    ```bash
    git clone https://github.com/new
    cd roll-craft
    ```

2.  **Встановіть залежності:**

    ```bash
    npm install
    # або
    yarn install
    ```

3.  **Запустіть застосунок у режимі розробки:**

    ```bash
    npm run dev
    # або
    yarn dev
    ```

    Відкрийте `http://localhost:5173` (або інший порт, вказаний у консолі) у вашому браузері.

4.  **Збірка для продакшну:**

    ```bash
    npm run build
    # або
    yarn build
    ```

## Структура Проєкту

```
.
├── public/                 # Статичні файли
├── src/
│   ├── assets/             # Зображення (іконки клітинок, кубика)
│   ├── components/
│   │   ├── Board.tsx       # Компонент ігрового поля
│   │   ├── CellIcon.tsx    # Компонент для відображення іконок клітинок
│   │   ├── Dice.tsx        # Компонент кубика та його анімації
│   │   └── RollIndicator.tsx # Компонент індикатора кидків та таймера
│   ├── constants/          # Константи (наприклад, мапінг іконок)
│   ├── App.tsx             # Головний компонент застосунку, містить основну логіку
│   └── index.css           # Глобальні стилі Tailwind CSS та кастомні стилі
├── index.html              # Основний HTML-файл
├── package.json            # Залежності та скрипти проєкту
├── tsconfig.json           # Конфігурація TypeScript
├── tailwind.config.js      # Конфігурація Tailwind CSS
└── vite.config.js          # Конфігурація Vite
```

## Покращення та Можливі Розширення

- **Анімація фішки:** Реалізувати рух фішки як окремого об'єкта по полю (не просто підсвічування клітинок) за допомогою `framer-motion` для більш плавного та візуально привабливого переміщення.
- **Взаємодія з клітинками:** Додати специфічні дії при приземленні на клітинку (наприклад, отримання грошей на `Cash` клітинці, додатковий кидок на `Dice` клітинці).
- **Підказки/інтерактивність іконок:** Додати спливаючі підказки (tooltips) при наведенні на іконки клітинок або зробити їх клікабельними для отримання додаткової інформації.
- **Централізація констант:** Винести всі ігрові константи (`TOTAL_CELLS`, `COOLDOWN_START`, `cellTypes` тощо) в окремий файл для кращої організації та підтримки.
- **Звукові ефекти:** Додати звуки кидка кубика та переміщення фішки.

---
