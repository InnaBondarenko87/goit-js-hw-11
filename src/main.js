const form = document.querySelector('.form');
const input = form.elements['search-text'];

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = input.value.trim();

  // Перевірка на порожній рядок
  if (query === '') {
    alert('Будь ласка, введіть пошукове слово!');
    return;
  }

  try {
    // Приклад запиту – змінити на свій API
    const response = await axios.get(
      `https://api.example.com/search?q=${encodeURIComponent(query)}`
    );
    console.log('Результати пошуку:', response.data);
    // Тут можна додати код для виводу зображень
  } catch (error) {
    console.error('Помилка при пошуку:', error);
  }
});
