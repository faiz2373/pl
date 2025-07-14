document.getElementById("generateItineraryBtn").addEventListener("click", function() {
    const destination = document.querySelector('select[name="destination"]').value;
    const duration = document.querySelector('select[name="duration"]').value;
    const experience = document.querySelector('select[name="experience"]').value;

    if (
        destination === "Select destination..." ||
        duration === "Select duration..." ||
        experience === "Select experience..."
    ) {
        alert("Please select all fields before generating your itinerary.");
        return;
    }

    const message = `Hello, I would like to plan my trip with these preferences:
Destination: ${destination}
Duration: ${duration}
Experience Type: ${experience}`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappNumber = "919876543210"; // your agency number

    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
});
