window.onload = function() {
    // Get the container element
    const container = document.getElementById("cloud-container");

    // Inject multiple cloud elements (5 in this case) into the container
    container.innerHTML = `
        ${'<div class="cloud"><div class="cloudBubble1"></div><div class="cloudBubble2"></div></div>'.repeat(6)}
    `;

    // Get all the cloud elements after injection
    const clouds = document.getElementsByClassName("cloud");

    // Loop over each cloud to assign random properties
    Array.from(clouds).forEach((cloud) => {
        // Enable random position and size for each cloud
        const randomTop = Math.random() * 100;  // Random top position (0 to 100%)
        const randomLeft = Math.random() * 100; // Random left position (0 to 100%)
        const randomScale = 0.3 + Math.random() * 0.7; // Random scale between 0.3 and 1

        // Set random position and size for the cloud
        cloud.style.top = randomTop + "%"; 
        cloud.style.left = randomLeft + "%"; 
        cloud.style.transform = `scale(${randomScale})`;

        // Set a random transition duration between 6 and 13 seconds
        const randomTransitionDuration = 6 + Math.random() * 7; // Between 6 and 13 seconds
        cloud.style.transition = `all linear ${randomTransitionDuration}s`;

        // Randomize the speed of the cloud movement
        const randomInterval = Math.floor(3000 + Math.random() * 7000); // Between 3000 ms and 10000 ms
        let x = 0;  // To alternate directions

        // Start the cloud movement after 100 milliseconds
        setTimeout(() => {
            // Move the cloud left immediately
            cloud.style.left = "-50%";  // First movement to the left

            // Then start the alternating direction every random interval
            setInterval(() => {
                if (x % 2 === 0) {
                    // Move the cloud right
                    cloud.style.left = "100%"; // Move to the right edge
                } else {
                    // Move the cloud left
                    cloud.style.left = "-50%"; // Move to the left edge
                }
                x += 1;  // Increment x to alternate
            }, randomInterval); // Execute every random interval
        }, 100); // Start after 100 milliseconds
    });
};
