<template>
    <main>
        <section id="feature">
        <h2>Featured: Whale Conservation</h2>
        <div class="line"></div>
        <p>Learn about our efforts to protect whale populations worldwide and how you can help. Our mission is to raise awareness and support for whale conservation through education, advocacy, and community involvement.</p>
        <div>
            <img src="https://media.istockphoto.com/id/1301664341/photo/humpback-whale-mother-and-calf-swimming-in-clear-blue-ocean.jpg?s=2048x2048&w=is&k=20&c=vLK4jDJFVTVelVJNUxo-l00xgnRVNt_eq5ZbnXjz1vY=" alt="Whale in the ocean">
            <a href="#donate">Help the Whale</a>
        </div>
        </section>
        
        <section id="about">
        <h2>About Us</h2>
        <div class="line"></div>
        <p>We are dedicated to preserving whale species and their habitats through education and advocacy. Founded in 2001, our organisation has been at the forefront of whale conservation, working with global partners to ensure the survival of these majestic creatures.</p>
        <h3>Our Mission</h3>
        <p>Our mission is to protect whales and their habitats through comprehensive conservation strategies, public education, and policy advocacy. We aim to reduce the impact of human activities on whale populations and ensure a future where whales thrive.</p>
        <h3>Our Impact</h3>
        <ul>
            <li>Over 500 whales rescued and rehabilitated</li>
            <li>Numerous awareness campaigns reaching millions worldwide</li>
            <li>Active collaboration with international conservation organisations</li>
        </ul>
        </section>
        
        <section id="donate">
        <h2>Donate</h2>
        <div class="line"></div>
        <p>Your contribution helps fund important research and conservation projects. Every donation, big or small, makes a difference in protecting whale populations and preserving their natural habitats.</p>
        <h3>How Your Donation Helps</h3>
        <p>Donations support various initiatives, including:</p>
        <ul>
            <li>Whale tracking and research programmes</li>
            <li>Rescue and rehabilitation of stranded whales</li>
            <li>Public education and outreach programmes</li>
            <li>Advocacy for stronger conservation policies</li>
        </ul>
        <h3>Donation Form</h3>
        <div class="form">
            <form>
                <label for="donor-name">Name:</label>
                <input type="text" id="donor-name" name="donor-name" required>

                <label for="donor-email">Email:</label>
                <input type="email" id="donor-email" name="donor-email" required>

                <label for="donation-amount">Donation Amount:</label>
                <input type="number" id="donation-amount" name="donation-amount" min="1" required>

                <button type="submit">Donate Now</button>
            </form>
        </div>
        </section>
        <ContactForm />
    </main>
</template>

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


img {
    width: 20%;
}

section div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

section {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin: 20px;
}

#feature {
    background-color: lightblue;
}

.line {
    width: 100%;
    height: 2px;
    background-color: blue;

}

a {
    margin-top: 10px;
    background: #02a440;
    border-radius: 5px;
    padding: 15px;
    width: 150px;
    text-align: center;
    color: white;
    text-decoration: none;
}

h2 {
    color: blue;
}

h3 {
    color:aqua;
}

</style>