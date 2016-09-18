export const UsersRu: IApp.ILanguage = {
    USERS: {
        MANAGE_TITLE: 'Управление пользователями',
        LIST: {
            NEW_USER: 'Новый пользователь',
            EDIT: 'Редактировать',
            DELETE: 'Удалить',
            ADMIN_BADGE: 'Администратор'
        },
        NEW: {
            TITLE: 'Новый пользователь',
            LABEL_EMAIL: 'E-mail',
            LABEL_PASSWORD: 'Пароль',
            BUTTON_CREATE: 'Создать',
            BUTTON_CANCEL: 'Отмена',
            BUTTON_CLOSE_TITLE: 'Закрыть',
            ERRORS: {
                EMAIL_REQUIRED: 'Необходим e-mail в качестве логина',
                EMAIL_INVALID: 'Некорректный адрес e-mail',
                PASS_REQUIRED: 'Необходим ввести пароль'
            }
        },
        EDIT: {
            TITLE: 'Редактирование',
            LABEL_LOGIN: 'Логин (E-mail)',
            LABEL_NAME: 'Имя на сайте',
            LABEL_BIRTHDATE: 'Дата рождения',
            LABEL_AGE: 'Возраст на сайте',
            LABEL_BIO: 'Биография',
            BUTTON_UPDATE: 'Обновить',
            BUTTON_CANCEL: 'Отмена',
            BUTTON_CLOSE_TITLE: 'Закрыть',
            ERRORS: {
                EMAIL_REQUIRED: 'Необходим e-mail в качестве логина',
                EMAIL_INVALID: 'Некорректный адрес e-mail',
                PASS_REQUIRED: 'Необходим ввести пароль',
                NAME_REQUIRED: 'Имя обязательное поле.',
                NAME_VALIDATOR: 'Можно использовать только буквы. Имя должно начинаться с заглавной буквы',
                NAME_WORDS_VALIDATOR: 'В имени может быть не больше {{maxWords}} слов.',
                MIN_LENGTH_VALIDATOR: 'Слишком короткое имя.',
                DATE_REQUIRED: 'Дата обязательна',
                DATE_VALIDATOR: 'Проверьте дату, формат {{dateformat}}',
                AGE_REQUIRED: 'Возраст обязателен',
                AGE_VALIDATOR: 'Возраст должен быть в диапазоне {{min}}...{{max}} лет',
                AGE_INT_VALIDATOR: 'Возраст должен быть числом',
                BIO_REQUIRED: 'Биография обязательна',
                BIO_VALIDATOR: 'Слишком короткая биография.'
            }
        },
        DELETE: {
            TITLE: 'Подтверждение удаления',
            MESSAGE: 'Вы действительно хотите удалить пользователя?',
            BUTTON_OK: 'Да, хочу',
            BUTTON_CANCEL: 'Нет, я передумал'
        }
    }
};
