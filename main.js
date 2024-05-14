document.addEventListener('DOMContentLoaded', () => {
    const peopleBtn = document.getElementById('peopleBtn');
    const filmsBtn = document.getElementById('filmsBtn');
    const planetsBtn = document.getElementById('planetsBtn');
    const dataContainer = document.getElementById('dataContainer');

    async function fetchData(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    function displayData(data) {
        dataContainer.innerHTML = '';
        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <div class="icon"><i class="fas fa-info-circle"></i></div>
                <div class="content">
                    <h3>${item.name || item.title}</h3>
                    ${item.height ? `<p class="underline">Height: ${item.height}</p>` : ''}
                    ${item.birth_year ? `<p class="underline">Birth Year: ${item.birth_year}</p>` : ''}
                </div>
            `;
            dataContainer.appendChild(card);
        });
    }

    peopleBtn.addEventListener('click', async () => {
        const peopleData = await fetchData('https://swapi.dev/api/people/');
        displayData(peopleData.results);
    });

    filmsBtn.addEventListener('click', async () => {
        const filmsData = await fetchData('https://swapi.dev/api/films/');
        displayData(filmsData.results);
    });

    planetsBtn.addEventListener('click', async () => {
        const planetsData = await fetchData('https://swapi.dev/api/planets/');
        displayData(planetsData.results);
    });
});
