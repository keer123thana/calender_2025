document.addEventListener('DOMContentLoaded', function() {
    const calendarContainer = document.getElementById('calendar-container');
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
    
    const createCalendar = () => {
        months.forEach((month, index) => {
            const monthDiv = document.createElement('div');
            monthDiv.className = 'month';
            
            const monthTitle = document.createElement('div');
            monthTitle.className = 'month-title';
            monthTitle.textContent = `${month} 2025`;
            monthDiv.appendChild(monthTitle);
            
            const table = document.createElement('table');
            const headerRow = document.createElement('tr');
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            days.forEach(day => {
                const th = document.createElement('th');
                th.textContent = day;
                headerRow.appendChild(th);
            });
            table.appendChild(headerRow);
            
            const firstDay = new Date(2025, index, 1).getDay();
            const totalDays = daysInMonth(index, 2025);
            let date = 1;
            for (let i = 0; i < 6; i++) {
                const row = document.createElement('tr');
                for (let j = 0; j < 7; j++) {
                    const cell = document.createElement('td');
                    if (i === 0 && j < firstDay) {
                        cell.textContent = '';
                    } else if (date > totalDays) {
                        cell.textContent = '';
                    } else {
                        cell.textContent = date;
                        date++;
                    }
                    row.appendChild(cell);
                }
                table.appendChild(row);
            }
            monthDiv.appendChild(table);
            calendarContainer.appendChild(monthDiv);
        });
    };

    createCalendar();
});
