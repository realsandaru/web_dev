<template>
    <h3>Donation Form</h3>
    <div class="form">
        <form @submit.prevent="submitForm">
            <label for="donor-name">Name:</label>
            <input type="text" id="donor-name" v-model="name" name="donor-name" required>

            <label for="donor-email">Email:</label>
            <input type="email" id="donor-email"  v-model="email" name="donor-email" required>

            <label for="donation-amount">Donation Amount:</label>
            <input type="number" id="donation-amount" v-model="amount" name="donation-amount" min="1" required>

            <button type="submit">Donate Now</button>
        </form>
    </div>
</template>
<script setup> 
    import { ref, defineEmits, defineProps } from 'vue'; 
    // TODO: Define reactive data properties for form fields (name, email, and amount)
    // TODO: Define the emit function to emit the 'submit-donation' event to the parent 
    const props = defineProps({
        name_prop: String,
        email_prop: String,
    });
    const name = ref(props.name_prop);
    const email = ref(props.email_prop);
    const amount = ref('');
    const emit = defineEmits(['submit-donation']);
    // Method to handle form submission
    function submitForm() {
    // TODO: Construct formData object with the current values of name, email, and amount
    // TODO: Emit the 'submit-donation' event with the constructed formData object
        const formData = {
        name: name.value,
        email: email.value,
        amount: amount.value
        };

        emit('submit-donation', formData);
    } 
</script> 
<style scoped> 
/* Scoped styles for the donation form */
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
</style> 