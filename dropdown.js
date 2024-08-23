
function navigateToPage() {
    var select = document.getElementById('mydropdown');
    var value = select.value;
    var url = '';

    switch (value) {
        case 'events':
            url = './assest/html/events.html';
            break;
        case 'wedding':
            url = './assest/html/wedding.html';
            break;
        case 'aniversiry':
            url = './assest/html/aniversiry.html'; // Example URL for Page 2
            break;
        case 'birthday':
            url = './assest/html/birthday.html'; // Example URL for Page 3
            break;
        case 'party':
            url = './assest/html/party.html'; // Example URL for Page 4
            break;
        case 'baby':
            url = './assest/html/baby.html'; // Example URL for Page 5
            break;
        case 'bridal':
            url = './assest/html/bridal.html'; // Example URL for Page 5
            break;
    }

    if (url) {
        window.location.href = url;
    }
}