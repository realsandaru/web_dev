<template>
    <section id="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions or would like to get involved, please reach out to us. We would love to hear from you!</p>
        <div class="form">
            <form  @submit.prevent="handleSubmit">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="name"  name="name" required>

                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" name="email" required>

                <label for="message">Message:</label>
                <textarea id="message" name="message" v-model="message" rows="4" required></textarea>

                <button type="submit">Send Message</button>
            </form>
        </div>
        <div class="valid" v-show="showConfirmation">
            <p>Form is Valid.</p>
        </div>
    </section>
</template>

<script setup>
    // Import Vue's ref to create reactive properties
    import { ref } from 'vue';
    // Define reactive properties for form fields
    const name = ref('');
    const email = ref('');
    const message = ref('');
    // TODO: Define reactive properties for email and message
    // Reactive property to control the display of the confirmation message
    const showConfirmation = ref(false);
    // Function to handle form submission
    function handleSubmit() {
    // Show the confirmation message
    showConfirmation.value = true;
    // Clear form fields
    name.value = '';
    email.value = '';
    message.value = '';
    // TODO: Add code to clear other form fields
    } 
</script>

<style scoped>
.form {
    display: flex;
    justify-content: center;
    align-items: center;
}

form button {
    margin-top: 10px;
    background: #02a440;
    border-radius: 5px;
    border: transparent;
    padding: 15px;
    width: 100%;
    text-align: center;
    color: white;
    text-decoration: none;
}

form {
    width: 50%;
    height: 30vh;
    border: solid;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

h2 {
    color: blue;
}

h3 {
    color:aqua;
}
</style>
