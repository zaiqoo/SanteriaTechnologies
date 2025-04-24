document.addEventListener('DOMContentLoaded', function() {
    const chatModal = document.getElementById('chatModal');
    const drugModal = document.getElementById('drugModal');
    const closeButtons = document.querySelectorAll('.close-button');
    const questionTexts = document.querySelectorAll('.question-text');
    const askQuestionButton = document.querySelector('.ask-question');
    const detailButtons = document.querySelectorAll('.details-button');

    // Function to open modal
    function openModal(modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Function to close modal
    function closeModal(modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Event listeners for question texts
    questionTexts.forEach(text => {
        text.addEventListener('click', function() {
            openModal(chatModal);
            const question = this.getAttribute('data-question');
        });
    });

    // Event listener for "Задать вопрос" button
    askQuestionButton.addEventListener('click', () => openModal(chatModal));

    // Event listeners for detail buttons
    detailButtons.forEach(button => {
        button.addEventListener('click', () => {
            const drugName = button.getAttribute('data-drug');
            const drugModal = document.getElementById('drugModal');
            const drugTitle = drugModal.querySelector('.drug-title');
            const drugContents = drugModal.querySelectorAll('.drug-content');
            
            // Скрываем все описания
            drugContents.forEach(content => {
                content.style.display = 'none';
            });
            
            // Показываем нужное описание
            const selectedContent = drugModal.querySelector(`.drug-content[data-drug="${drugName}"]`);
            if (selectedContent) {
                selectedContent.style.display = 'block';
            }
            
            // Устанавливаем заголовок
            drugTitle.textContent = button.closest('.drug-card').querySelector('h3').textContent;
            
            // Показываем модальное окно
            drugModal.style.display = 'block';
        });
    });

    // Event listeners for close buttons
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target);
        }
    });

    // Close modal when pressing Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const openModal = document.querySelector('.modal[style*="display: block"]');
            if (openModal) {
                closeModal(openModal);
            }
        }
    });

    // Обработка кнопки "Личный кабинет"
    document.querySelector('.user-section').addEventListener('click', () => {
        const accountModal = document.getElementById('accountModal');
        accountModal.style.display = 'block';
    });

    // Обработка формы регистрации
    document.getElementById('registrationForm').addEventListener('submit', (e) => {
        e.preventDefault();
        // Здесь можно добавить обработку формы, но по условию она не должна работать
        alert('Регистрация временно недоступна');
    });

    // Обработка ссылки "Войти"
    document.querySelector('.login-link').addEventListener('click', (e) => {
        e.preventDefault();
        alert('Функция входа временно недоступна');
    });
}); 