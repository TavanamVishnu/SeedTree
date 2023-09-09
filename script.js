function pics() {
    const imageUrls = [
        'https://xsgames.co/randomusers/avatar.php?g=male',
        'https://xsgames.co/randomusers/avatar.php?g=male',
        'https://xsgames.co/randomusers/avatar.php?g=male',
        'https://xsgames.co/randomusers/avatar.php?g=male',
        'https://xsgames.co/randomusers/avatar.php?g=male',
        'https://xsgames.co/randomusers/avatar.php?g=male',
        'https://xsgames.co/randomusers/avatar.php?g=male',
        'https://xsgames.co/randomusers/avatar.php?g=male',
        'https://xsgames.co/randomusers/avatar.php?g=male'
    ];

    const picsDiv = document.querySelector('.pics');


    for (const imageUrl of imageUrls) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.className = 'img-fluid rounded-circle mx-2 profiles';
        picsDiv.appendChild(img);
    }
}


document.addEventListener('DOMContentLoaded', pics);
