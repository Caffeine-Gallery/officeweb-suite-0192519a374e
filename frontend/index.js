document.getElementById('uploadForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            alert('Image uploaded successfully');
            document.getElementById('uploaded-image').src = '/uploads/image.png?' + new Date().getTime(); // Force reload
        } else {
            alert('Failed to upload image');
        }
    } catch (error) {
        console.error('Error uploading image:', error);
        alert('Error uploading image');
    }
});
