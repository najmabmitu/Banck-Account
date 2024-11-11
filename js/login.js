document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordFieId = document.getElementById('pass');
    const password = passwordFieId.value;
    if (email === 'najmabmitu@gmail.com' && password === 'najma') {
        window.location.href = 'bank.html'
    }
    else {
        alert('dosnot allow this')
    }
})

{/* <section class="bg-blue-100 text-center mt-6">
            <h3 class="text-3xl font-medium mb-4">Please Login</h3>
            <div>
                <input type="email" class="mb-2 p-4 py-1" name="" id="user-email" placeholder="Your email"><br>
                <input type="password" class="mb-2 p-4 py-1" name="" id="pass" placeholder="password"><br>
                <button id="btn-submit" type="submit"
                    class="bg-amber-500 px-8 py-2 text-white font-medium rounded-lg mb-4 hover:bg-sky-700">Log
                    In</button>
            </div>
        </section> */}
// <script src="js/login.js"></script>