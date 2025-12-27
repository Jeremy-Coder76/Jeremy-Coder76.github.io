// Automatically wrap tables in a scrollable container for mobile responsiveness
document.addEventListener('DOMContentLoaded', function() {
    const tables = document.querySelectorAll('table');

    tables.forEach(function(table) {
        // Check if table is not already wrapped
        if (!table.parentElement.classList.contains('table-wrapper')) {
            // Create wrapper div
            const wrapper = document.createElement('div');
            wrapper.className = 'table-wrapper';

            // Insert wrapper before table
            table.parentNode.insertBefore(wrapper, table);

            // Move table into wrapper
            wrapper.appendChild(table);
        }
    });
});
