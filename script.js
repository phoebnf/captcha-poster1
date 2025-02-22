const poster = document.getElementById('poster');

// Create a div that will cover the glitch area
const glitchDiv = document.createElement('div');
glitchDiv.style.position = 'absolute';
glitchDiv.style.width = '6cm'; // 3cm radius diameter
glitchDiv.style.height = '6cm'; // 3cm radius diameter
glitchDiv.style.borderRadius = '50%'; // Makes it a circle
glitchDiv.style.pointerEvents = 'none'; // Allows clicks through the div
document.body.appendChild(glitchDiv);

// Update the position of the glitch effect on mouse move
document.addEventListener('mousemove', (event) => {
    glitchDiv.style.left = `${event.pageX - 3}cm`; // Center the div on the mouse
    glitchDiv.style.top = `${event.pageY - 3}cm`; // Center the div on the mouse

    // Add glitch effect when hovering over the poster
    if (event.target.id === 'poster') {
        glitchDiv.classList.add('glitch');
    } else {
        glitchDiv.classList.remove('glitch');
    }
});

// Remove glitch effect when the mouse leaves the poster
poster.addEventListener('mouseleave', () => {
    glitchDiv.classList.remove('glitch');
});
