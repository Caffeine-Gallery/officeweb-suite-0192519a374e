import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory } from './declarations/backend/backend.did.js'; // Assuming you generate this file

// Replace with your canister ID
const canisterId = 'YOUR_CANISTER_ID';

const agent = new HttpAgent();
const actor = Actor.createActor(idlFactory, { agent, canisterId });

document.getElementById('uploadForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const file = event.target.image.files[0];
    const reader = new FileReader();
    reader.onload = async () => {
        const arrayBuffer = reader.result;
        const blob = new Uint8Array(arrayBuffer);
        try {
            await actor.upload(blob);
            alert('Image uploaded successfully');
            const uploadedImage = document.getElementById('uploaded-image');
            const imageBlob = await actor.getImage();
            const imageURL = URL.createObjectURL(new Blob([imageBlob], { type: file.type }));
            uploadedImage.src = imageURL;
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('Error uploading image');
        }
    };
    reader.readAsArrayBuffer(file);
});

